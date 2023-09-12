let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        //--------------------------------------------------------------
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        //--------------------------------------------------------------

    }else{
        window.alert('[ERRO] Valor já encontrado na lista! ')
    }
    
    num.value = ''
    num.focus()
    
}

function finalizar(){
    if(valores.length != 0){
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = (soma)/valores.length
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            if(valores[pos] > maior){
                maior = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos temos ${total} números dacastrados.</p>`
        res.innerHTML += `<p>O maior número digitado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor número digitado foi o ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores digitados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media}</p>`
    }else{
        window.alert('[ERRO] insira dados na tua lista')
    }
}