import { from, fromEvent, interval, Observer, of, range } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, map, skip, takeUntil, tap } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete!')
};

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
    .pipe(distinctUntilKeyChanged('name'))
    .subscribe(observer);
