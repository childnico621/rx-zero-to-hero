import { from, fromEvent, interval, Observer, of, range } from "rxjs";
import { distinct, distinctUntilChanged, map, skip, takeUntil, tap } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

const nums$ = of(1, 1, 2, 3, 3, 3, 4, 4, 1, 2, 5);

nums$
    .pipe(distinctUntilChanged())
    .subscribe(observer);

interface ICast { name: string; }

const personajes: ICast[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'Zero' }
];

from(personajes)
    .pipe(distinctUntilChanged((x, y) => x.name === y.name))
    .subscribe(observer);
