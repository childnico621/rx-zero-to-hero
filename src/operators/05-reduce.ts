import { interval, Observer, range } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('total: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

const number$ = range(1, 5);//.pipe(filter(x => x % 2 === 1));

number$.pipe(
    reduce((acc, curr) => acc + curr, 0)
).subscribe(observer);


interval(500)
.pipe(
    take(6),
    tap(console.log),
    reduce((acc, curr) => acc + curr, 0)
)
.subscribe(
{
    next: value => console.log('total: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
}
)