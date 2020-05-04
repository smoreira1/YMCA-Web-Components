trigger YEventRegistrationTriggerAfter on Event_Registration__c (after insert, after update)
{
    // This Trigger is used to send an Event Registration, it's Members and Event to Playerspace.
    // This Trigger is also used to indicate whether or not to resend Waivers

    System.debug('<) ----------> Trigger start');

    List<Trigger_Setting__mdt> triggerSettingEntries = [
        SELECT Id
        FROM Trigger_Setting__mdt
        WHERE DeveloperName = 'YEventRegistrationTriggerAfter'
        AND Enable_Trigger__c = true
    ];

    if (Test.isRunningTest() || triggerSettingEntries.size() > 0)
    {
        // 1) loop through triggered records and make a map of all records to send to PlayerSpace (eventRegistrationMap)
        Map<Id, String> eventRegistrationMap = new Map<Id, String>();
        // 2) make a list of carts related to triggered records
        // 3) make a list of event registrations related to those carts
        List<Cart__c> relatedCartList = new List<Cart__c>();
        List<Id> resendWaiverListIds = new List<Id>();
        List<Event_Registration__c> eventRegistrationsRelatedToCart = new List<Event_Registration__c>();

        for (Event_Registration__c rec : Trigger.new)
        {
            resendWaiverListIds.add(rec.Cart__c);
            if (Trigger.isInsert && rec.Send_to_Playerspace__c)
            {
                System.debug('<) ----------> [Trigger.isInsert] Checking PlayerSpace sync list.');
                if (!eventRegistrationMap.containsKey(rec.Id))
                {
                    System.debug('<) ----------> Adding Event Registration to PlayerSpace sync list.');
                    eventRegistrationMap.put(rec.Id, '');
                }
            }

            if (Trigger.isUpdate && rec.Send_to_Playerspace__c) // && rec.Playerspace_Status__c != 'Success'
            {
                System.debug('<) ----------> [Trigger.isUpdate] Checking PlayerSpace sync list.');
                if (!eventRegistrationMap.containsKey(rec.Id))
                {
                    System.debug('<) ----------> Adding Event Registration to PlayerSpace sync list.');
                    eventRegistrationMap.put(rec.Id, '');
                }
            }

            // sendEventRegistrations
            // ================================================================================
            if (eventRegistrationMap.size() > 0)
            {
                PsApiHelper.processEventRegistrationFuture(eventRegistrationMap);
                System.debug('<) ----------> PsApiHelper.processEventRegistrationFuture: Future called...');
            }
        }

        if (Trigger.isUpdate){
            if(relatedCartList.size() != 0 ){
                    relatedCartList = [SELECT Id, (SELECT Id, Waiver_Submitted__c FROM Event_Registrations__r)
                            FROM Cart__c
                            WHERE Id IN :resendWaiverListIds];

            for (Cart__c relatedCart : relatedCartList){
                Boolean resendWaivers = false;
                for(Event_Registration__c relatedEventRegs :relatedCart.Event_Registrations__r){
                    //if an event reg is found for which the waiver is not submitted, set boolean to true
                    //this indicates that Resend Waivers should still be set on the cart
                    if(relatedEventRegs.Waiver_Submitted__c == FALSE){
                        resendWaivers = true;
                        break;
                    }
                }

                if(!resendWaivers){
                    relatedCart.Resend_Waivers__c = FALSE;
                }

            }
            update relatedCartList;
            }
        }
    }
}
