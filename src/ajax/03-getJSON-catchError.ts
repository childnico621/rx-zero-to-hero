import { catchError, map, Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
/**
 * rxjs/ajax better for petitions
 */
// const url = 'https://api.github.com/usXXXXers?per_page=5';
const url = 'https://httpbin.org/delay/1';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: err => console.warn('error:', err.message),
    complete: () => console.info('complete!')
};

const errorHandler = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        users: []
    });
}

const obs$ = ajax.getJSON(url).pipe(catchError(errorHandler));
const obs2$ = ajax(url).pipe(catchError(errorHandler));

// obs2$.subscribe(data => console.log('ajax:', data));
obs$
.pipe(catchError(errorHandler))
.subscribe(observer);