import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { YMCAEventsService } from 'src/app/services/ymca-events.service';

export interface Food {
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

  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

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

}
