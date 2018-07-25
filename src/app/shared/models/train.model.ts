import { ITrainModel } from '@shared/models/train.model.interface';
import { Wagons } from '@shared/models/wagons';
import { ITrain } from '@shared/models/train.interface';

export class TrainModel implements ITrainModel {
  departureDestination = 'Plovdiv';
  arrivalDestination = 'Sofia';
  name = 'New Train';
  numberOfSeats: number;
  seatsReserved: number;
  departureTime: number = Date.now();
  departureDate: Date = new Date(Date.now());
  arrivalTime: number = Date.now();
  arrivalDate: Date = new Date(Date.now());
  confirmed = false;
  wagons: Wagons | null = null;

  $key = '';

  constructor(train?: ITrain) {
    if (train) {
      this.departureTime = train.departureTime;
      this.arrivalTime = train.arrivalTime;
      this.departureDate = new Date(train.departureTime || this.departureTime);
      this.arrivalDate = new Date(train.arrivalTime || this.arrivalTime);
      this.$key = train.$key || '';
      this.name = train.name;
      this.departureDestination = train.departureDestination;
      this.arrivalDestination = train.arrivalDestination;
    }
  }

  set departureTimeDate(newDate: Date) {
    this.departureDate = newDate;
    this.departureTime = newDate.getTime();
  }

  get departureTimeDate(): Date {
    return this.departureDate;
  }

  set value(train: ITrainModel) {
    Object.assign(this, train);
  }

  toJSON(): ITrain {
    const data: ITrain = {
      name: this.name,
      departureDestination: this.departureDestination,
      arrivalDestination: this.arrivalDestination,
      departureTime: this.departureDate.getTime(),
      arrivalTime: this.arrivalDate.getTime(),
      confirmed: this.confirmed,
    };

    // Do not assign $key as it is not needed
    // if (this.$key) {
    //   data.$key = this.$key;
    // }

    return data;
  }
}
