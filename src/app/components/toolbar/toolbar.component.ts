import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { FiltersConfigService } from 'src/app/services/filters-config.service';
import { SelectDropDown } from 'src/app/interfaces/selectValue.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent implements OnInit {

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
    public dialog: MatDialog
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

  changedValue(){
    console.log('value changed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  openFiltersModal(){
    console.log('Open filters button');
  }

}
