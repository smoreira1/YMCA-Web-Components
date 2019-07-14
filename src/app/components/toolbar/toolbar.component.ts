import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';

export interface SelectDropDown {
  value: string;
  viewValue: string;
}

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

  
  foods: SelectDropDown[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  distances: SelectDropDown[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '15', viewValue: '15'},
    {value: '20', viewValue: '20'},
    {value: '50', viewValue: '50'},
  ];

  ages: SelectDropDown[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '15', viewValue: '15'},
    {value: '20', viewValue: '20'},
    {value: '50', viewValue: '50'},
  ]

  times: SelectDropDown[] = [
    {value: '12:00 AM-11:59 PM', viewValue: 'Any'},
    {value: '5:00 AM-9:00 AM', viewValue: '5AM - 9AM'},
    {value: '9:00 AM-12:00 PM', viewValue: '9AM - 12PM'},
    {value: '12:00 PM-3:00 PM', viewValue: '12PM - 3PM'},
    {value: '3:00 PM-6:00 PM', viewValue: '3PM - 6PM'},
    {value: '6:00 PM-10:00 PM', viewValue: '6PM - 10PM'},
  ]

  constructor(private ymcaEventsService: YMCAEventsService) { }

  ngOnInit() {
    this.zipcode = this.zipcode || '';
    this.distance = this.distance || '5';
    this.age = this.age || 'Any';
    this.time = this.time || '';
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
