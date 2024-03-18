const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

function getValue() {
  outputField.innerHTML = inputField.value;
}

inputField.addEventListener("keyup", getValue);

const uppercaseBtn = document.querySelector(".uppercase");

uppercaseBtn.addEventListener("click", () => {
  return (outputField.innerHTML = outputField.innerHTML.toUpperCase());
});

const lowercaseBtn = document.querySelector(".lowercase");

lowercaseBtn.addEventListener("click", () => {
  return (outputField.innerHTML = outputField.innerHTML.toLowerCase());
});

const capitalizeBtn = document.querySelector(".capitalize");

capitalizeBtn.addEventListener("click", () => {
  return (outputField.innerHTML =
    outputField.innerHTML.charAt(0).toUpperCase() +
    outputField.innerHTML.slice(1).toLowerCase());
});

const boldBtn = document.querySelector(".bold");

boldBtn.addEventListener("click", () => {
  if (boldBtn.classList.contains("active")) {
    boldBtn.classList.remove("active");
    outputField.style.fontWeight = "400";
  } else {
    boldBtn.classList.add("active");
    outputField.style.fontWeight = "900";
  }
});

const italicBtn = document.querySelector(".italic");

italicBtn.addEventListener("click", () => {
  if (italicBtn.classList.contains("active")) {
    italicBtn.classList.remove("active");
    outputField.style.fontStyle = "none";
  } else {
    italicBtn.classList.add("active");
    outputField.style.fontStyle = "italic";
  }
});

const underlineBtn = document.querySelector(".underline");

underlineBtn.addEventListener("click", () => {
  if (underlineBtn.classList.contains("active")) {
    underlineBtn.classList.remove("active");
    outputField.style.textDecoration = "none";
  } else {
    underlineBtn.classList.add("active");
    outputField.style.textDecoration = "underline";
  }
});
