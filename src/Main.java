public class Main {

    public static int getRank(int wins, int defeats) {
        return wins - defeats;
    }

    public static void main(String[] args) {

        int wins = 95;
        int defeats = 5;

        int rankedBalance = getRank(wins, defeats);
        String level;

        if (rankedBalance <= 10) {
            level = "Ferro";
        } else if (rankedBalance <= 20) {
            level = "Bronze";
        } else if (rankedBalance <= 50) {
            level = "Prata";
        } else if (rankedBalance <= 80) {
            level = "Ouro";
        } else if (rankedBalance <= 90) {
            level = "Diamante";
        } else if (rankedBalance <= 100) {
            level = "Lendário";
        } else {
            level = "Imortal";
        }

        System.out.println(
                "O Herói tem saldo de " + rankedBalance +
                        " vitórias e está no nível de " + level
        );
    }
}