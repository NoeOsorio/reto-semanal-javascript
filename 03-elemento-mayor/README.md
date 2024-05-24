# elementoMayor.js

Esta función `elementoMayor` toma un arreglo de números y devuelve el mayor de ellos.

## Descripción

La función `elementoMayor` ordena los elementos de un arreglo en orden descendente y devuelve el primer elemento del arreglo, que es el mayor número.

## Uso

```bash
$ node elementoMayor.js
```

## Ejemplos

```js
console.log(elementoMayor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Devuelve 10
console.log(elementoMayor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // Devuelve 10
console.log(elementoMayor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); // Devuelve 10
console.log(elementoMayor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10])); // Devuelve 10
console.log(elementoMayor([10])); // Devuelve 10
console.log(elementoMayor([15, 42, 37])); // Devuelve 42
```

## Notas

• La función utiliza el método sort para ordenar los elementos del arreglo en orden descendente, lo que garantiza que el primer elemento del arreglo ordenado sea el mayor.

• La comparación (a, b) => b - a en el método sort es clave para ordenar los números de mayor a menor.

## Requisitos

• Node js

## Autor

[noeosorio.dev](https://www.instagram.com/noeosorio.dev)

## Licencia

Este proyecto está bajo la Licencia MIT.
