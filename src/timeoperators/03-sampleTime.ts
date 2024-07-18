import { asyncScheduler, from, fromEvent, interval, Observer, of, range } from "rxjs";
import { map, sampleTime } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

/**
 * emite el ultimo valor del intervalo de tiempo
 */
const click$ = fromEvent<MouseEvent>(document, 'click');
click$
    .pipe(map(({ x, y }) => ({ x, y })))
    .pipe(sampleTime(2000))
    .subscribe(observer);
