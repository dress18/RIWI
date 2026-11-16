# Algoritmia S2 – Tablas de verdad y pruebas de escritorio

`V` = Verdadero, `F` = Falso, `—` = no se evalúa.

---

## 1. Bisiesto

Un año es bisiesto si: **(A y B) o C**

- A: divisible entre 4
- B: no divisible entre 100
- C: divisible entre 400

### Tabla de verdad

| A | B | C | Resultado | Nota |
|:-:|:-:|:-:|:-:|---|
| V | V | V | V | No ocurre en años reales |
| V | V | F | V | Ej: 2024 |
| V | F | V | V | Ej: 2000 |
| V | F | F | F | Ej: 1900 |
| F | V | V | V | No ocurre en años reales |
| F | V | F | F | Ej: 2023 |
| F | F | V | V | No ocurre en años reales |
| F | F | F | F | No ocurre en años reales |

### Prueba de escritorio

| Año | A | B | C | Salida |
|---:|:-:|:-:|:-:|---|
| 2024 | V | V | F | Es bisiesto |
| 2000 | V | F | V | Es bisiesto |
| 1900 | V | F | F | No es bisiesto |
| 2023 | F | V | F | No es bisiesto |

---

## 2. ValidarEdad

La edad es válida si: **A y B**

- A: edad >= 0
- B: edad <= 120

### Tabla de verdad

| A | B | A y B | Salida |
|:-:|:-:|:-:|---|
| V | V | V | Verdadero |
| V | F | F | Falso |
| F | V | F | Falso |
| F | F | F | Falso (no ocurre en la realidad) |

### Prueba de escritorio

| Edad | A | B | Salida |
|---:|:-:|:-:|---|
| 25 | V | V | Verdadero |
| 0 | V | V | Verdadero |
| 120 | V | V | Verdadero |
| 121 | V | F | Falso |
| -5 | F | V | Falso |

---

## 3. ValidarRegistro

Puede registrarse si: **A y B**

- A: edad >= 14
- B: respuesta = S (la `s` minúscula también cuenta)

### Tabla de verdad

| A | B | A y B | Salida |
|:-:|:-:|:-:|---|
| V | V | V | Registro exitoso |
| V | F | F | No puedes registrarte |
| F | V | F | No puedes registrarte |
| F | F | F | No puedes registrarte |

### Prueba de escritorio

| Edad | Respuesta | A | B | Salida |
|---:|:-:|:-:|:-:|---|
| 20 | s | V | V | Registro exitoso |
| 14 | S | V | V | Registro exitoso |
| 20 | N | V | F | No puedes registrarte |
| 13 | S | F | V | No puedes registrarte |
| 10 | N | F | F | No puedes registrarte |

---

## 4. Semaforo

Se evalúa en este orden:

- A: inv < 0
- B: inv = 0
- C: inv entre 1 y 9

### Tabla de verdad

| A | B | C | Salida |
|:-:|:-:|:-:|---|
| V | — | — | Error, valor no válido |
| F | V | — | Agotado, pedir urgente |
| F | F | V | Pedir producto para la próxima compra |
| F | F | F | Hay suficiente stock |

### Prueba de escritorio

| Inventario | A | B | C | Salida |
|---:|:-:|:-:|:-:|---|
| -3 | V | — | — | Error, valor no válido |
| 0 | F | V | — | Agotado, pedir urgente |
| 1 | F | F | V | Pedir producto para la próxima compra |
| 9 | F | F | V | Pedir producto para la próxima compra |
| 10 | F | F | F | Hay suficiente stock |
| 25 | F | F | F | Hay suficiente stock |

---

## 5. Parqueadero

Reglas:

- Carro (1): $4.000 por hora. Moto (2): $2.000 por hora.
- Menos de 15 minutos: no se cobra.
- Las horas se redondean hacia arriba: `h = trunc((min + 59) / 60)`.
- Tope máximo: $30.000.
- Con factura (S): se paga la mitad.

Condiciones:

- A: minutos < 0
- B: tipo de vehículo no válido
- C: minutos < 15
- D: el total supera $30.000
- E: tiene factura

### Tabla de verdad

| A | B | C | D | E | Resultado |
|:-:|:-:|:-:|:-:|:-:|---|
| V | — | — | — | — | Error de tiempo negativo |
| F | V | — | — | — | Tipo de vehículo no válido |
| F | F | V | — | — | Pagar $0 |
| F | F | F | F | F | Pagar h × tarifa |
| F | F | F | F | V | Pagar (h × tarifa) / 2 |
| F | F | F | V | F | Pagar $30.000 |
| F | F | F | V | V | Pagar $15.000 |

### Prueba de escritorio

| # | Tipo | Minutos | Factura | Horas (h) | Total sin tope | Total final | Salida |
|:-:|:-:|---:|:-:|:-:|---:|---:|---|
| 1 | Carro | 90 | N | 2 | 8.000 | 8.000 | Pagar $8.000 |
| 2 | Moto | 10 | S | — | — | 0 | Pagar $0 |
| 3 | Carro | 600 | S | 10 | 40.000 | 15.000 | Pagar $15.000 (tope y mitad) |
| 4 | Tipo 3 | 30 | S | — | — | — | Tipo de vehículo no válido |
| 5 | Moto | 125 | S | 3 | 6.000 | 3.000 | Pagar $3.000 (mitad) |
| 6 | Carro | 15 | N | 1 | 4.000 | 4.000 | Pagar $4.000 |
| 7 | Carro | 14 | N | — | — | 0 | Pagar $0 |
| 8 | Carro | 61 | N | 2 | 8.000 | 8.000 | Pagar $8.000 |
| 9 | Moto | 960 | N | 16 | 32.000 | 30.000 | Pagar $30.000 (tope) |
| 10 | Moto | -5 | S | — | — | — | Error de tiempo negativo |

Ejemplo de cálculo de horas (caso 1): `(90 + 59) / 60 = 2,48` → se corta a **2 horas**.