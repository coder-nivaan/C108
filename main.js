function startClarification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', 
    modelReady)  
}


function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
  if (error){
    console.log(error);
  }
  else{
    console.log(results);
    random_numer_r = Math.floor(Math.random() * 255) + 1;
    random_numer_g = Math.floor(Math.random() * 255) + 1;
    random_numer_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - ' +
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
    (results[0].confidence*100).toFixed(2)+" %"
    document.getElementById("result_label").style.color = "rbg("
    +random_numer_r+","+random_numer_g+","+random_numer_r+")";
    document.getElementById("result_confidence").style.color = "rbg("
    +random_numer_r+","+random_numer_g+","+random_numer_r+")";


    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');


    if (results[0].label == "Clap") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Bell") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Snapping") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }

  }
}