# Explicación: Ordenar tres números de menor a mayor

## 1. Entrada de datos

Primero solicitamos tres números al usuario y los guardamos en las variables `a`, `b` y `c`.

```python
a = int(input("Primer número: "))
b = int(input("Segundo número: "))
c = int(input("Tercer número: "))
```

## 2. Comparación de números

El algoritmo utiliza `if` y `else` para comparar los números y determinar cuál es menor.

**Primer caso:**

```python
if a <= b:
```

Comprueba si `a` es menor o igual que `b`.

- Si se cumple, continúa comparando `b` con `c`.
- Si no se cumple, significa que `b` es menor que `a`.

**Segundo caso:**

```python
if b <= c:
    print(a, b, c)
```

Si `b` también es menor o igual que `c`, los números ya están ordenados.

**Tercer caso:**

Si `b` es mayor que `c`, se compara `a` con `c` para determinar cuál debe ir primero.

El algoritmo repite estas comparaciones en diferentes condiciones hasta encontrar el orden correcto.

## 3. Ejemplo de ejecución

Si ingresamos:

```text
a = 15
b = 8
c = 20
```

El algoritmo realiza lo siguiente:

1. Compara 15 con 8: no se cumple que 15 sea menor o igual que 8.
2. Compara 8 con 20: sí se cumple.
3. Muestra los números de menor a mayor.

**Resultado:**

```text
8 15 20
```

**Conclusión:** el algoritmo organiza tres números mediante comparaciones anidadas, sin utilizar listas, ciclos ni funciones de ordenamiento.