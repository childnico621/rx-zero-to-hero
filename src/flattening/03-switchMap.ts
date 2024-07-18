import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeMap, switchMap } from "rxjs/operators";
import { IGitHubResult } from "../interfaces/IGhUserResult";
import { IGitHubUser } from "../interfaces/IGitHubUser";

// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: IGitHubUser[]) => {
    orderList.innerHTML = '';
    console.log(users);

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'see page';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);

    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$
    .pipe(debounceTime(500))
    .pipe(map(evt => (<HTMLInputElement>evt.target).value))
    .pipe(mergeMap<string, Observable<any>>(val => ajax.getJSON(`https://api.github.com/search/users?q=${val}`)))
    // .pipe(mergeAll())
    .pipe(map((res: IGitHubResult<IGitHubUser>) => res.items))
//.subscribe(showUsers);


const url = 'https://httpbin.org/delay/1?arg=';

input$
    .pipe(map(evt => (<HTMLInputElement>evt.target).value))
    .pipe(switchMap<string, Observable<any>>(val => ajax.getJSON(url + val)))
    .subscribe(console.log);