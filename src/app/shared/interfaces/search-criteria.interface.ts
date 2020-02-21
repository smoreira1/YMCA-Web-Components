import { DayAvailability } from './day-availability.interface';
import { Gender } from '../enums/gender.enum';

export interface FilterBy {
  zipCode: string;
  distance: string;
  age: string;
  time: string;
  discounted: boolean;
  gender: Gender;
  daysOfTheWeek: DayAvailability;
  location: string;
  sortBy: string;
}

export interface SearchCriteria {
  filterBy: FilterBy;
  tag: string;
}
