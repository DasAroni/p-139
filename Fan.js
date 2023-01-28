Status = "";
Fan_image = "";

function preaload(){
    Fan_image = loadLmage("Fan.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object : Detecting object";
}

function modelLoaded(){
console.log("modelLoaded");
Status = true;
object_Detector.detect(Fan_image,gotResult);
}

function gotResult(result,error){
if(error){
    console.error(error);
}
console.log(result);
}

function draw(){
    image(Fan_image,0,0,640,350);
}