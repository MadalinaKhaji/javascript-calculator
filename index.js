console.log("it runs");

function showOnScreen(valueToShow) {
    let screen = document.getElementById('screen');
    screen.innerHTML += valueToShow;
}

function clearScreen() {
    let screen = document.getElementById('screen');
    screen.innerHTML = '';
}

function deleteLastInput() {
    let screen = document.getElementById('screen');
    let newScreen = screen.innerHTML.slice(0, screen.innerHTML.length-1);
    screen.innerHTML = newScreen;
}