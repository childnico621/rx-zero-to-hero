import { asyncScheduler, interval, Observer, take, timeInterval, timer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

const interval$ = interval(1000,asyncScheduler).pipe(take(4))//.pipe(timeInterval());
const timer$ = timer(2000); 

console.log('Inicio');
 interval$.subscribe(observer);
// intervalTimer$.subscribe(observer);
// timer$.subscribe(observer);
console.log('Fin');
