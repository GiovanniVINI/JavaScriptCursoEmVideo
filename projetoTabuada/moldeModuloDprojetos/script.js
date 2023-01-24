function gerarTabuada() {
    var num = document.querySelector('#numero')
    var tab = document.querySelector('#seltab')

    if (num.value.length == 0 ) {
        window.alert('[ERRO] Por favor, digite um número')
    } else {
        var n = Number(num.value) 
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}