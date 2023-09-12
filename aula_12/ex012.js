var idade = 21
if (idade < 16){
    console.log(`A pessoa não pode votar.`)
}else{
    if (idade < 18){
        console.log(`Voto opcional`)
    }if (idade >18 && idade < 25){
        console.log(`Voto obrigatorio`)
    }else{
        console.log('Vai votar homen')
    }
}