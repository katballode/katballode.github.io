const slider = document.getElementById("myRange");
const output = document.querySelector(".slider-output");
const submitBtn = document.getElementById("submitBtn");

output.innerText = `Volume: ${slider.value}`;

slider.addEventListener("input", () => {
    output.innerText = `Volume: ${slider.value}`;
});

submitBtn.addEventListener("click", () => {
    alert(`No, I like the number 50, so it will be 50. Sorry not sorry.`);
    slider.value = 50;
    output.innerText = `Volume: ${slider.value}`;
});
