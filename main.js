const character = document.getElementsByClassName("character")[0]; //
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10; // declarando uma constante VELOCITY de valor 10 (para movimentar o personagem depois)

const SCREEN_WIDTH = screen.width; // definindo a largura da tela
const SCREEN_HEIGHT = screen.height; // definindo a altura da tela

let xPosition = 500; // variável que define a posição horizontal (do boneco)
let yPosition = 300; // variável que define a posição vertical (do boneco)

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        yPosition -= VELOCITY; // yPosition = yPosition - VELOCITY
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`; //y
    containerCharacter.style.left = `${xPosition}px` //x
});
