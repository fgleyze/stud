const frameWidthValue = document.getElementById('js-input-frameWidth');
const frameHeightValue = document.getElementById('js-input-frameHeight');

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

