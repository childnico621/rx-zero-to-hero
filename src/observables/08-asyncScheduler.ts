import { asyncScheduler, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

setTimeout(() => { }, 3000);

setInterval(() => { }, 3000);

const greetings = () => console.log('Hola Mundo');
const greetingsName = name => console.log('hola', name);

asyncScheduler.schedule(greetings, 3000);
asyncScheduler.schedule(greetingsName, 2000, 'Nicolás');

const subs = asyncScheduler.schedule(function name(state: any) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 9000);


asyncScheduler.schedule(() => subs.unsubscribe(), 9000);