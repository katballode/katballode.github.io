function update() {
    let currentValue = slider.value;
    if (currentValue < 1) {
        currentValue = 1;
        slider.value = currentValue;
    } else if (currentValue > 99) {
        currentValue = 99;
        slider.value = currentValue;
    }
    if (currentValue % 2 === 0) {
        currentValue = parseInt(currentValue) + 1;
        slider.value = currentValue;
    }
    sliderOutput.textContent = currentValue;
    if (currentValue % 2 !== 0) {
        submit();
    }
}

function submit() {
    alert("Your volume is now: " + sliderOutput.textContent);
}

const slider = document.getElementById("myRange");
const sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
const sliderOutput = document.querySelector(".slider-output");
