import { from, Observer, of, range } from "rxjs";
import { map, scan, take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

const num$= of(1,2,3,4,5);
num$.pipe(tap(console.log),take(3))
.subscribe(observer);