import { asyncScheduler, observeOn, Observer, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5);
const src2$ = range(1,10).pipe(observeOn(asyncScheduler));

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

console.log('Inicio');

src2$.subscribe(observer);
console.log('Fin');