function setup(){
    canvas = createCanvas(300,300);
    canvas.center ();
   video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tz6t7CZV2/model.json",model_loaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
 function model_loaded(){
     console.log("model loaded");
}
function gotResult(error,results){
if(error){
    console.error(error);}
else{
console.log(results);
document.getElementById("object").innerHTML=results[0].label;
document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}

