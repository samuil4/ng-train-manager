# Train dashboard manager

## Specification

This task should follow the following specification:

There will be 2 user roles: Admin (can edit) and User (can only filter and search)

### Modules

- Train Dashboard Module
  - View all
  - View by ID
  - Create new
- Wagons
  - View all
  - View by ID
  - Create new
- Home Module
- 404 Module
- Login - Optional
- register - Optional
- Forgot password - Optional
- Search TBD

### Train

A train must contain the following data: ID, name, Departure destination, Arrival destination, Departure time, Arrival time, Confirmed status, Wagon composition, Number of reserved seats.

- id: number - unique ID
- name: string - name of the train
- departureDestination: string - name of city
- arrivalDestination: string - name of city
- departureTime: timestamp
- arrivalTime: timestamp
- confirmed: boolean - shows the status of the train, true means that the train will departure on time
- wagons: Wagon[] - if a wagon is removed remove it form the trains that has it
- reservedSeats: number

### Wagon

A train wagon must consist of the follwoing information: wagon class (1,2,3), wagon type (seat, sleep, buffet), number of seats.

- id: number - unique ID / can not assign wagon to multiple trains
- wagonClass: number - 1 | 2 | 3
- wagonType: string - seat | sleep | buffet
- seats: number - number of available seats

### Trains Overview / Schedule Dashboart

Display list of all trains.
The user can filter the trains by entering: ID(name), Departure destination, Arrival destination, Confirmed status, etc.

## Role Admin

## Role User

## API static

https://github.com/samuil4/ticket-reservation-demo-server

### End points

- GET/trains
- GET/PUT/POST/DELETE trains/:id
- GET/PUT/POST/DELETE wagons
- GET/PUT/POST/DELETE wagons/:id

## API Firebase

> Install firebase `npm install -g firebase-tools`

> Login to firebase via CLI

- `firebase init`
- `firebase login`
- `firebase deploy`
