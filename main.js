song1="";
song2="";

rwx=0;
rwy=0;
lwy=0;
lwx=0;
function preload() {
    song1=loadSound("Jurassic Park theme song..mp3");
    song2=loadSound("02 - Harry's Wondrous World.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet= ml5.poseNet(video, lockednloaded);
    posenet.on('pose', fireeeee)

}
function lockednloaded(params) {
    console.log("10-4, posenet is ready, waiting for confirmaition to fire")
}
function draw() {
   image(video, 0,0,600,600); 
}


function play() {
    song1.play();
}

function fireeeee(results) {
    if (results.length>0) {
        console.log("Fired commander, posenet has started!");
        console.log(results);
        lwy=results[0].pose.leftWrist.y;
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
       console.log("commander, location of the right and left wirsts known, here they are- right wrist x"+rwx+" y "+rwy+ " left wirst x "+lwx+" y "+lwy);
    }
}