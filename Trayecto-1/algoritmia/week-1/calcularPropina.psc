Algoritmo CalcularPropina
    Definir cuenta, porcentaje, propina, total, cadaUno Como Real
    Definir personas Como Entero
	
    Escribir "Ingrese el valor de la cuenta:"
    Leer cuenta
    Escribir "Ingrese el porcentaje de propina:"
    Leer porcentaje
    Escribir "Ingrese el número de personas:"
    Leer personas
	
    propina <- cuenta * porcentaje / 100
    total <- cuenta + propina
    cadaUno <- total / personas
	
    Escribir "Propina: $", propina
    Escribir "Total: $", total
    Escribir "Cada uno paga: $", cadaUno
FinAlgoritmo