import { Injectable } from "@angular/core";
import { SelectDropDown } from "../interfaces/selectValue.interface";

@Injectable({
  providedIn: "root"
})
export class FiltersConfigService {
  constructor() {}

  times(): Array<SelectDropDown> {
    return [
      { value: "12:00 AM-11:59 PM", viewValue: "Any" },
      { value: "5:00 AM-9:00 AM", viewValue: "5AM - 9AM" },
      { value: "9:00 AM-12:00 PM", viewValue: "9AM - 12PM" },
      { value: "12:00 PM-3:00 PM", viewValue: "12PM - 3PM" },
      { value: "3:00 PM-6:00 PM", viewValue: "3PM - 6PM" },
      { value: "6:00 PM-10:00 PM", viewValue: "6PM - 10PM" },
    ];
  }

  ages(ageHighLimit: number, belowOne: boolean): Array<SelectDropDown> {
    const ageConfig = new Array<SelectDropDown>();
    if (belowOne) {
      ageConfig.push({ value: `<1`, viewValue: `< 1` });
    }
    for (let i = 1; i < ageHighLimit; i++) {
      ageConfig.push({ value: `${i}`, viewValue: `${i}` });
    }
    return ageConfig;
  }

  distances(): Array<SelectDropDown> {
    return [
      { value: "Any", viewValue: "Any" },
      { value: "5", viewValue: "5 Miles" },
      { value: "10", viewValue: "10 Miles" },
      { value: "15", viewValue: "15 Miles" },
      { value: "20", viewValue: "20 Miles" },
      { value: "50", viewValue: "50 Miles" },
    ];
  }

  genders(): Array<SelectDropDown> {
    return [
      { value: "", viewValue: "Any" },
      { value: "Male", viewValue: "Male" },
      { value: "Female", viewValue: "Female" },
    ];
  }
}
