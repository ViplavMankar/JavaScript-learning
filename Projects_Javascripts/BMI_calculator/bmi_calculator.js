const bmi_form = document.querySelector('form');

bmi_form.addEventListener('submit', (e) => {
  e.preventDefault();

  const heightValue = parseInt(document.querySelector('#height').value);
  const heightInput = document.querySelector('#height');
  const weightValue = parseInt(document.querySelector('#weight').value);
  const weightInput = document.querySelector('#weight');
  const resultedBMI = document.querySelector('#results');

  if (heightValue === '' || heightValue < 0 || isNaN(heightValue)) {
    resultedBMI.innerHTML = `Please provide a valid height ${heightInput}`;
  } else if (weightValue === '' || weightValue < 0 || isNaN(weightValue)) {
    resultedBMI.innerHTML = `Please provide a valid weight ${weightInput}`;
  } else {
    const bmiValue = (
      weightValue /
      ((heightValue * heightValue) / 10000)
    ).toFixed(2);
    const underWtElement = document.querySelector('#underwt');
    const normalWtElement = document.querySelector('#normalwt');
    const overWtElement = document.querySelector('#overwt');
    underWtElement.style.backgroundColor = '#797978';
    normalWtElement.style.backgroundColor = '#797978';
    overWtElement.style.backgroundColor = '#797978';
    if (bmiValue < 18.6) {
      resultedBMI.innerHTML = `<span>${bmiValue}</span>`;
      underWtElement.style.backgroundColor = 'yellow';
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      resultedBMI.innerHTML = `<span>${bmiValue}</span>`;
      normalWtElement.style.backgroundColor = 'green';
    } else {
      resultedBMI.innerHTML = `<span>${bmiValue}</span>`;
      overWtElement.style.backgroundColor = 'red';
    }
  }
});
