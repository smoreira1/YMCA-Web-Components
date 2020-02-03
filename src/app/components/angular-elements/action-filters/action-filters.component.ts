import { Component, OnInit, Input } from '@angular/core';
import { SelectDropDown } from 'src/app/interfaces/selectValue.interface';
import { FormControl } from '@angular/forms';
import { FiltersConfigService } from 'src/app/services/filters-config.service';

@Component({
  selector: 'app-action-filters',
  templateUrl: './action-filters.component.html',
  styleUrls: ['./action-filters.component.scss']
})
export class ActionFiltersComponent implements OnInit {

  public loadingDataFromServer = false;
  public showFiller = false;

  @Input() zipcode: string;
  @Input() distance: string;
  @Input() age: string;
  @Input() time: string;
  @Input() monday: string;
  @Input() tuesday: string;
  @Input() wednesday: string;
  @Input() thursday: string;
  @Input() friday: string;
  @Input() saturday: string;
  @Input() sunday: string;
  @Input() toolbarConfiguration: string;

  distances: SelectDropDown[];
  ages: SelectDropDown[];
  times: SelectDropDown[];
  genders: SelectDropDown[];
  familyCenters: SelectDropDown[];
  sortEvents: SelectDropDown[];
  discounts: SelectDropDown[];
  discountList: string[] = ["Any", "Only Early Registration"];
  days = new FormControl();
  daysList: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  constructor(private filtersConfigService: FiltersConfigService,) {
    this.distances = this.filtersConfigService.distances();
    this.ages = this.filtersConfigService.ages(99, true);
    this.times = this.filtersConfigService.times();
    this.genders = this.filtersConfigService.genders();
    this.zipcode = this.zipcode || "";
    this.toolbarConfiguration = this.toolbarConfiguration || "";
    this.setDefaultDaysofTheWeek();
  }

  ngOnInit() {
  }

  public setDefaultDaysofTheWeek(){
    this.monday = this.monday || "false";
    this.tuesday = this.tuesday || "false";
    this.wednesday = this.wednesday || "false";
    this.thursday = this.thursday || "false";
    this.friday = this.friday || "false";
    this.saturday = this.saturday || "false";
    this.sunday = this.sunday || "false";
  }


  public search(){

  }
}
