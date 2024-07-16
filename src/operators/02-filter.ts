import { from, Observer, range } from "rxjs";
import { filter } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

// const src$ = range(1, 10);

// src$.pipe(filter(x => x % 2 == 1)).subscribe(console.log);

interface Character {
    level: string;
    name: string;
};

const characters: Array<Character> = [
    { level: 'heroe', name: 'Batman' },
    { level: 'heroe', name: 'Robin' },
    { level: 'villain', name: 'Joker' },
]

const src$ = from(characters).pipe(filter(x => x.level !== 'heroe'));

src$.subscribe(observer);
