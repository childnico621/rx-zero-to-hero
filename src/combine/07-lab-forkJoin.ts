import { combineLatest, concat, forkJoin, fromEvent, interval, merge, Observer, of, pipe } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, take } from "rxjs/operators";


const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const GITHUB_API_URL='https://api.github.com/users';
const GITHUB_USER='childnico621';


const req1$= ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`);
const req2$= ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`);
const req3$= ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`);


const obs$ = forkJoin([req1$, req2$, req3$]);

obs$
    .subscribe(observer);

// out [6,5,'u']