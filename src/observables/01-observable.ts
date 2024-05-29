import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //forzar error
    // const a = undefined;
    // a.nombre = 'nicolas';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

const observer: Observer<string> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

obs$.subscribe(observer);