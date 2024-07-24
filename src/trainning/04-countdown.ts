import { endWith, interval, map, reduce, take, takeUntil, takeWhile } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 * 04-cuenta-regresiva.ts
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 7;
    const countdown$ = interval(700)
        .pipe(
            map(val => inicio - val),
            takeWhile((y: number) => y > 0, true)
            //reduce((acc, curr) => acc +curr, inicio)
            // Usar los operadores necesarios
            // para realizar la cuenta regresiva
        );


    // No tocar esta línea ==================
    countdown$.subscribe(console.log); // =
    // ======================================


})();