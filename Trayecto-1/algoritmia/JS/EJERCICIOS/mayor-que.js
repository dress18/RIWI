const edades = [20, 22, 18, 26, 19, 25, 25, 18];

function mayor(arreglo){
    let elMayor = arreglo[0];

    for(const num of arreglo){
        if(elMayor > num){
            elMayor = num;
        }
    }

    return num;
}