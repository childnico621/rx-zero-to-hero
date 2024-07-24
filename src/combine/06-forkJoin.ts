import { combineLatest, concat, forkJoin, fromEvent, interval, merge, Observer, of, pipe } from "rxjs";
import { map, take } from "rxjs/operators";


const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const weight = of(2, 4, 6);
const height = of(1, 3, 5);
const vowel$ = of('a','e','i','o','u')

const obs$ = forkJoin([weight, height, vowel$]);

obs$
    .subscribe(observer);

// out [6,5,'u']