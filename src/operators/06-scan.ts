import { from, Observer, range } from "rxjs";
import { map, scan } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('acum: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

// const number$ = range(1, 5);//.pipe(filter(x => x % 2 === 1));
// const total = (acc, curr) => acc + curr;

// number$.pipe(
//     scan(total, 0)
// ).subscribe(observer);

interface IUser {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;
}

const user: IUser[] = [
    { id: 'nagudelo', auth: false, token: null },
    { id: 'nagudelo', auth: true, token: 'ABC' },
    { id: 'nagudelo', auth: true, token: 'ABC123' }
];

const state$ = from(user)
    .pipe(
        scan<IUser, IUser>((acc, cur) => ({ ...acc, ...cur }), { age: 33 })
    );

const id$ = state$.pipe(
    map(state => state)
).subscribe(console.log);