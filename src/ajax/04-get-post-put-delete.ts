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

// ajax.put(url,
//     { id: 1, name: 'nicolás' },
//     { 'my-token': 'abc123' })
//     .subscribe(observer);


ajax({
    url,
    method: 'DELETE',
    headers: { 'my-token': 'abc123' },
    body:{ id: 1, name: 'nicolás' }
})
    .subscribe(console.log);