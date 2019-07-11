import { DayAvailability } from './day-availability.interface';

export interface YMCAEvent {
    id: string;
    description: string;
    createdDate: string;
    startDate: Date;
    endDate: Date;
    startDateTime: string;
    endDateTime: string;
    location: string;
    memberOnly: boolean;
    memberPrice: string;
    startingAge: number;
    startingAgeType: string;
    endingAge: number;
    endingAgeType: string;
    highGrade: string;
    lowGrade: string;
    nonMemberPrice: string;
    gender: string;
    remainingSlots: number;
    dayAvailability: DayAvailability;
    season: string;
    zipcode: string;
    distanceToEvent: number;
    parentProduct: string;
    numberOfClassesPerWeek: number;
}