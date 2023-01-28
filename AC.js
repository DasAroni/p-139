Status = "";
AC_image = "";

function preaload(){
    AC_image = loadImage("AC.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object:Detecting object";
}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_Detector.detect(AC_image,gotResult);
}

function gotResult(results,error){
if(error){
    console.error(error);
}
console.log(results);
}

function draw(){
    image(AC_image,0,0,640,350);
}