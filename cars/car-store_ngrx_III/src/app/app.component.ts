import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // I VARIANT
  public cars: Car[] = [];

  public carState?: Observable<Cars>

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    // I VARIANT
    // this.store.select('carPage').subscribe(({cars}) => {
    //   this.cars = cars
    // })

    // II VARIANT
    this.carState = this.store.select('carPage')
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id)
  }
}
