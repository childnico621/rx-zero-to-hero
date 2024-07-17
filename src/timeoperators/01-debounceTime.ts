import { from, fromEvent, interval, Observer, of, range } from "rxjs";
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, map, skip, takeUntil, tap } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

const click$ = fromEvent(document, 'click');
click$
    .pipe(debounceTime(1000))
    //.subscribe(observer);

// ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
.pipe(map(x=> (<any>x.target).value))
.pipe(debounceTime(2000))
.pipe(distinctUntilChanged())
.subscribe(observer);