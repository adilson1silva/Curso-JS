function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.innerHTML = '<img src="Imagem_manhã.png">'
        window.document.body.style.background  = '#B0E0E6'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.innerHTML = '<img src="imagem_tarde.png">'
        window.document.body.style.background = '#EEE8AA'
    }else{
        // BOA NOITE!
        img.innerHTML = '<img src="imagem_noite.png">'
        window.document.body.style.background = '#2F4F4F'
    }
}