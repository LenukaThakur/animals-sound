// https://teachablemachine.withgoogle.com/models/U_Lz1lHH5/

function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/R9_zTtHDh/model.json", modelready)
}

function modelready() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) { console.log(error) }
    else {
        sound = results[0].label
        confidence = results[0].confidence.toFixed(2)
        console.log(sound)
        animal = document.getElementById("animal")
       
        if (sound == "Cat") {
            animal.src = "cat.gif"
           
        }

        else if (sound == "Dog") {
            animal.src = "dog.gif"
            
        }

        else if (sound == "cow") {
            animal.src = "cow.gif"
            
        }

       
    }

}


