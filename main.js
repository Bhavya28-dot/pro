x = 0;
y = 0;
screen_width=0;
screen_height=0;

apple="empty";
speak_data="empty";
to_number="empty";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 to_number=Number(content);

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isInteger(to_number)=true){
console.log("Started drawing apple");
draw_apple="set";
    } else{
      console.log("The speech has not recognized a number");
    }

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

  for(var i=1; i<= to_number; i++){
   x=Math.floor(Math.random()*700);
   y=Math.floor(Math.random()*400);
   image(apple,x,y,50,50 )
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  loadImage();
  apple="apple.png";
}

function createCanvas(){
  canvas=createCanvas(150,150);
  canvas.center()
}

