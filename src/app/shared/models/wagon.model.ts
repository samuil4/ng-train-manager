import { IWagon, SeatType } from './wagon.interface';

export class WagonModel implements IWagon {
  type: SeatType = 'economy';
  seats = [];
  name = '';
  $key = '';

  constructor(wagon?: IWagon) {
    if (wagon) {
      this.type = wagon.type;
      this.seats = wagon.seats;
      this.name = wagon.name;
      this.$key = wagon.$key || '';
    }
  }

  set value(wagon: IWagon) {
    Object.assign(this, wagon);
  }

  get seatsCount(): number {
    return this.seats.length;
  }

  get isFull(): boolean {
    return !!this.seats.find(seat => seat.isReserved);
  }

  toJSON(): IWagon {
    const data: IWagon = {
      name: this.name,
      type: this.type,
      seats: this.seats,
    };

    // Do not assign $key as it is not needed
    // if (this.$key) {
    //   data.$key = this.$key;
    // }

    return data;
  }
}
