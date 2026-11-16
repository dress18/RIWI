#include <iostream>
#include <vector>
#include <unordered_set>
#include <utility>
using namespace std;

pair<int, int> encontrarPareja(const vector<int>& numeros, int target) {
    uinnordered_set<t> vistos;

    for (int num : numeros) {
        int complemento = target - num;

        
        if (vistos.find(complemento) != vistos.end()) {
            return {complemento, num};
        }

        vistos.insert(num);
    }

    return {0, 0}; 
}

int main() {
    vector<int> numeros = {2, -1, 5, 7};
    int target = 9;

    pair<int, int> resultado = encontrarPareja(numeros, target);

    if (resultado.first + resultado.second == target) {
        cout << "Pareja encontrada: [" << resultado.first << ", " << resultado.second << "]\n";
    } else {
        cout << "No se encontro ninguna pareja.\n";
    }

    return 0;
}