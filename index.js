let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];


let level = 0;
let started  = false

document.addEventListener("keydown",()=>{
  if (!started){
    nextSequence();

    let h1 = document.querySelector("h1");
    h1.innerHTML = `level ${level}`;
    started = true
  }
  
})


let button = document.querySelectorAll(".btn");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    let userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    let lengthAnswer = userClickedPattern.length-1
    console.log(lengthAnswer)
    // fade(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(lengthAnswer)
  });
}

function nextSequence() {


  level++;
  let randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  
  
  fade(randomChosenColor);
  playSound(randomChosenColor);

  
  
}


function playSound(name) {
  const sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}

let fade = (color) => {
  let link = $(`#${color}`);
  link.fadeIn(100).fadeOut(100).fadeIn(100);
};


function animatePress(currentcolor){
  $(`#${currentcolor}`).addClass("pressed")

  setTimeout(()=>{
    $(`#${currentcolor}`).removeClass("pressed");
  },200)
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success")
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(()=>{nextSequence()},1000)
    }
  }else{
    console.log("try again")
  }
}
