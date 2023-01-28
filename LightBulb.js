Status = "";
Light_Bulb_image = "";

function preaload(){
    Light_Bulb_image = loadLmage("Bulb.jpg");
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
object_Detector.detect(Light_Bulb_image,gotResult);
}

function gotResult(result,error){
if(error){
    console.error(error);
}
console.log(result);

}

function draw(){
    image(Light_Bulb_image,0,0,640,350);
}