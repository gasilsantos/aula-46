var a = 10
var b = 20


//tenta executar um bloco de código
try {
    
    let soma = a + b

    //em caso de sucesso
    console.log("soma:" , soma)

    //em caso de erro
} catch (error) {
    
    console.log("Erro na soma:" , error)
//executa de qualquer forma
}finally{
    console.log("Fim da execução")

}