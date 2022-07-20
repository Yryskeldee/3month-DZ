
const block = document.querySelector(".block");

let position = 0;
let positionTop = 0;


const move = () => {
    if (position <= 520 && positionTop == 0) {
        position += 20;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 520 && positionTop <= 520) {
        positionTop += 20;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    } else if (positionTop >= 520 && position != 0) {
        position -= 10;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position == 0 && positionTop != 0) {
        positionTop -= 20;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    }
}
move()


const blockTwo = document.querySelector(".blockTwo");

let positionX = 0;
let positionY = 0;


const run = () => {
    if (positionX <= 520 && positionY == 0) {
        positionX += 16;
        blockTwo.style.left = `${positionX}px`;
        setTimeout(run, 100);
    } else if (positionX >= 520 && positionY <= 520) {
        positionY += 16 ;
        blockTwo.style.top = `${positionY}px`;
        setTimeout(run, 100);
    } else if (positionY >= 520 && positionX != 0) {
        positionX -= 20;
        blockTwo.style.left = `${positionX}px`;
        setTimeout(run, 200);
    } else if (positionX == 0 && positionY != 0) {
        positionY -= 16;
        blockTwo.style.top = `${positionY}px`;
        setTimeout(run, 100);
    }
}
run()