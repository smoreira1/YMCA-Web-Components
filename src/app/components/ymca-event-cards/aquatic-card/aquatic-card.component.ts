import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../snack-bar/snack-bar.component';

@Component({
  selector: 'app-aquatic-card',
  templateUrl: './aquatic-card.component.html',
  styleUrls: ['./aquatic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AquaticCardComponent implements OnInit {

  @Input() id: string;
  @Input() description: string;
  @Input() createdDate: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() startTime: string;
  @Input() endTime: string;
  @Input() locationName: string;
  @Input() memberOnly: string;
  @Input() memberPrice: string;
  @Input() startingAge: string;
  @Input() startingAgeType: string;
  @Input() endingAge: string;
  @Input() endingAgeType: string;
  @Input() highGrade: string;
  @Input() lowGrade: string;
  @Input() nonMemberPrice: string;
  @Input() gender: string;
  @Input() remainingSlots: string;
  @Input() season: string;
  @Input() zipcode: string;
  @Input() distanceToEvent: string;
  @Input() parentProduct: string;
  @Input() numberOfClassesPerWeek: string;
  @Input() lowAge: string;
  @Input() highAge: string;

  @Input() monday: string;
  @Input() tuesday: string;
  @Input() wednesday: string;
  @Input() thursday: string;
  @Input() friday: string;
  @Input() satruday: string;
  @Input() sunday: string;

  private durationInSeconds = 5;



  @Output() addItemToCart = new EventEmitter();

  public state = {
    visible: true,
    addToCartEnabled: true,
  };

  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cd.detectChanges();
  }

  addToCart() {
    console.log(this.id);
    this.cartService.addCartItem(this.id);
    this.openSnackBar();
  }

  public setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  public formatData() {

  }

  public openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'start',
    });
  }

}
