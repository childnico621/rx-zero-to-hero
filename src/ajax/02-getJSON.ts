import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
/**
 * rxjs/ajax better for petitions
 */
// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1';

const obs$= ajax.getJSON(url, {
    'Content-Type':'application/json',
    'my-token':'abc123'
});

obs$.subscribe(data=>console.log('data:',data));