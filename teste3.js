let x = 31
//tenta executar uma função 
try {
    
    //se a condição é válida, então executa
    if( x < 30){
        console.log("O número é valido.")

        //se a condição é inválida, lança um erro com mensagem personalizada
    }else{
        throw "Erro! número não aceito"
    }

   //captura o erro e trata
} catch (error) {
    console.log(error)
}