

function getRank(wins, defeat){
let rankResult = wins - defeat
return rankResult
}

let showRank = getRank(10, 5)
let nivel = ""

if(showRank <= 10){
    level = "Ferro"
} 
else if(showRank <= 20 ){
    level = "Bronze"
}
else if(showRank <= 50){
level = "Prata"
}
else if(showRank <= 80){
level = "Ouro"
}
else if(showRank <= 90){
    level = "Diamante"
}
else if(showRank <= 100){
    level = "Lendário"
}
else{
    level = "Imortal"
}



console.log(`O Herói tem de saldo de ${showRank} vitórias e está no nível de ${level}`)
