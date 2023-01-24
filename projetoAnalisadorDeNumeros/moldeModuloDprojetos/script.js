let num = document.querySelector('#textnum')
let sel = document.querySelector('#sel')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false        
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p><b>Ao todo</b>, temos <strong>${tot}</strong> números cadastrados</p>`
        res.innerHTML += `<p>O <b>maior</b> valor informado foi <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O <b>menor</b> valor informado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A <b>soma</b> de todos os valores, é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A <b>média</b> dos valores digitados é <strong>${media}</strong></p>`
    }
}