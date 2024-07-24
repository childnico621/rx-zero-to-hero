import { fromEvent, interval, of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";


const numb$ = of(1,2,3);
numb$
.pipe(startWith('a','b','c'))
.pipe(endWith('x','y','z'))
.subscribe(console.log);