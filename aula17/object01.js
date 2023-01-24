let amigo3 = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
    amigo3.engordar(2)
    console.log(`${amigo3.nome} pesa ${amigo3.peso} Kg`)


let amigo2 = {} // object = object
console.log(typeof amigo2)

let amigo = [] // array = object
console.log(typeof amigo)