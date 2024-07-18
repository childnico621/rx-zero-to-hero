import { asyncScheduler, from, fromEvent, interval, Observer, of, range } from "rxjs";
import { auditTime, map, sample, sampleTime, tap } from "rxjs/operators";

const time = 5000;
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};
/**
 * emite el ultimo en el tiempo estipulado
 */


const click$ = fromEvent<MouseEvent>(document, 'click')
    .pipe(map(({ x, y }) => ({ x, y })))
    .pipe(tap(val => console.log('tap', val)));

click$.pipe(
    auditTime(time)
).subscribe(observer);