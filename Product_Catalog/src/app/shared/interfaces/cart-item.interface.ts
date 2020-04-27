export interface CartItem {
    id: string;
    description: string;
    createdDate: string;
    durationInMinutes: number;
    startDate: Date;
    endDate: Date;
    startingAge: number;
    endingAge: number;
    location: string;
    coed: boolean;
    memberOnly: boolean;
    memberPrice: number;
    nonMemberPrice: number;
    eventTitle: string;
    parentProduct: string;
    familyProduct: string;
}
