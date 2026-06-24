function getRank(wins, defeats) {
    return wins - defeats
}

let rankedBalance = getRank(95, 5)
let level = ""

if (rankedBalance <= 10) {
    level = "Ferro"
} else if (rankedBalance <= 20) {
    level = "Bronze"
} else if (rankedBalance <= 50) {
    level = "Prata"
} else if (rankedBalance <= 80) {
    level = "Ouro"
} else if (rankedBalance <= 90) {
    level = "Diamante"
} else if (rankedBalance <= 100) {
    level = "Lendário"
} else {
    level = "Imortal"
}

console.log(`O Herói tem de saldo de ${rankedBalance} vitórias e está no nível de ${level}`)
