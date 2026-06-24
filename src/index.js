console.log(`O Herói tem de saldo de ${rankResult} vitórias e está no nível de ${showRank}`)


function getRank(wins, defeat){
let rankResult = wins - defeat
return rankResult

}

let showRank = getRank(10, 5)

if(showRank <= 10){
    showRank = "Ferro"
} 
else if(showRank <= 20 ){
    showRank = "Bronze"
}
else if(showRank <= 50){
showRank = "Prata"
}
else if(showRank <= 80){
showRank = "Ouro"
}
else if(showRank <= 90){
    showRank = "Diamante"
}
else if(showRank <= 100){
    showRank = "Lendário"
}
else{
    showRank = Imortal
}

