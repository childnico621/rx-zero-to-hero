import { from, Observer, range } from "rxjs";
import { map, scan } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('acum: ', value),
    error: null,
    complete: () => console.info('Sequence ended!')
};
