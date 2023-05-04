import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Observable, map, of, reduce, throwError } from 'rxjs';

// const observable = new Observable((subscriber) => {
//   subscriber.next('OK');
//   subscriber.complete();
//   subscriber.error('error');
// });

const observable = of(1, 2, 3, 4, 5).pipe(
  // map((value) => {
  //   return `${value}$`;
  // })=>Tạo obser với 5 giá trị mới rồi mới push xuống (chạy xong hết 1 lần)
  //Lặp qua các giá trị được push
  reduce((acc, value) => {
    return acc + value;
  }, 0)
);

observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('success');
  },
  error(err) {
    console.log(err);
  },
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
