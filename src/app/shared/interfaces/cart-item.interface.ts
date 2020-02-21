export interface CartItem {
    id: string;
    description: string;
    createdDate: string;
    durationInMinutes: number;
    startDateTime: Date;
    endDateTime: Date;
    startingAge: number;
    endingAge: number;
    location: string;
    coed: boolean;
    memberOnly: boolean;
    memberPrice: number;
    nonMemberPrice: number;
}
