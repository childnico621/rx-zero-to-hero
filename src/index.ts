import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};


const intervals$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    )

    return () => {
        clearInterval(intervalID);
        console.log('destroyed interval');
        
    }
});

/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, error, complete
 */
const subject$ = new Subject<number>();
const subscription = intervals$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();

}, 3500);