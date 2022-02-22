let inputText = document.querySelector("#input");
let lengthSection = document.querySelector(".length");
let volumeSection = document.querySelector(".volume");
let massSection = document.querySelector(".mass");
let onOffSwitch = document.querySelector("#onoffswitch");
let sunIcon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");
let onOffSwitchContainer = document.querySelector(".onoff-switch-container");
let unitConverter = document.querySelector(".unit-converter");
let converterBottom = document.querySelector(".unit-converter__bottom");
let bottomH4 = converterBottom.querySelectorAll("h4");

inputText.addEventListener("keyup", (e) => {
  let userInput = Number(inputText.value);
  //length
  if (userInput !== "") {
    console.log(userInput);
    lengthSection.querySelector("h4").textContent = `${userInput} meters = ${(
      userInput * 3.28084
    ).toFixed(3)} feet |
      ${userInput} feet = ${(userInput / 3.28).toFixed(3)} meters`;

    //volume
    volumeSection.querySelector("h4").textContent = `${userInput} litres = ${(
      userInput * 0.264172
    ).toFixed(3)} gallons |
      ${userInput} gallons = ${(userInput / 0.264172).toFixed(3)} litres`;

    //mass
    massSection.querySelector("h4").textContent = `${userInput} kilos = ${(
      userInput * 2.2
    ).toFixed(3)} pounds |
      ${userInput} pounds = ${(userInput / 2.2).toFixed(3)} kilos`;
  }
});

onOffSwitch.addEventListener("change", (e) => {
  if (e.target.checked) {
    e.target.style.transform = "translateX(0px)";
    sunIcon.style.visibility = "visible";
    moonIcon.style.visibility = "hidden";
    onOffSwitchContainer.style.background = "#1f2937";
    onOffSwitch.style.background = "#ffd43b";
    document.body.style.background = "#fff";
    unitConverter.style.background = "#1f2937";
    unitConverter.style.boxShadow = "rgb(31 41 55 / 55%) 0px 7px 29px 0px";
    converterBottom.style.color = "#fff";
    bottomH4.forEach((h4) => {
      h4.style.color = "#fff";
    });
    onOffSwitch.title = "Enable night mode";
  } else {
    e.target.style.transform = "translateX(25px)";
    sunIcon.style.visibility = "hidden";
    moonIcon.style.visibility = "visible";
    onOffSwitchContainer.style.background = "#ffd43b";
    onOffSwitch.style.background = "#1f2937";
    document.body.style.background = "#1f2937";
    unitConverter.style.background = "#fff";
    unitConverter.style.boxShadow = "rgb(255 255 255 / 25%) 0px 7px 29px 0px";
    converterBottom.style.color = "#1f2937";
    bottomH4.forEach((h4) => {
      h4.style.color = "#1f2937";
    });
    onOffSwitch.title = "Disable night mode";
  }
});
