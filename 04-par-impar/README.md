# parImpar.js

Esta función `parImpar` toma un número y devuelve si es “par” o “impar”.

## Descripción

La función `parImpar` evalúa si un número es par o impar utilizando el operador de módulo (%). Si el número es divisible por 2, retorna “par”; de lo contrario, retorna “impar”.

## Uso

```bash
$ node parImpar.js
```

## Ejemplos

```js
console.log(parImpar(2)); // Devuelve 'par'
console.log(parImpar(3)); // Devuelve 'impar'
console.log(parImpar(0)); // Devuelve 'par'
console.log(parImpar(7)); // Devuelve 'impar'
console.log(parImpar(8)); // Devuelve 'par'
console.log(parImpar(15)); // Devuelve 'impar'
```

## Notas

• La función utiliza el operador de módulo (%) para determinar la paridad de un número. Si el número mod 2 es igual a 0, el número es par; de lo contrario, es impar.

• La estructura ternaria (? :) se utiliza para simplificar la decisión de retorno en una sola línea de código.

## Requisitos

• Node js

## Autor

[noeosorio.dev](https://www.instagram.com/noeosorio.dev)

## Licencia

Este proyecto está bajo la Licencia MIT.
