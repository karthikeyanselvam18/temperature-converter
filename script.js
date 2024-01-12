const celsiusInput = document.querySelector(".celsius-input");
const fahrenheitResult = document.querySelector(".fahrenheit-result");
const fahrenheitInput = document.querySelector(".fahrenheit-input");
const celsiusResult = document.querySelector(".celsius-result");
function isValidNumber(value) {
  return /^-?\d*\.?\d*$/.test(value);
}

celsiusInput.addEventListener("input", () => {
  if (isValidNumber(celsiusInput.value)) {
    const result = (9 / 5) * celsiusInput.value + 32;
    fahrenheitResult.innerHTML = `Fahrenheit °${result.toFixed(2)}`;
  } else {
    celsiusInput.value = "";
  }
});

fahrenheitInput.addEventListener("input", () => {
  if (isValidNumber(fahrenheitInput.value)) {
    const result = ((fahrenheitInput.value - 32) * 5) / 9;
    celsiusResult.innerHTML = `Celsius °${result.toFixed(2)}`;
  } else {
    fahrenheitInput.value = "";
  }
});

const celsiusToFahrenheitContainer = document.querySelector(
  ".celsius-to-fahrenheit"
);
const fahrenheitToCelsiusContainer = document.querySelector(
  ".fahrenheit-to-celsius"
);
const c2F = document.querySelector(".c-2-f");
const f2C = document.querySelector(".f-2-c");
const toggleContainer = document.querySelector(".toggle-container");
celsiusToFahrenheitContainer.style.display = "flex";
toggleContainer.style.setProperty("--left-value", "0");

c2F.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitResult.innerHTML = "";
  celsiusToFahrenheitContainer.style.display = "flex";
  fahrenheitToCelsiusContainer.style.display = "none";
  toggleContainer.style.setProperty("--left-value", "0");
});

f2C.addEventListener("click", () => {
  fahrenheitInput.value = "";
  celsiusResult.innerHTML = "";
  fahrenheitToCelsiusContainer.style.display = "flex";
  celsiusToFahrenheitContainer.style.display = "none";
  toggleContainer.style.setProperty("--left-value", "50%");
});
