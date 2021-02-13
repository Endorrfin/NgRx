import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '02.02.2021', 'Focus', false, 1),
    new Car('Audi', '02.03.2021', 'A4', false, 2),
  ];


  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id)
  }
}
