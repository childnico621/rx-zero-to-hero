import { fromEvent, interval, Observer, of, range } from "rxjs";
import { map, skip, takeUntil, tap } from "rxjs/operators";


const button = document.createElement('button');
button.innerHTML='Stop Timer';

document.querySelector('body').append(button);

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

const counter$ = interval(1000);

const click$=fromEvent(document, 'click').pipe(
    tap(()=>console.log('tap antes del skip')),
    skip(1),
    tap(()=>console.log('tap despues del skip')),
);

counter$.pipe(
    takeUntil(click$)
)
.subscribe(observer);