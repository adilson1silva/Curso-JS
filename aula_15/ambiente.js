
let num = [4,5,2,8,7,9,7]
num.push(10) //acrescentar valor 10 no array
num.indexOf(7) // procurar 
console.log(`Os meus valores são ${num}`)
console.log(`O numero que está na 1º posição é ${num[0]}`)
console.log(`Os Meus valores ordenados por ordem crescente são: ${num.sort()}`)
console.log(`O tamanho do meu erray é ${num.length}`)


c = 0
let num_1 = [4,5,2,8,7,9,7]
for(c; c < num_1.length; c++){
    console.log(`A posição ${c} têm o valor ${num_1[c]}`)
}

let num_2 = [4,5,2,8,7,9,7]
var pos

for(pos in num_1){
    console.log(`A posição ${pos} têm o valor ${num_1[pos]}`)
}

