import { combineLatest, concat, fromEvent, interval, merge, Observer, of, pipe } from "rxjs";
import { map, take } from "rxjs/operators";


const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const weight = of(2, 4, 1);
const height = of(1, 3, 5);

const obs$ = combineLatest([weight, height]).pipe(
  map(([w, h]) => w * h),
);

obs$
    .subscribe(observer);