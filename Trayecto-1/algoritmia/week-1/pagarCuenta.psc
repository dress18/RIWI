Algoritmo Pagarcuenta
	Definir pagar, Cuenta, pProp, prop, total Como Real
	Definir Pers Como Entero
	Escribir '¿Cuanto fue la cuenta?'
	Leer Cuenta
	Escribir '¿Cuanto es el porcentaje de la propina?'
	Leer pProp
	Escribir '¿Cuantas Personas fueron a Comer?'
	Leer Pers
	prop <- Cuenta*pProp/100
	total <- prop+Cuenta
	pagar <- total/Pers
	Escribir 'La propina de la cuenta fue: ', prop, ', el valor total de la cuenta fue: ', total, ', Cada uno paga: ', pagar
FinAlgoritmo