class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""
        if (this.tipo === "mago"){
            ataque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }
        else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new heroi("Harry", 1, "mago")
heroi1.atacar()
console.log("-----------")
let heroi2 = new heroi("Arthur", 1, "guerreiro")
heroi2.atacar()
console.log("-----------")
let heroi3 = new heroi("Cleiton", 1, "monge")
heroi3.atacar()
console.log("-----------")
let heroi4 = new heroi("Naruto", 1, "ninja")
heroi4.atacar()
