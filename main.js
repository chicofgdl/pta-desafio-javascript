const character = document.getElementsByClassName("character")[0]; // associando o personagem à constante character
const containerCharacter = document.getElementsByClassName("container-character")[0]; // associando o container do personagem à constante containerCharacter


const VELOCITY = 10; // declarando uma constante VELOCITY de valor 10 (para movimentar o personagem depois)

const SCREEN_WIDTH = screen.width; // obtendo a largura da tela
const SCREEN_HEIGHT = screen.height; // obtendo a altura da tela

let xPosition = 500; // variável que define a posição horizontal do personagem
let yPosition = 300; // variável que define a posição vertical do personagem

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] // declarando um array KeysAvaiable que recebe 4 valores
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // declarando um array directions que recebe 4 valores

window.addEventListener("keydown", (event) => { // "escutando" eventos do tipo keydown (quando uma tecla é pressionada)
    const key  = event.key; // declarando a constante key que recebe a tecla pressionada no evento

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { // percorre a array e faz uma comparação (se a currentkey é exatamente igual à key, que se refere à tecla pressionada no momento, retornando o valor true ou false)
        return currentKey === key; // explicada no comentário de cima
    })

    if(!keyPressedAvaiable) return; // caso a tecla pressionada não seja pertencente ao array, nada será feito

    directions.forEach((direction) => {  //iterando cada direção possível 
        if(character.classList.contains(direction)) character.classList.remove(direction); // tira a classe anterior do personagem e depois adiciona uma nova
    })

    if( -10<yPosition ){ // definindo o limite vertical superior da tela
        if(key === "ArrowUp"){ // checando se a tecla pressionada é a seta para cima, ou seja, se a constante key é exatamente igual (em valor e tipo) à seta para cima
            character.classList.add("turnUp"); // adiciona classe "turnUp" da classList para a constante "personagem", para que ele se movimente para cima
            yPosition -= VELOCITY; // yPosition = yPosition - VELOCITY atualiza a posição vertical do personamgem para cima
        }
    }
    if( yPosition< 650 ){ // definindo o limite vertical inferior da tela
        if(key === "ArrowDown"){ // checando se a tecla pressionada é a seta para baixo, ou seja, se a constante key é exatamente igual (em valor e tipo) à seta para baixo
            character.classList.add("turnDown"); // adiciona classe "turnDown" da classList para a constante "personagem", para que ele se movimente para baixo
            yPosition += VELOCITY; // yPosition = yPosition + VELOCITY atualiza a posição vertical do personamgem para baixo
        }
    }
    if( -20<xPosition ){ // definindo o limite horizonmtal esquerdo da tela
        if(key === "ArrowLeft"){ // checando se a tecla pressionada é a seta da esquerda, ou seja, se a constante key é exatamente igual (em valor e tipo) à seta da esquerda
            character.classList.add("turnLeft"); // adiciona classe "turnLeft" da classList para a constante "personagem", para que ele se movimente para a esquerda
            xPosition -= VELOCITY; // xPosition = xPosition - VELOCITY atualiza a posição vertical do personamgem para a esquerda
        }
    }
    if( xPosition< 1450 ){ // definindo o limite horizontal direito da tela
        if(key === "ArrowRight"){ // checando se a tecla pressionada é a seta da direita, ou seja, se a constante key é exatamente igual (em valor e tipo) à seta da direita
            character.classList.add("turnRight"); // adiciona classe "turnRight" da classList para a constante "personagem", para que ele se movimente para a direita
            xPosition += VELOCITY; // xPosition = xPosition + VELOCITY atualiza a posição vertical do personamgem para a direita
        }
    }
    containerCharacter.style.top = `${yPosition}px`; //para que o personagem se movimente verticalmente
    containerCharacter.style.left = `${xPosition}px` //para que o personamgem se movimente horizontalmente
});