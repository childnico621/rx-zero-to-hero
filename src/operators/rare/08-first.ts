import { fromEvent, Observer, of, range } from "rxjs";
import { first, map } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(x => x.clientY >= 150)
).subscribe(observer);