const unitTypeSelect = document.getElementById("unitType");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");
const convertButton = document.getElementById("convert");
function popularUnits() {
  const unitType = unitTypeSelect.value;
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  let units = [];

  if (unitType === "Length") {
    units = ["Meters", "kilometers", "Inches", "Feet"];
  } else if (unitType === "Weight") {
    units = ["Grams", "kilograms", "pounds", "ounces"];
  } else if (unitType === "Volume") {
    units = ["Liters", "milliliters", "gallons", "cups"];
  }

  units.forEach((unit) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit;
    optionFrom.textContent = unit;
    fromUnitSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit;
    optionTo.textContent = unit;
    toUnitSelect.appendChild(optionTo);
  });
}

// Add event listener to call populateUnits when unitType changes
unitTypeSelect.addEventListener("change", popularUnits);

// Call populateUnits on page load to set initial options
popularUnits();
convertButton.addEventListener("click", function () {
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");
  let unitValue = document.getElementById("unitConverter").value;
  unitValue = parseFloat(unitValue);

  if (isNaN(unitValue)) {
    resultDiv.textContent = "Please enter a valid number.";
    return; // Early return if the input is not a number
  }

  let result;
  switch (fromUnit.toLowerCase()) {
    // Length Conversion...
    case "meters":
      switch (toUnit.toLowerCase()) {
        case "kilometers":
          result = unitValue / 1000;
          break;
        case "inches":
          result = unitValue * 39.3701;
          break;
        case "feet":
          result = unitValue * 3.28084;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "kilometers":
      switch (toUnit.toLowerCase()) {
        case "meters":
          result = unitValue * 1000;
          break;
        case "inches":
          result = unitValue * 39370.1;
          break;
        case "feet":
          result = unitValue * 3280.84;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "inches":
      switch (toUnit.toLowerCase()) {
        case "meters":
          result = unitValue / 39.3701;
          break;
        case "kilometers":
          result = unitValue / 39370.1;
          break;
        case "feet":
          result = unitValue / 12;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "feet":
      switch (toUnit.toLowerCase()) {
        case "meters":
          result = unitValue * 0.3048;
          break;
        case "kilometers":
          result = unitValue / 3280.84;
          break;
        case "inches":
          result = unitValue * 12;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;

    // Weight Conversion...
    case "grams":
      switch (toUnit.toLowerCase()) {
        case "kilograms":
          result = unitValue / 1000;
          break;
        case "pounds":
          result = unitValue * 0.00220462;
          break;
        case "ounces":
          result = unitValue * 0.035274;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "kilograms":
      switch (toUnit.toLowerCase()) {
        case "grams":
          result = unitValue * 1000;
          break;
        case "pounds":
          result = unitValue * 2.20462;
          break;
        case "ounces":
          result = unitValue * 35.274;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "pounds":
      switch (toUnit.toLowerCase()) {
        case "grams":
          result = unitValue * 453.592;
          break;
        case "kilograms":
          result = unitValue * 0.453592;
          break;
        case "ounces":
          result = unitValue * 16;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "ounces":
      switch (toUnit.toLowerCase()) {
        case "grams":
          result = unitValue * 28.3495;
          break;
        case "kilograms":
          result = unitValue * 0.0283495;
          break;
        case "pounds":
          result = unitValue * 0.0625;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;

    // Volume Conversion...
    case "liters":
      switch (toUnit.toLowerCase()) {
        case "milliliters":
          result = unitValue * 1000;
          break;
        case "gallons":
          result = unitValue * 0.264172;
          break;
        case "cups":
          result = unitValue * 4.22675;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "milliliters":
      switch (toUnit.toLowerCase()) {
        case "liters":
          result = unitValue / 1000;
          break;
        case "gallons":
          result = unitValue * 0.000264172;
          break;
        case "cups":
          result = unitValue * 0.00422675;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    case "gallons":
      switch (toUnit.toLowerCase()) {
        case "liters":
          result = unitValue * 3.78541;
          break;
        case "milliliters":
          result = unitValue * 3785.41;
          break;
        case "cups":
          result = unitValue * 16;
          break;
        default:
          resultDiv.textContent = "Invalid conversion.";
          return;
      }
      break;
    default:
      resultDiv.textContent = "Invalid conversion.";
      return;
  }
  resultDiv.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
});
