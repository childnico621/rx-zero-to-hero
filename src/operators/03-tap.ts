import { Observer, range } from "rxjs";
import { tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

const numbs$ = range(1, 5).pipe(
    tap(x => console.log('before', x))
).subscribe(observer);
