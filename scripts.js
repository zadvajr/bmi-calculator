document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const heightM = heightCm / 100;

    if (isNaN(weight) || isNaN(heightCm)) {
      alert("Please enter valid numbers");
      return;
    }
    const bmi = weight / (heightM * heightM);
    const result = document.getElementById("result");
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 24.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    result.textContent += `, ${category}`;
  });
