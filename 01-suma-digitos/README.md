# sumaDigitos.js

Esta función `sumaDigitos` toma un número y devuelve la suma de sus dígitos.

## Descripción

La función `sumaDigitos` convierte un número dado a una cadena, divide esa cadena en sus caracteres individuales (dígitos), y luego suma estos dígitos para devolver el resultado total.

## Uso

```bash
$ node sumaDigitos.js
```

## Ejemplos

```js
console.log(sumaDigitos(11134)); // Devuelve 10 porque 1 + 1 + 1 + 3 + 4 = 10
console.log(sumaDigitos(123456789)); // Devuelve 45 porque 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
console.log(sumaDigitos(0)); // Devuelve 0 porque el único dígito es 0
```

## Notas

• La función utiliza el operador opcional de encadenamiento ?. para manejar el caso en que num sea null o undefined. Sin embargo, esto no se suele esperar en un uso normal ya que se asume que num será un número válido.

• La conversión a cadena y el método split permite descomponer el número en sus componentes individuales.

• forEach se utiliza para iterar sobre cada dígito y sumarlo al resultado.

## Requisitos

• Node js

## Autor

[noeosorio.dev](https://www.instagram.com/noeosorio.dev)

## Licencia

Este proyecto está bajo la Licencia MIT.
