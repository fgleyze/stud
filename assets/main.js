const frameWidthValue = document.getElementById('js-input-frameWidth');
const frameHeightValue = document.getElementById('js-input-frameHeight');

document.getElementById('js-display-frameWidth').innerHTML = frameWidthValue.value;
document.getElementById('js-display-frameHeight').innerHTML = frameHeightValue.value;

const changeWidth = (width) => {
    document.getElementById('frameTemplate').style.width = width * 2 + "px";
}

const changeHeight = (height) => {
    document.getElementById('frameTemplate').style.height = height * 2 + "px";
}

changeWidth(400);
changeHeight(240);

document.getElementById('frameTemplate').style.height = 240 * 2 + "px";

frameWidthValue.onkeyup = () => {
    document.getElementById('js-display-frameWidth').innerHTML = frameWidthValue.value + " cms";
    changeWidth(frameWidthValue.value);
}

frameHeightValue.onkeyup = () => {
    document.getElementById('js-display-frameHeight').innerHTML = frameHeightValue.value + " cms";
    changeHeight(frameHeightValue.value);
    
}

