//Based off of this project from youtube, not all my code
//https://www.youtube.com/watch?v=9o2rSxHiv9w
const button = document.querySelector("button");
//gets the speech recognition from that browser 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

//To log that it has started listening 
recognition.onstart = function() {
    console.log("Speech recognition started");
};

//will receive the event 
recognition.onresult = function(event) {
    //console.log(event);

    const spokenWords = event.results[0][0].transcript;

    console.log("Spoken words are: ", spokenWords);
    computerSpeech(spokenWords);
};

//Need to figure out how to make it a female voice
function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    // const speech = new SpeechSynthesis();

    // const speech = new SpeechSynthesisVoice();
    speech.lang = "en-indian";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    determineWords(speech, words);


    window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
    if(words.includes("who are you")){
        speech.text="i am  S G B I T bot";
    }
    if(words.includes("hello")){
        speech.text="geeta khokalkar"
    }
    if(words.includes("who is uttam ")){
        speech.text="Uttam khokalekar is the son of bharama khokalkar"
    }
    if(words.includes("Who is geeta")){
        speech.text="Geeta is doughter of jai maharashtra"
    }
    if(words.includes("will you marry me")){
        speech.text="yes...why not, if you are robo gal ! ha.................ha! are you kidding me";
    }
    if(words.includes("how are you")) {
        speech.text = "I am doing lovely, thank you";
    }
    if(words.includes("who I am")) {
        speech.text = "You are my creator and some how you also be a tester";

    }
    if(words.includes("who is Rohan")) {
        speech.text = "rohan is cool guy and he is Computer Science Student";
    }
    if(words.includes("how is the weather")) {
        speech.text = "cold, too peopley no matter what,you can see it over here";
        window.open("https://weather.com ")
    }
    if(words.includes("do you care for me")) {
        speech.text = "Yes, I do";
    }
    if(words.includes("time table")) {
        speech.text = "Your in Sgbit campus ";
        window.open("time.jpg")
    }
    if(words.includes("open YouTube")) {
        speech.text = "Opening Youtube currently";
        window.open("https://www.youtube.com/")
    }
    if(words.includes("open YouTube for SGBIT")) {
        speech.text = "Opening Youtube for S G B I T";
        window.open("https://youtu.be/eF8FWed5YqM")
    }
    //popup is blocked aw well
    if(words.includes("open Google")) {
        speech.text = "Opening Google currently";
        window.open("https://www.google.com/")
    }
    
if(words.includes("open facebook")){
    speech.text= "opening facebook currently";
    window.open("https://www.facebook.com/")
}

if(words.includes("open facebook")){
    speech.text= "opening facebook currently";
    window.open("https://www.facebook.com/")
} 
if(words.includes("who is video editor ")){
    speech.text="samarth is video editor and he is computer science student";
}




}
// const img = document.createElement("img");
// img.src = "https://picsum.photos/200/301";
// document.body.appendChild(img);

button.addEventListener("click", () => {
    recognition.start();
    const img = document.createElement("img");
    document.getElementsByClassName("myimg")[0].src = "robo11.gif" ,inmerWidth=100,innerHeight=100;
// img.src = "https://picsum.photos/200/301";
// img.src = "https://cdn.dribbble.com/users/42048/screenshots/8350927/media/23289b76ac7353ad4f0d0619ce6e9f2d.gif";
document.body.appendChild(img);
});

const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);