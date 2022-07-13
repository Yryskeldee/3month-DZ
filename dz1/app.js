const persNumberInput = document.querySelector(".persNumberInput");
const persNumberCheck = document.getElementsByClassName("persNumberCheck");
const persNumberResult = document.querySelector(".persNumberResult");

const persNumberValidate = /0\d{13}$/;

 persNumberCheck[0].addEventListener("click", () => {
  if (persNumberValidate.test(persNumberInput.value)) {
     persNumberResult.innerText = "Accept";
    persNumberResult.style.color = "green";
  } else {
    persNumberResult.innerText = "Wrong";
    persNumberResult.style.color = "red";
   }
 });

const block = document.querySelector(".block")

let num = 0;
const box = function () {
    num++;
    block.style.right =`${num}px`;
    if (num < 1) {
        return box();
    } else if (num > 300) {
        num = 0;
    } else {
        num += 360;
    }


}
block.addEventListener("click", box,)
