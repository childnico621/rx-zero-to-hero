import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letters$ = of('a', 'b', 'c');

letters$
    .pipe(mergeMap(
        (letter) => interval(1000)
            .pipe(map(i => letter + i))
            .pipe(take(3))
    ))
// .subscribe({
//     next: value => console.log('next: ', value),
//     error: err => console.warn('error:', err.message),
//     complete: () => console.info('complete letters!')
// });


const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
    .pipe(mergeMap(() => interval$
        .pipe(takeUntil(mouseup$))
    ))
    .subscribe(console.log);