/*const {soma, subtracao} = require("./index");

test("Deveria retornar a soma entre dois números", () => {
    expect(soma(2,2)).toBe(4)
})

test("Deveria retonar a subtração entre dois números", () => {
    expect(subtracao(10,5)).toBe(5)
})



//toBe(), toEqual()

test("Teste de igualdade com o toBe()", () => {
    const a = {
        one: 1,
        two: 2
    }
    expect(a).toBe({one:1, two:2})
})

test("Teste de igualdade com o toEqual()", () => {
    const a = {
        one: 1,
        two: 2
    }
    expect(a).toEqual({one:1, two:2})
})*/

//Outra função de Match, muito comum, é a .not. 
//Ela permite que se teste um resultado específico que é indesejado. Vamos ao exemplo.

/*function totalDeParcelas(p){
    return p
}

test("Verifica se o total de parcelas é diferente de 0", () => {
    expect(totalDeParcelas(1)).not.toBe(0)
    expect(totalDeParcelas(0)).not.toBe(0)
})*/

//A função toMatch(). Essa função avalia uma string a partir de uma expressão regular

/*function getEmail(email){
    return email
}

test("Verifica se o formato do e-mail retornado é válido", () => {
    expect(getEmail("aluno@unifael.com.br")).toMatch(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)
})*/

//Testando valores booleanos, nulos e indefinidos

function getNome(nome){
    return nome
}

test("Verifica se o objeto é nulo ou indefinido", () =>{
    const nome = getNome("Aluno x")

    expect(nome).not.toBeNull()
    expect(nome).not.toBeDefined()
    expect(nome).not.toBeUndefined()

})
