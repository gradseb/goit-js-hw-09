function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
// funkcja otrzymania losowego koloru


let timerId; // zmienna jako id timera - setTimeout
const buttonStart = document.querySelector('[data-start]'); // stała przycisku Start
const buttonStop = document.querySelector('[data-stop]');   // stała przycisku Stop


function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    timerId = setTimeout(changeBackgroundColor, 1000); // timer, który co 1 sekunde wywoła funkcje
    
}  // funkcja changeBackgroundColor zmienia losowo kolor tła co 1 sekunde


buttonStart.addEventListener("click", function() { // dodanie zdarzenia kliknięcia do przycisku start
    this.disabled = true; // przycisk Start nie bedzie cały czas aktywny
    buttonStop.disabled = false; // aktywuje sie przycisk Stop po kliknięciu przysiku Start
    changeBackgroundColor(); // włączenie funkcji zmiany koloru po kliknieciu przycisku Start

});

buttonStop.addEventListener("click", function() { // dodanie zdarzenia kliknięcia do przycisku Stop
    this.disabled = true; // przycisk Stop nie bedzie cały czas aktywny
    buttonStart.disabled = false; // aktywuje sie przycisk Start po kliknięciu przysiku Stop
clearTimeout(timerId); // zatrzymanie timera
});

console.log('first');