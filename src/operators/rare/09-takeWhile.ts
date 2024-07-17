import { fromEvent, Observer, of, range } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Complete!')
};

interface IPosition { x?: number; y?: number; }
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map((pos: IPosition) => pos),
    takeWhile(({ y }) => y <= 150, true)
).subscribe(observer);