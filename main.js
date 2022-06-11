Webcam.set({
    width:300, height:300, image_format:'png', png_quality:95
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    webcam.snap(function(datauri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5.version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9BQPOawqb/')

function modelLoaded(){
    console.log( 'Model Loaded');
}

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = "The first prediction is"+ Prediction_1;
    speak_data_2 =  "And the second prediction is " +Prediction_2;
    var utterThis =  new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utterThis);

}