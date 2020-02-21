import { Component, OnInit, ChangeDetectorRef, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  @Input() message: string;

  public state: {};
  constructor(private el: ElementRef, private cd: ChangeDetectorRef, ) { }

  ngOnInit() {
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }


}
