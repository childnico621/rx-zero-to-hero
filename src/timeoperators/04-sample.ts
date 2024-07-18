import { asyncScheduler, from, fromEvent, interval, Observer, of, range } from "rxjs";
import { map, sample, sampleTime } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};
/**
 * emite el valor al momento que el evento pasado al parametro ocurre
 */
const counter$ = interval(1000);

const click$ = fromEvent<MouseEvent>(document, 'click')
    .pipe(map(({ x, y }) => ({ x, y })));

counter$.pipe(
    sample(click$)
).subscribe(observer);