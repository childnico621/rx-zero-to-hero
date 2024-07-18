import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
/**
 * rxjs/ajax better for petitions and error handle
 */
const url = 'https://api.github.com/useXXrs?per_page=5';

const errorHandler = (response: Response) => {
    if (!response.ok) throw new Error(response.statusText);

    return response;
}

// const fetchPromise = fetch(url);
// fetchPromise
//     .then(resp=> resp.json())
//     .then(data=>console.log('data:', data))
//     .catch(error=>console.warn('users error:', error));


// fetchPromise
//     .then(errorHandler)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(error => console.warn('users error:', error));

const catchErrorHandler = (err: AjaxError) => {
    console.warn('error on:', err.message);
    return of([]);
}


ajax(url)
    .pipe(map(resp => resp.response))
    .pipe(catchError(catchErrorHandler))
    .subscribe(users => console.log('users:', users));