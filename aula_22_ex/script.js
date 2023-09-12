function tabuada(){
    var num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') //criar um option que vai inserir valores da tabuada
            item.text = `${n} * ${c} = ${n*c}` // que é a parte de dentro do option
            tab.appendChild(item)
            c++
        }
    }
    
}