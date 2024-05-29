
# vocales.js

Esta función `vocales` cuenta el número de vocales en un texto dado.

## Descripción

La función `vocales` evalúa un texto y cuenta la cantidad de vocales presentes en él (a, e, i, o, u). Si no encuentra ninguna vocal, informa al usuario que no hay vocales en el texto.

## Uso

```bash
$ node vocales.js
```

## Ejemplos

```js
console.log(`Vocales: ${vocales('Hola Mundo')}`); // Devuelve y muestra 4
console.log(`Vocales: ${vocales('Hl Mnd')}`); // Devuelve y muestra 'No hay vocales' y 0
```

## Notas

• La función utiliza un bucle `for` para recorrer cada carácter del texto y verificar si es una vocal.
• Si encuentra una vocal, incrementa el contador y la muestra en consola.
• Si no se encuentran vocales, la función muestra 'No hay vocales' en la consola y devuelve 0.

## Requisitos

• Node.js

## Autor

[noeosorio.dev](https://www.instagram.com/noeosorio.dev)

## Licencia

Este proyecto está bajo la Licencia MIT.
