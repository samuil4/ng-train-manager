import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { environment } from '@env';
// import { Observable, throwError } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import { Train } from './models/train';

// const Get_URL = `${environment.API_URL}/trains`;

@Injectable({
  providedIn: 'root',
})
export class TrainDashboardService {
  // constructor(private http: HttpClient, private store: Store) {
  //   console.log('Service created');
  // }
  // getTrains(): Observable<Train[]> {
  //   /***
  //    * API GET Example with error capturing
  //    */
  //   return this.http.get<Train[]>('Get_URL').pipe(
  //     catchError((error, obs) => {
  //       console.log('Catch', error, obs);
  //       return throwError('My custom error message');
  //     }),
  //     tap(next => {
  //       this.store.set('trains', next)
  //     }),
  //   );
  // }
  // editTrain(train: Train) {
  //   const Put_URL = `${environment.API_URL}/trains/${train.id}`;
  //   return this.http.put<Train[]>(Put_URL, train);
  // }
  // getTrain(id: string) {
  //   return this.http.get<Train>(`${Get_URL}/${id}`);
  // }
}
