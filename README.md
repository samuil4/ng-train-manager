# Train dashboard manager

## Specification

This task should follow the following specification:

There will be 2 user roles: Admin (can edit) and User (can only filter and search)

## Modules

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

## Data

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

### Ticket

Issued tickets for each user

- id: number
- uid: number - user id
- tid: train id
- wid: wagon id
- seat: number | null

### Trains Overview / Schedule Dashboart

Display list of all trains.
The user can filter the trains by entering: ID(name), Departure destination, Arrival destination, Confirmed status, etc.

## Role Admin

## Role User

## API static - deprecated

https://github.com/samuil4/ticket-reservation-demo-server

### End points - deprecated

- GET/trains
- GET/PUT/POST/DELETE trains/:id
- GET/PUT/POST/DELETE wagons
- GET/PUT/POST/DELETE wagons/:id

## Firebase

### Setup

> Install firebase `npm install -g firebase-tools`

> Login and deploy to firebase via CLI

- `firebase login`
- `firebase init`
- `firebase deploy`

### Setup Web Console

#### DB Rules

```javascript
service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {
      allow read, update, delete: if request.auth.uid == userId;
      allow create: if request.auth.uid != null;
    }
    match /trains/{trainId} {
      allow read: if true;
      allow create, update, delete: if request.auth.uid != null;
    }
    match /wagons/{wagonId} {
      allow read, create, update, delete: if request.auth.uid != null;
    }
    match /tickets/{ticketId} {
      allow read, update, delete: if resource.data.uid == 'users/' + request.auth.uid;
      allow create: if exists(/databases/$(database)/documents/users/$(request.auth.uid));
    }
  }
}
```

### Setup AngularFire

- `yarn add angularfire2@next`
- `yarn add @firebase/database`
- `yarn add @firebase/auth`
- `yarn add @firebase/app`
- `yarn add @firebase/firestore-types`
- `yarn add @firebase/storage-types`
- `yarn add @firebase/messaging-types`
- `yarn add @firebase/util`
- `yarn add @firebase/database-types`
- `yarn add @firebase/auth-types`

# Homework for 18.07.2018

1.  Setup a new project `ng new MyProjectName --routing`
2.  Create Aliases `@env` to environment.ts
3.  Create 2 modules home and auth
4.  Auth module must include 2 sub-modules Login / Register
5.  Setup router to open
    5.1 / -> home
    5.2 auth -> login
    5.3 auth/register -> register
6.  Auth login and register container components must use one shared form
7.  Configure Firebase
    7.1 Store config to environment.ts -> see current project
8.  Include AngularFire modules to app.module and initialize with store config in environment.ts
9.  Create Auth service that uses firebase
10. Initiare login / register actions - HERE 18.07.2018
11. Display user email in the home component - for testing only
12. Create some kind of store implementation to store and manage states
    12.1 User
    12.2 Trains
    12.3 Wagons
    12.4 Tickets
13. Create interfaces / classes / domain models for the data
14. Create GUARDS that prevent home form opening when not logged
