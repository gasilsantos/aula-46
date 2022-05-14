let a = 50;
let b = 20
//tenta executar
try {
    let c = a + b;
    console.log("C:" + c )
} catch (error) {
    
    //erro de variável não existente
    if(error instanceof ReferenceError){
        console.log("A variável não existe.")
    }else if(error instanceof  RangeError){
        console.log("A variável não existe neste conjunto.")
    }
}