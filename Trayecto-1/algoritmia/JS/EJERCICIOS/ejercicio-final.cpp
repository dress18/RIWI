// Una función que va a recibir un arreglo de números y un target y van a retornar una pareja de números tal que sumados sean igual al target
#include <iostream>
using namespace std;

void parejaNumeros(int numeros[], int target, int tam){
    for(int i = 0; i < tam; i++){
        for(int j = i + 1 ; j < tam; j++){
            if(numeros[i] + numeros[j] == target){
                cout << "Pareja de números encontrados" << endl;
                cout << "Los números son: " << numeros[i] << ", " << numeros[j];

                return;
            }
        }
    }

    cout << "Los números no fueron enccontrados. \n";
}

int main(){
    int tam = 4;
    int numeros[] = {2, -1, 5, 7};
    int target = 9;

    parejaNumeros(numeros, target, tam);
}