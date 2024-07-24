import { concat, fromEvent, interval, merge, Observer, of, pipe } from "rxjs";
import { take } from "rxjs/operators";


const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const interval$ = interval(1000);
// Stream
var obs$ = merge(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    interval$.pipe(take(1)),
    of('a')
);

obs$
    .subscribe(observer);
