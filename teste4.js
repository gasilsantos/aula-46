let x = 31
//tenta executar uma função 
try {
    
    //se a condição é válida, então executa
    if( x < 30){
        console.log("O número é valido.")

        //se a condição é inválida, lança um erro com mensagem personalizada
    }else{
        throw{
            "name":"ErroNumeroInvalido",
            "Message":"O número é inválido"

        } 
    }

   //captura o erro e trata
} catch (error) {
    console.log(error.name)
    console.log(error.Message)
}