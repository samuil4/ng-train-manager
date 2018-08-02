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

  createSeats(rowCount: number, columnCount: number) {
    const columnLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

    for (let currentRow = 1; currentRow <= rowCount; currentRow++) {
      for (
        let currentColumn = 1;
        currentColumn <= columnCount;
        currentColumn++
      ) {
        this.seats.push({
          id: currentRow + columnLetters[currentColumn - 1],
          isReserved: false,
        });
      }
    }
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
