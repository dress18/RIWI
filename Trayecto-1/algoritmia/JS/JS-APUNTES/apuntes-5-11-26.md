Hay tres tipos de `for` que se usan en JavaScript: el `for` normal, el `for...of` y el `for...in`.

El `for` normal es el más clásico y se usa principalmente con arreglos cuando necesitamos controlar el índice. Se escribe así:

```js
const numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Indice ${i}: ${numeros[i]}`);
}
```

En este ejemplo, `i` empieza en 0 y va aumentando hasta llegar al final del arreglo. Esto permite acceder tanto a la posición como al valor del elemento.

El `for...of` sirve para recorrer directamente los valores de un arreglo, sin necesidad de usar un índice. Es más simple y limpio cuando solo quieres leer cada elemento:

```js
const frutas = ["manzana", "pera", "uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

Aquí, la variable `fruta` toma cada elemento del arreglo uno por uno: "manzana", "pera", "uva".

El `for...in` se usa principalmente para recorrer las propiedades de un objeto. Aunque también puede recorrer índices de un arreglo, no es lo recomendado para arreglos porque no trabaja con los valores directamente:

```js
const persona = {
  nombre: "Ana",
  edad: 20,
  ciudad: "Bogotá"
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```

En este caso, `clave` recibe cada propiedad del objeto: "nombre", "edad" y "ciudad".

En resumen:

- `for` normal: sirve para recorrer arreglos usando índices.
- `for...of`: sirve para recorrer valores de un arreglo.
- `for...in`: sirve para recorrer propiedades de un objeto.

Por eso, cuando trabajamos con arreglos, normalmente usamos `for` o `for...of`, y cuando trabajamos con objetos usamos `for...in`.