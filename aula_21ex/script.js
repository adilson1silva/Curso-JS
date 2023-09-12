function verificar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pa  = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pa.value.length == 0){
        window.alert('[ERRO] Verifique os teus dados!')
    }else{
       res.innerHTML = 'Contando: '
       var i  = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(pa.value)

       if (i < f){
           for (var count = i; count <= f; count += p){
               res.innerHTML += `${count} \u{1f449}`
           }
       }else{
           for(var count = f; count <= i; count += p)
           res.innerHTML += `${count} \u{1F449}`
       }
    }res.innerHTML += `\u{1F3C1}`

    //----------------Converter para número---------------------
    
}
