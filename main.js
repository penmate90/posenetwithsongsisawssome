song1="";
song2="";
h1="";
h2="";
rwx=0;
rwy=0;
lwy=0;
lwx=0;
scer=0;
label="";
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
   stat1= song1.isPlaying();
   stat2= song2.isPlaying();
   
    if (scer>0.5) {
        fill("#34c6eb");
        stroke("#34c6eb");
        circle(rwx,rwy,20);
        circle(lwx,lwy,20);

            if (label=="right") {
                song2.stop();
                song1.stop();
               song2.play();
               document.getElementById("seng").innerHTML="Playing harry patter"
               label=""
               
             
                
            } else if(label=="left"){
                song1.stop()
                song2.stop();
                song1.play();
                document.getElementById("seng").innerHTML="Playing jurrasic park"
                label=""
                
               
               
            }
       
            
        }
        


    }
function play() {
    song1.play();
}


function fireeeee(results) {
    if (results.length>0) {
        
        
        console.log(results);
        lwy=results[0].pose.leftWrist.y;
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
       

     
            if (results[0].pose.keypoints[10].score>0.5){
                label="right"
                scer=results[0].pose.keypoints[10].score;
            }else if (results[0].pose.keypoints[9].score>0.5){
                label="left"
                scer=results[0].pose.keypoints[9].score;
            }
        
        console.log(label)
       
    }
}