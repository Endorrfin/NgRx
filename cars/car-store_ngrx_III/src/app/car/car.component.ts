import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { DeleteCar } from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car // параметр car типа Car из модели

  constructor(
    private store: Store<AppState>
  ) {
  }


  onBuy() {
    this.car.isSold = true
  }

  onDelete() {
this.store.dispatch(new DeleteCar(this.car))
  }
}
