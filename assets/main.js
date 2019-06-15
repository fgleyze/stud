const frameWidthValue = document.getElementById('js-input-frameWidth');
const frameHeightValue = document.getElementById('js-input-frameHeight');
const leftStudValue = document.getElementById('js-select-leftStud');
const rightStudValue = document.getElementById('js-select-rightStud');

const changeWidth = (width) => {
    document.getElementById('frameTemplate').style.width = width * 2 + "px";
    document.getElementById('js-display-frameWidth').innerHTML = width + " cms";
}

const changeHeight = (height) => {
    document.getElementById('frameTemplate').style.height = height * 2 + "px";
    document.getElementById('js-display-frameHeight').innerHTML = height + " cms";
}

changeWidth(400);
changeHeight(240);

frameWidthValue.onkeyup = () => {
    changeWidth(frameWidthValue.value);
}

frameHeightValue.onkeyup = () => {
    changeHeight(frameHeightValue.value);  
}

leftStudValue.onchange = () => {
    if (leftStudValue.value === 'female') {
        document.getElementById('js-bottomPlate').classList.add("frame--bottomPlate--leftFemale");
        document.getElementById('js-leftStud').classList.add("frame--leftStud--female");
    } else {
        document.getElementById('js-bottomPlate').classList.remove("frame--bottomPlate--leftFemale");
        document.getElementById('js-leftStud').classList.remove("frame--leftStud--female");
    }
}

rightStudValue.onchange = () => {
    if (rightStudValue.value === 'female') {
        document.getElementById('js-bottomPlate').classList.add("frame--bottomPlate--rightFemale");
        document.getElementById('js-rightStud').classList.add("frame--rightStud--female");
    } else {
        document.getElementById('js-bottomPlate').classList.remove("frame--bottomPlate--rightFemale");
        document.getElementById('js-rightStud').classList.remove("frame--rightStud--female");
    }
}