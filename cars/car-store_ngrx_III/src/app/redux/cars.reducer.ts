import { Car } from '../car.model';
import { AddCar, CAR_ACTION } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '02.02.2021', 'Focus', false, 1),
    new Car('Audi', '02.03.2021', 'A4', false, 2),
  ]
}

export function carsReducer (state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default:
      return state
  }
}
