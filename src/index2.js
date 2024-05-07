let player1, player2; // Definindo as variáveis player1 e player2 no escopo global

// Definição dos personagens
const characters = [
    {
        NOME: "Mario",
        VELOCIDADE: 4,
        MANOBRABILIDADE: 3,
        PODER: 3,
        PONTOS: 0,
    },
    {
        NOME: "PEACH",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 2,
        PONTOS: 0,
    },
    {
        NOME: "Yoshi",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 2,
        PONTOS: 0,
    },
    {
        NOME: "Bowser",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 2,
        PONTOS: 0,
    },
    
    {
        NOME: "Luigi",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 4,
        PONTOS: 0,
    },
    {
        NOME: "Donkey Kong",
        VELOCIDADE: 2,
        MANOBRABILIDADE: 2,
        PODER: 5,
        PONTOS: 0,
    }
];

// Seleção dos personagens pelos jogadores
const selectCharacters = () => {
    console.log("Selecione os personagens dos jogadores:");
    console.log("Personagens disponíveis:");
    characters.forEach((character, index) => {
        console.log(`${index + 1}. ${character.NOME}`);
    });

    const player1Index = parseInt(prompt("Jogador 1, selecione o número do seu personagem:")) - 1;
    const player2Index = parseInt(prompt("Jogador 2, selecione o número do seu personagem:")) - 1;

    const player1 = characters[player1Index];
    const player2 = characters[player2Index];

    console.log(`Jogador 1 selecionou: ${player1.NOME}`);
    console.log(`Jogador 2 selecionou: ${player2.NOME}`);

    return [player1, player2];
};

// Função principal do jogo
const playGame = async () => {
    const [player1, player2] = selectCharacters();

    // Lógica do jogo continua aqui...
};
async function rollDice(){
    return Math.floor( Math.random() * 6) +1;

};
/*
async function --> função de entrada, irá chamar as outras funções
 envolvemos a função em parênteses acompanhada de um parênteses no fim para torná-la auto invocada. (function)();
Para inserir um emoji: tecla windows + .
*/

async function getRandomBlock(){
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default: 
        result ="CONFRONTO"
            break;
    }
    return result;
}
async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}


async function playeRaceEngine(character1, character2){
    for (let round=1; round<=5; round++){
        console.log(`🏁 Rodada ${round}`)

        //Sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);
    
        // rolar OS dados
let diceResult1 = await rollDice();
let diceResult2 = await rollDice();

// teste de habilidade
let TotalTestSkill1 = 0;
let TotalTestSkill2 = 0;

if(block ==="RETA"){
    TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
    TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;
    await logRollResult(
        character1.NOME, 
        "velocidade", 
        diceResult1, 
        character1.VELOCIDADE)
        ;    
    await logRollResult(
        character2.NOME, 
        "velocidade", 
        diceResult2, 
        character2.VELOCIDADE)
        ;    
            
}
if(block ==="CURVA"){
    TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
    TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
    await logRollResult(
        character1.NOME, 
        "manobrabilidade", 
        diceResult1, 
        character1.MANOBRABILIDADE)
        ;    
    await logRollResult(
        character2.NOME, 
        "manobrabilidade", 
        diceResult2, 
        character2.MANOBRABILIDADE)
        ;    
}
if(block ==="CONFRONTO"){
    (function rollDiceTypePowerCharacter1(){
        let resultConfrontationPlayer1 = Math.floor( Math.random() * 2) +1;
        if (resultConfrontationPlayer1 ===1 && character2.PODER >1) {
            console.log(`O jogador ${character1.NOME} rolou os dados de confronto e tirou uma bomba!💣 O jogador ${character2.NOME} perdeu 2 pontos de poder!`)
            return character2.PODER-= 2;
        
        }else if(resultConfrontationPlayer1 ===1 && character2.PODER === 1) {
            console.log(`O jogador ${character1.NOME} rolou os dados de confronto e tirou uma bomba!💣 O jogador ${character2.NOME} perdeu 2 pontos de poder!`)
            return character2.PODER-= 1;

        }else if(resultConfrontationPlayer1 ===2 && character2.PODER > 0) {
            console.log(`O jogador ${character1.NOME} rolou os dados de confronto e tirou um casco!🐢 O jogador ${character2.NOME} perdeu 1 ponto de poder!`)
            return character2.PODER-= 1;
        }
    })();    
    (function rollDiceTypePowerCharacter2(){
        let resultConfrontationPlayer2 = Math.floor( Math.random() * 2) +1;
        if (resultConfrontationPlayer2 ===1 && character1.PODER >1) {
            console.log(`O jogador ${character2.NOME} rolou os dados de confronto e tirou uma bomba!💣 O jogador ${character1.NOME} perdeu 2 pontos de poder!`)
            return character1.PODER-= 2;
        
            
        }else if(resultConfrontationPlayer2 ===1 && character1.PODER === 1) {
            console.log(`O jogador ${character2.NOME} rolou os dados de confronto e tirou uma bomba!💣 O jogador ${character1.NOME} perdeu 2 pontos de poder!`)
            return character1.PODER-= 1;

        }else if(resultConfrontationPlayer2 ===2 && character1.PODER > 0) {
            console.log(`O jogador ${character2.NOME} rolou os dados de confronto e tirou um casco!🐢 O jogador ${character1.NOME} perdeu 1 ponto de poder!`)
            return character1.PODER-= 1;
        }
    })();
    
    
    let powerResult1 = diceResult1 + character1.PODER;
    let powerResult2 = diceResult2 + character2.PODER;
    if (powerResult1 > powerResult2) {
        console.log(`${character1.NOME} venceu o confronto!`);
    } else if (powerResult2 > powerResult1) {
        console.log(`${character2.NOME} venceu o confronto ⚔ e ganhou 1 ponto de bônus`);
    } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido!");
    }



    console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`);
    
    await logRollResult(
        character1.NOME, 
        "poder", 
        diceResult1, 
        character1.PODER)
        ;    
    await logRollResult(
        character2.NOME, 
        "poder", 
        diceResult2, 
        character2.PODER)
        ;    
         // if(powerResult1 > powerResult2){
        //     if(character2.PONTOS > 0){
        //         console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto!`) 
        //         character2.PONTOS--;
        //     } 
        // TORNANDO ESTE IF TERNÁRIO:
        character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1: 0;
        
      
        character1.PONTOS -= character2 > character1 && character1.PONTOS > 0 ? 1: 0;
    

    
         console.log(powerResult1 === powerResult2 ?"Confronto empatado! Nenhum ponto foi perdido!" : " ")
          
        
        
}


// Verificando o vencedor!

if(TotalTestSkill1 > TotalTestSkill2){
    console.log(`${character1.NOME} marcou um ponto!`)
    character1.PONTOS++;
}else if(TotalTestSkill2 > TotalTestSkill1){
    console.log(`${character2.NOME} marcou um ponto!`)
    character2.PONTOS++;
}

console.log("---------------------------")
}
    }



/* await antes de uma função, faz com  que outras funções esperem ela ser executada antes de qualquer ação.

*/
async function declareWinner(character1, character2){
    console.log("Resultado final: ")
    console.log(`${character1.NOME}: ${character1.PONTOS} `)
    console.log(`${character2.NOME}: ${character2.PONTOS} `)

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`)
    }else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`)
    }else{
        console.log("A corrida terminou empatada!")
    }
    
}
(async function main() {
    console.log(`🏁🚨 Corrida entre o ${player1.NOME} e ${player2.NOME} começando...\n`);
    
    await playeRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();


// Implementações no código:
// confronto
// *sortear aleatoriamente se é um casco(-1 ponto DE PODER) ou um bomba(-2 pontos DE PODER) VV
// *quem vence o confronto ganha um turbo (+ 1ponto) aleatoriamente
// Iniciar o jogo
playGame();
