const textarea = document.querySelector("#text");
const init = document.querySelector("#speak");
const cancel = document.querySelector("#stop");

const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 2;

const speak = () => {
  if (utterance.text === "") {
    utterance.text = "Digite um texto seu corno!";
  }
  speechSynthesis.speak(utterance);
};

const stop = () => {
  speechSynthesis.cancel();
};

const setText = (event) => {
  utterance.text = event.target.value;
};

textarea.addEventListener("keyup", setText);
init.addEventListener("click", speak);
cancel.addEventListener("click", stop);
