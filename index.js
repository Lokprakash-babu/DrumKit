let buttons=document.querySelectorAll(".drum");
// console.log(buttons);
for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', function(){
      playMusic(this.innerHTML);
      buttonAnimation(this.innerHTML);
  });
}


document.addEventListener('keypress', function(event){
  // console.log(event);

  playMusic(event.key);
  buttonAnimation(event.key);

});

function buttonAnimation(val){
  let ab=document.querySelector("."+val);
  if(ab!=null){
  ab.classList.toggle("pressed")  ;
  setTimeout(function(){ab.classList.toggle('pressed')},1000) ;
}
}

function playMusic(value){
  switch(value){
    case "w":
    let audio1 = new Audio('./scrash.mp3');
    audio1.play();
    break;

    case "a":
    let audio2 = new Audio('./kick-bass.mp3');
    audio2.play();
    break;

    case "s":
    let audio3 = new Audio('./snare.mp3');
    audio3.play();
    break;

    case "d":
    let audio4 = new Audio('./tom-1.mp3');
    audio4.play();
    break;

    case "j":
    let audio5 = new Audio('./tom-2.mp3');
    audio5.play();
    break;

    case "k":
    let audio6 = new Audio('./tom-3.mp3');
    audio6.play();
    break;

    case "l":
    let audio7 = new Audio('./tom-4.mp3');
    audio7.play();
    break;
  }
}
