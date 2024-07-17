import { from, fromEvent, interval, Observer, of, range } from "rxjs";
import { distinct, map, skip, takeUntil, tap } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

const nums$ = of(1, 1, 2, 3, 4, 3, 4, 5, 1, 5);

nums$.pipe(
    distinct()
)
//.subscribe(observer);

interface ICast { name: string; }

const personajes: ICast[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' }
];

from(personajes)
    .pipe(distinct(x => x.name))
    .subscribe(observer);
