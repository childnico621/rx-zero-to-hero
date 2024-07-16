import { fromEvent, Observer, range } from "rxjs";
import { map} from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};

range(1, 5).pipe(map<number, number>(val => val * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map(event => event.code));

const keyupPluck$ = keyup$.pipe(map(evt => evt?.target['baseURI']));

const keyupMapTo$ = keyup$.pipe(map(evt => 'key release'));

keyup$.subscribe(val => console.log('map', val.code));

keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));

keyupMapTo$.subscribe(code => console.log('mapTo', code));