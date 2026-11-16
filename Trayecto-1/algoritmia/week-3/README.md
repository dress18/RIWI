# Algoritmo Factura – Descomposición en Subprocesos

## 1. Propósito del algoritmo

El algoritmo Factura tiene como propósito calcular el valor total de una cuenta de restaurante, teniendo en cuenta si el cliente desea incluir una propina y cuánto debe pagar cada comensal.

Para desarrollar el algoritmo se utiliza la descomposición en subprocesos, separando cada operación en una función independiente.

## 2. Árbol de componentes

```text
calcularFactura (Algoritmo principal)
│
├── 1. Entrada de datos
│   ├── Leer cuenta ........ Valor de la cuenta (Real)
│   └── Leer pers ......... Cantidad de comensales (Entero)
│
├── 2. Cálculo de propina
│   └── propinas(cuenta)
│       │
│       ├── 2.1 Validación de respuesta
│       │   ├── Preguntar si desea incluir propina
│       │   ├── Convertir respuesta a mayúsculas
│       │   └── Repetir hasta recibir S o N
│       │
│       └── 2.2 Decisión
│           ├── Si responde S
│           │   ├── Leer porcentaje
│           │   └── Calcular propina
│           │
│           └── Si responde N
│               └── Propina = 0
│
├── 3. Cálculo del total
│   └── total = cuenta + propina
│
├── 4. Cálculo por persona
│   └── valores(total, pers)
│       └── ValorPorPer = total / pers
│
└── 5. Salida de resultados
    ├── Mostrar total de la cuenta
    ├── Mostrar valor de la propina
    └── Mostrar valor a pagar por persona
```

## 3. Descomposición en subprocesos

### 3.1. Entrada de datos

**Objetivo:** solicitar el valor de la cuenta y la cantidad de personas que van a pagar.

- Entrada:
  - `cuenta`: valor total de la cuenta.
  - `pers`: cantidad de comensales.

```javascript
let cuenta = parseFloat(prompt("Ingresa el valor de la cuenta:"));
let pers = parseInt(prompt("Ingresa la cantidad de comensales en la mesa:"));
```

### 3.2. Cálculo de propina: `propinas(cuenta)`

**Objetivo:** determinar si el cliente desea incluir propina y calcular su valor.

- Entrada: `cuenta`.
- Salida: valor de la propina.

**Proceso:**

1. Preguntar si desea incluir propina.
2. Convertir la respuesta a mayúsculas.
3. Validar que la respuesta sea S o N.
4. Si responde S, solicitar el porcentaje.
5. Calcular la propina.
6. Si responde N, asignar 0.

```javascript
function propinas(cuenta) {
    let porc;
    let Deseo;
    let propina = 0;

    do {
        Deseo = prompt("¿Desea incluir la propina? (S/N)").toUpperCase();

        if (Deseo !== "S" && Deseo !== "N") {
            console.log("Valor inválido, solo se acepta S o N");
        }

    } while (Deseo !== "S" && Deseo !== "N");

    if (Deseo === "S") {
        porc = parseFloat(prompt("Ingrese el valor del % de la propina:"));
        propina = cuenta * (porc / 100);
    } else {
        propina = 0;
    }

    return propina;
}
```

### 3.3. Cálculo del total

**Objetivo:** sumar el valor de la cuenta y la propina.

- Entrada: cuenta y propina.
- Salida: total de la cuenta.

**Fórmula:**

```text
total = cuenta + propina
```

### 3.4. Cálculo por persona: `valores(cuenta, pers)`

**Objetivo:** dividir el valor total de la cuenta entre la cantidad de comensales.

- Entrada:
  - `cuenta`: valor total de la cuenta.
  - `pers`: cantidad de comensales.
- Salida: valor que debe pagar cada persona.

**Fórmula:**

```text
ValorPorPer = cuenta / pers
```

```javascript
function valores(cuenta, pers) {
    let ValorPorPer;

    ValorPorPer = cuenta / pers;

    return ValorPorPer;
}
```

### 3.5. Salida de resultados

**Objetivo:** mostrar los resultados obtenidos durante la ejecución del algoritmo.

Se muestran los siguientes datos:

- Total de la cuenta.
- Valor de la propina.
- Cantidad que debe pagar cada persona.

## 4. Código completo en JavaScript

```javascript
function propinas(cuenta) {
    let porc;
    let Deseo;
    let propina = 0;

    do {
        Deseo = prompt("¿Desea incluir la propina? (S/N)").toUpperCase();

        if (Deseo !== "S" && Deseo !== "N") {
            console.log("Valor inválido, solo se acepta S o N");
        }

    } while (Deseo !== "S" && Deseo !== "N");

    if (Deseo === "S") {
        porc = parseFloat(prompt("Ingrese el valor del % de la propina:"));
        propina = cuenta * (porc / 100);
    } else {
        propina = 0;
    }

    return propina;
}

function valores(cuenta, pers) {
    let ValorPorPer;

    ValorPorPer = cuenta / pers;

    return ValorPorPer;
}

function calcularFactura() {
    let cuenta = parseFloat(prompt("Ingresa el valor de la cuenta:"));
    let pers = parseInt(prompt("Ingresa la cantidad de comensales en la mesa:"));

    let prop = propinas(cuenta);
    let tot = cuenta + prop;
    let totcom = valores(tot, pers);

    console.log("El total de la cuenta es: " + tot);
    console.log("Tiene una propina de: " + prop);
    console.log("La cantidad a pagar por persona: " + totcom);
}

calcularFactura();
```

## 5. Ejemplo de ejecución

**Datos ingresados:**

| Dato | Valor |
|---|---:|
| Valor de la cuenta | $100.000 |
| Cantidad de comensales | 4 |
| ¿Desea incluir propina? | S |
| Porcentaje de propina | 10 % |

**Operaciones:**

1. Cálculo de propina:

   `100000 * (10 / 100) = 10000`

2. Cálculo del total:

   `100000 + 10000 = 110000`

3. Cálculo por persona:

   `110000 / 4 = 27500`

**Resultado:**

```text
El total de la cuenta es: 110000
Tiene una propina de: 10000
La cantidad a pagar por persona: 27500
```

## 6. Conclusión

El algoritmo Factura aplica la descomposición de problemas mediante funciones independientes. Cada subproceso tiene una responsabilidad específica: calcular la propina, determinar el total y dividir el valor entre los comensales.

La función principal `calcularFactura()` organiza los procesos y permite ejecutar el algoritmo de manera ordenada, facilitando su comprensión, mantenimiento y reutilización.