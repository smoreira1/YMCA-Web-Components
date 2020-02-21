import { Component, OnInit, Input } from '@angular/core';
import { FiltersConfigService } from '@shared/services/filters-config.service';
import { SelectDropDown } from '@shared/interfaces/select-value.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters-side-nav',
  templateUrl: './filters-side-nav.component.html',
  styleUrls: ['./filters-side-nav.component.scss']
})
export class FiltersSideNavComponent implements OnInit {

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

  distances: SelectDropDown[];
  ages: SelectDropDown[];
  times: SelectDropDown[];


  days = new FormControl();
  daysList: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private filtersConfigService: FiltersConfigService) {

  }

  ngOnInit() {
    this.distances = this.filtersConfigService.distances();
    this.ages = this.filtersConfigService.ages(99, true);
    this.times = this.filtersConfigService.times();
    this.zipcode = this.zipcode || '';
    this.monday = this.monday || 'false';
    this.tuesday = this.tuesday || 'false';
    this.wednesday = this.wednesday || 'false';
    this.thursday = this.thursday || 'false';
    this.friday = this.friday || 'false';
    this.saturday = this.saturday || 'false';
    this.sunday = this.sunday || 'false';
  }


  search(){

  }
}
