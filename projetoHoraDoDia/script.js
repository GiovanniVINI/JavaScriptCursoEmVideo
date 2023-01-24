function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        // Bom dia
        img.src = 'assets/manha.jpg'
        document.body.style.background = 'rgb(117, 232, 101)'
        msg2.innerHTML = '<p>Bom dia!</p>'
    } else if (hora > 12 && hora < 18) {
        // Boa tarde
        img.src = 'assets/tarde.jpg'
        document.body.style.background = 'rgb(243, 227, 78)'
        msg2.innerHTML = '<p>Boa tarde!</p>'
    } else {
        // Boa noite
        img.src = 'assets/noite.jpg'
        document.body.style.background = 'rgb(21, 31, 43)'
        msg2.innerHTML = '<p>Boa noite!</p>'
    }
}