import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {
  Observable,
  interval,
  timer,
  fromEvent,
  of,
  from,
  map,
  filter,
  reduce,
  take,
  scan,
  tap,
  mergeMap,
  switchMap,
  concatMap,
  exhaustMap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

/* CREATOR OPERATOS */

const intervalObservable = interval(1000);

const timerObservable = timer(4000, 1000);

const eventObservable = fromEvent(document, 'click');

const ofObservable = of(1, 2, 3, 4, 5); //push xong thì complete

const fromObservable = from(
  [1, 2, 3, 4, 5]
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
);

const ajaxObservable = ajax.get('https://jsonplaceholder.typicode.com/todos/1');

/*----------------------------------------------------------*/

/* PIPEABLE OPERATOS */

const ofObservable2 = ofObservable.pipe(map((value) => `$${value}.00`));

const ofObservable3 = ofObservable.pipe(filter((value) => value >= 3));

const ofObservable4 = ofObservable.pipe(
  reduce((accumulate, value) => {
    return accumulate + value;
  }, 0)
);

const intervalObservable2 = interval(1000).pipe(
  take(6),

  tap((value) => {
    console.log('tap operator: ', value);
  }),

  reduce((accumulate, value) => {
    return accumulate + value;
  }, 0),

  scan((accumulate, value) => {
    return accumulate + value;
  }, 0)
);

/*----------------------------------------------------------*/

/* FLATTENING OPERATOR */
/* mergeMap,switchMap,concatMap,exhaustMap */

const eventObservable2 = eventObservable.pipe(
  exhaustMap((value) =>
    ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
  )
);

/*----------------------------------------------------------*/

const observer = eventObservable2.subscribe((value) => {
  console.log(value);
});

// const observable = new Observable((subscriber) => {
//   subscriber.next('OK');
//   subscriber.complete();
//   subscriber.error('error');
// });
// const observer2 = observable.subscribe({
//   next(value) {
//     console.log(value);
//   },
//   complete() {
//     console.log('success');
//   },
//   error(err) {
//     console.log(err);
//   },
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
