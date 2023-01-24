function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'assets/menino.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'assets/rapazJovem.jpg')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'assets/homemAdulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'assets/idoso.jpg')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'assets/menina.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'assets/moçaJovem.jpg')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'assets/mulherAdulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'assets/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}