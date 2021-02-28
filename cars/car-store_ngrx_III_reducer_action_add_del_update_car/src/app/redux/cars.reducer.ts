import { Car } from '../car.model';
import { CAR_ACTION, CarsAction } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '02.02.2021', 'Focus', false, 1),
    new Car('Audi', '02.03.2021', 'A4', false, 2),
    new Car('Opel', '13.02.2021', 'Omega', false, 3),
    new Car('Seat', '14.02.2021', 'Leon', false, 4),
    new Car('Toyota', '14.02.2021', 'Venza', false, 5),
  ]
}

export function carsReducer (state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)] // payload в нашем случаее - это просто машини, поэтому в него есть все поля, что и у машин
      }
    case CAR_ACTION.UPDATE_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id) // payload, как раз и есть та машина с которой мы сейчас работаем
      state.cars[idx].isSold = true
      return {
        ...state,
        cars: [...state.cars]
      }
    default:
      return state
  }
}
