import { Observer, of } from "rxjs";


const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 5);

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};
console.log('obs start');

obs$.subscribe(observer);
console.log('obs end');