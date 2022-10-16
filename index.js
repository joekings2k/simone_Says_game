let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern =[]



function nextSequence() {
  let randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  document.addEventListener("keydown",(event)=>{
    fade(randomChosenColor)
    playSound(randomChosenColor)
    console.log(event)
  })
  
  

  
  // 

  let button= document.querySelectorAll(".btn")
  for(let i=0 ;i<button.length;i++){
    button[i].addEventListener("click",(e)=>{
      let userChosenColor = e.target.id
      userClickedPattern.push(userChosenColor)
      fade(userChosenColor)
      playSound(userChosenColor)
    })
    
  }  
}
nextSequence();


function playSound(name) {
  const sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}

let fade = (color) => {
  let link = $(`#${color}`);
  link.fadeIn(100).fadeOut(100).fadeIn(100);
};

let animatePress = (selectedButton) => {
  let buttons = $(".btn");
  buttons.click((event)=>{
    
  })
};