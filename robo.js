
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
    console.log(event);

    const spokenWords = event.results[0][0].transcript;

    console.log("Spoken words are: ", spokenWords);
    computerSpeech(spokenWords);
};

//Need to figure out how to make it a female voice
function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    // const speech = new SpeechSynthesis();

    // const speech = new SpeechSynthesisVoice();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    determineWords(speech, words);


    window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
    if(words.includes("who are you")){
        speech.text=""
    }
    if(words.includes("hello")){
        speech.text="how can i help you iam a google assistance father"
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
    if(words.includes("who is gay")) {
        speech.text = "Rasool is gay and works for LGBTQ";
    }
    if(words.includes("how is the weather")) {
        speech.text = "cold, too peopley no matter what,you can see it over here";
        window.open("https://weather.com ")
    }
    if(words.includes("do you care for me")) {
        speech.text = "Yes, I do";
    }
    if(words.includes("open YouTube")) {
        speech.text = "Opening Youtube currently";
        window.open("https://www.youtube.com/")
    }
    //popup is blocked aw well
    if(words.includes("open Google")) {
        speech.text = "Opening Google currently";
        window.open("https://www.google.com/")
    }
    if(words.includes("open Google")) {
        speech.text = "Opening Google currently";
        window.open("D:\web photos\bugati.jpg")
    }
if(words.includes("open facebook")){
    speech.text= "opening facebook currently";
    window.open("https://www.facebook.com/")
}
if(words.includes("who is rohan"))
{
    speech.text="do you mean Rohan Pawar or Rohan kaktikar";
if(words.include("yes")){
    speech.text="rohan is cool guy and he is Computer Science Studennt";
}
    
}


}
button.addEventListener("click", () => {
    recognition.start();
});
