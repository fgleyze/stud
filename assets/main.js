const wallWidthValue = document.getElementById('js-input-wallWidth');
const wallHeightValue = document.getElementById('js-input-wallHeight');
const leftStudValue = document.getElementById('js-select-leftStud');
const rightStudValue = document.getElementById('js-select-rightStud');

const changeWidth = (width) => {
    document.getElementById('wall').style.width = width * 2 + "px";
    document.getElementById('js-display-wallWidth').innerHTML = width + " cms";
}

const changeHeight = (height) => {
    document.getElementById('wall').style.height = height * 2 + "px";
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
    document.getElementById('js-leftChaining').classList.add("u-hidden");
    document.getElementById('js-topChaining').classList.remove("member--topChaining--maleOnLeft");

    document.getElementById('js-topPlate').classList.remove("member--topPlate--femaleOnLeft");
    document.getElementById('js-bottomPlate').classList.remove("member--bottomPlate--femaleOnLeft");
    document.getElementById('js-leftStud').classList.remove("member--leftStud--female");

    if (leftStudValue.value === 'female') {
        document.getElementById('js-topPlate').classList.add("member--topPlate--femaleOnLeft");
        document.getElementById('js-bottomPlate').classList.add("member--bottomPlate--femaleOnLeft");
        document.getElementById('js-leftStud').classList.add("member--leftStud--female");
    } else if (leftStudValue.value === 'male') {
        document.getElementById('js-leftChaining').classList.remove("u-hidden");
        document.getElementById('js-topChaining').classList.add("member--topChaining--maleOnLeft");
    }
}

rightStudValue.onchange = () => {
    document.getElementById('js-rightChaining').classList.add("u-hidden");
    document.getElementById('js-topChaining').classList.remove("member--topChaining--maleOnRight");

    document.getElementById('js-topPlate').classList.remove("member--topPlate--femaleOnRight");
    document.getElementById('js-bottomPlate').classList.remove("member--bottomPlate--femaleOnRight");
    document.getElementById('js-rightStud').classList.remove("member--rightStud--female");

    if (rightStudValue.value === 'female') {
        document.getElementById('js-topPlate').classList.add("member--topPlate--femaleOnRight");
        document.getElementById('js-bottomPlate').classList.add("member--bottomPlate--femaleOnRight");
        document.getElementById('js-rightStud').classList.add("member--rightStud--female");
    } else if (rightStudValue.value === 'male') {
        document.getElementById('js-rightChaining').classList.remove("u-hidden");
        document.getElementById('js-topChaining').classList.add("member--topChaining--maleOnRight");
    }
}