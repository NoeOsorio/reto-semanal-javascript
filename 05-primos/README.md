# primo.js

Esta función `primo` determina si un número es primo o no.

## Descripción

La función `primo` evalúa si un número dado es primo. Un número primo es un número natural mayor que 1 que solo tiene dos divisores: 1 y él mismo.

## Uso

```bash
$ node primo.js
```

## Ejemplos

```js
console.log(esPrimo(1) === false); // Devuelve false, 1 no es primo
console.log(esPrimo(2) === true); // Devuelve true, 2 es primo
console.log(esPrimo(3) === true); // Devuelve true, 3 es primo
console.log(esPrimo(4) === false); // Devuelve false, 4 no es primo
console.log(esPrimo(5) === true); // Devuelve true, 5 es primo
console.log(esPrimo(9) === false); // Devuelve false, 9 no es primo
console.log(esPrimo(11) === true); // Devuelve true, 11 es primo
```

## Notas

•	La función utiliza un bucle for para comprobar si el número dado tiene divisores distintos de 1 y de sí mismo.
•	Si se encuentra un divisor, la función devuelve false, indicando que el número no es primo.
•	Si no se encuentran divisores, la función devuelve true, indicando que el número es primo.

## Requisitos

• Node js

## Autor

[noeosorio.dev](https://www.instagram.com/noeosorio.dev)

## Licencia

Este proyecto está bajo la Licencia MIT.
