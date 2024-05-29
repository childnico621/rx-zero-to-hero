import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};


const intervals$ = new Observable<number>(subscriber => {
    // crear contador 1,2,3,4,5....
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log('Counting');
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        console.log('End counting');
        clearInterval(interval);
    }
});

const subs1 = intervals$.subscribe(observer);
const subs2 = intervals$.subscribe(observer);
const subs3 = intervals$.subscribe(observer);

subs1.add(subs2.add(subs3));

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    //const subs2= intervals$.subscribe(num => console.log('Num:', num));
    console.log('Timeout Completed');

}, 6000);