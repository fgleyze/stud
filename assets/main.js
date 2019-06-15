const wallWidthValue = document.getElementById('js-input-wallWidth');
const wallHeightValue = document.getElementById('js-input-wallHeight');
const leftStudValue = document.getElementById('js-select-leftStud');
const rightStudValue = document.getElementById('js-select-rightStud');

const changeWidth = (width) => {
    document.getElementById('wallTemplate').style.width = width * 2 + "px";
    document.getElementById('js-display-wallWidth').innerHTML = width + " cms";
}

const changeHeight = (height) => {
    document.getElementById('wallTemplate').style.height = height * 2 + "px";
    document.getElementById('js-display-wallHeight').innerHTML = height + " cms";
}

changeWidth(400);
changeHeight(240);

wallWidthValue.onkeyup = () => {
    changeWidth(wallWidthValue.value);
}

wallHeightValue.onkeyup = () => {
    changeHeight(wallHeightValue.value);  
}

leftStudValue.onchange = () => {
    if (leftStudValue.value === 'female') {
        document.getElementById('js-bottomPlate').classList.add("wall--bottomPlate--leftFemale");
        document.getElementById('js-leftStud').classList.add("wall--leftStud--female");
    } else {
        document.getElementById('js-bottomPlate').classList.remove("wall--bottomPlate--leftFemale");
        document.getElementById('js-leftStud').classList.remove("wall--leftStud--female");
    }
}

rightStudValue.onchange = () => {
    if (rightStudValue.value === 'female') {
        document.getElementById('js-bottomPlate').classList.add("wall--bottomPlate--rightFemale");
        document.getElementById('js-rightStud').classList.add("wall--rightStud--female");
    } else {
        document.getElementById('js-bottomPlate').classList.remove("wall--bottomPlate--rightFemale");
        document.getElementById('js-rightStud').classList.remove("wall--rightStud--female");
    }
}