import { Component, OnInit, Inject, Input } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { FiltersConfigService } from 'src/app/services/filters-config.service';
import { MatDialogRef} from '@angular/material/dialog';
import { SelectDropDown } from 'src/app/interfaces/selectValue.interface';



@Component({
  selector: 'app-mobile-filter-modal',
  templateUrl: './mobile-filter-modal.component.html',
  styleUrls: ['./mobile-filter-modal.component.scss']
})
export class MobileFilterModalComponent implements OnInit {

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
  
  constructor(
    private ymcaEventsService: YMCAEventsService, 
    private filtersConfigService: FiltersConfigService,
    public dialogRef: MatDialogRef<MobileFilterModalComponent>
  ) {}

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
