import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';
import { FiltersConfigService } from 'src/app/services/filters-config.service';
import { SelectDropDown } from 'src/app/interfaces/selectValue.interface';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import * as Sticky from 'sticky-js';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent implements OnInit, OnChanges {

  public loadingDataFromServer = false;

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
  days = new FormControl();
  daysList: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(
    private ymcaEventsService: YMCAEventsService,
    private filtersConfigService: FiltersConfigService,
    private shoppingCartService: ShoppingCartService,
    public dialog: MatDialog,
  ) {
      var sticky = new Sticky('.sticky');
  }

  ngOnInit() {

    this.distances = this.filtersConfigService.distances();
    this.ages = this.filtersConfigService.ages(99, true);
    this.times = this.filtersConfigService.times();
    this.genders = this.filtersConfigService.genders();
    this.zipcode = this.zipcode || '';
    this.monday = this.monday || 'false';
    this.tuesday = this.tuesday || 'false';
    this.wednesday = this.wednesday || 'false';
    this.thursday = this.thursday || 'false';
    this.friday = this.friday || 'false';
    this.saturday = this.saturday || 'false';
    this.sunday = this.sunday || 'false';
    this.toolbarConfiguration = this.toolbarConfiguration || '';
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

  search(){
    console.log('Searching...');
  }

  private scrollToFilterNavigation(){

  }

}
