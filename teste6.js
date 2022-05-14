//declarando uma classe ErroFormulário que recebe (herda) atributos e metodos da classe error(classe pai)
class ErroFormulário extends Error{
    //método para construir um objeto  da classe ErroFformulário
    constructor(message){
        //sobrescrevendo o valor da propriedade (atributo) message com o valor que vem do erro da função
        super(message) 
        
        //atribuindo um valor para a propriedade(atributo) name com o nome personalizado do erro
        this.name = "ErroFormulário"
    }
}

try {
    

    let nome = "cassiano"
    let idade = 32
    //forçando erro de variável sem valor
    let profissao

    if(!nome || !idade || !profissao){

        let erroFormulário = new ErroFormulário("Campos em branco não são permitidos")

        throw ErroFormulário
    }else{
        console.log("Usuario cadastrado!")
    }

} catch (erro) {
    console.log(erro)
}