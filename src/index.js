
function getRank(wins, defeat){
let rankResult = wins - defeat
return rankResult

}

let showRank = getRank(10, 5)

if(showRank >= 5){
    console.log(`Voce esta no ferro com um saldo de ${showRank} vitórias`)
}