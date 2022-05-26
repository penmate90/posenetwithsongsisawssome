song1="";
song2="";
function preload() {
    song1=loadSound("Jurassic Park theme song..mp3");
    song2=loadSound("02 - Harry's Wondrous World.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}

function draw() {
   image(video, 0,0,600,600); 
}


function play() {
    song1.play();
}
