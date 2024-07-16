import { from, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};


const source$ = from(fetch('https://api.github.com/users/klerith'));

const myGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterator = myGenerator();

from(myIterator).subscribe(observer);
// for (let id of myIterator) {
//     console.log(id);
// }

// source$.subscribe(observer);

// source$.subscribe(async (resp: any) => {
//     console.log(resp.ok);
//     const dataRespon = await resp.json();
//     console.log(dataRespon);
    
// });

