function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var mas = document.getElementById('mas')
    var fem = document.getElementById('fem')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] verefique os teus dados!")
    }else{
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex') 
        var genero = ''
        //------------------------------------------------
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //------------------------------------------------
        if (fsex[0].checked){
            genero = 'homen'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src','baby_boy.png')
                document.body.style.background = '#40E0D0'
            } else if (idade < 21){
                //joven
                img.setAttribute('src', 'boy.png')
                document.body.style.background = '#FFDEAD'
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'man.png')
                document.body.style.background = '#F5F5F5' 
            }else{
                //idoso
                img.setAttribute('src', 'old_man.png')
                document.body.style.background = '#808080'
            }
        }else{
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'baby_girl.png')
                document.body.style.background = '#F4A460'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'girl.png')
                document.body.style.background = '#808080'
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'woman.png')
                document.body.style.background = '#F5F5F5'
            }else{
                //idoso
                img.setAttribute('src', 'old_woman.png')
                document.body.style.background = '#556B2F'
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Identificamos ${genero} com ${idade} anos`
    res.appendChild(img)
}