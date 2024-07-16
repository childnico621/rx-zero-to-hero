import { Observer, fromEvent } from "rxjs";

//** Eventos del DOM */

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

src1$.subscribe(({ x, y }) => {
    console.log(x);
    console.log(y);


});
src2$.subscribe(event => {
    console.log(event.key);

});