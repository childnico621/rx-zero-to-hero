import { fromEvent, interval, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, switchMap, take, tap } from "rxjs/operators";
import { ILogin } from "../interfaces/ILogin";
import { ITokenResponse } from "../interfaces/ITokenResponse";

// Helper

const url = 'https://reqres.in/api/login?delay=1';
const body: ILogin = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
};

const reqHttpLogin$ = (cred: ILogin) => ajax.post(url, cred)
    .pipe(map(resp => <ITokenResponse>resp.response))
    .pipe(catchError(err => of(<ITokenResponse>{ token: 'xxxx' })));

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Config

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Sign In';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);


// Streams

const sumbitForm$ = fromEvent(form, 'submit')
    .pipe(tap(ev => ev.preventDefault()))
    .pipe(map((ev) => (<ILogin>{
        email: ev.target[0].value,
        password: ev.target[1].value
    })))
    .pipe(exhaustMap(reqHttpLogin$));


sumbitForm$
    .subscribe((token) => console.log(token));


