
function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
     const values = [];
     const images = [];

     for(let i = 0; i < numOfDice; i++ ){
       const value = Math.floor(Math.random() * 6  ) + 1 ;
       values.push(value);
       images.push(`<img src="images/${value}.png">`);
     }
       diceResult.textContent = `dice: ${values.join(', ')}`;
       diceImages.innerHTML = images.join('');  
}

















// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);


//     if(isNaN(guess)){
//         window.alert("please enter a valid number!")
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Oga no stress me,Enter valid number");
//     }
//     else{
//         attempts++;
//     }
    
//     if(guess < answer){
//         window.alert("TOO LOW OGA!, TRY AGAIN");
//     }
//     else if(guess > answer){
//         window.alert("GUY ITS TOO HIGH, YOU DE MAD? TRY AGAIN");
//     }
//     else{
//         window.alert(`CORRECT! the answer was ${answer}, it took you ${attempts} attempts`);
//         running = false;
//     }
// }














// let isStudent;
// let name = prompt("are you a student?");

// if (isStudent == false){
//     window.alert("you are not a student?");
// }




// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckBox.checked){
//         subResult.textContent = `you just subscribed`;
//     }else{
//         subResult.textContent =`you did not subscribe`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `you are paying with visa`;
//     }else if(masterCardBtn.checked){
//         paymentResult.textContent = `you paying with mastercard`;
//     }else if(payPalBtn.checked){
//         paymentResult.textContent = `you paying with paypal`;

//     }else{
//         paymentResult.textContent = `you have not payed yet`;
//     }
// }

























 //this is for passsanger counter app

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countlabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     countlabel.textContent = 0;
// }






// let PI = 3.14159;
// let radius;
// let circumference;


// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("mytext").value;
//     radius =Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myh3").textContent = circumference + "cm";
// }




console.log(circumference);



// let numberOfDrumButtons = document.querySelectorAll(".drum").length;
  
// for(let i =0; i < numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//     function handleClick(){
//         alert("i got clicked");
//     }

//     this.style.color = "white";
    
// }


// let audio = new Audio("sounds/tom-1.mp3");  
//     audio.play();       