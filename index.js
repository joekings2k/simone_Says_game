let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];



function nextSequence() {
  let randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  document.addEventListener("keydown",(event)=>{
    fade()
    playSound()
    console.log(event)
  })
  
  let fade = () => {
    let link = $(`#${randomChosenColor}`);
    link.fadeIn(100).fadeOut(100).fadeIn(100);
  };

  function playSound() {
    const sound = new Audio(`./sounds/${randomChosenColor}.mp3`);
    sound.play();
  }
  
  
  

  
}
nextSequence();


