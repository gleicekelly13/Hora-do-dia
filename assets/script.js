function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 &&  hora < 12) {
        // Bom dia!
        img.src = 'assets/images/fotodia.png'
        document.body.style.background = '#82d5cb'
    } else if(hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'assets/images/fototarde.png'
        document.body.style.background = '#bf9978'
    } else {
        // Boa noite!
        img.src = 'assets/images/fotonoite.png'
        document.body.style.background = '#3a4a6b'
    }
}
