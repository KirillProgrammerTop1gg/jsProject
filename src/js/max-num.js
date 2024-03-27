const oneInput = document.getElementById('one-input');
const twoInput = document.getElementById('two-input');
const threeInput = document.getElementById('three-input');
const NumberElement = document.getElementById('time-result');

function HighestNumber() {
    const num1 = parseFloat(oneInput.value);
    const num2 = parseFloat(twoInput.value);
    const num3 = parseFloat(threeInput.value);
    if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
        const maxNumber = Math.max(isNaN(num1) ? 0 : num1, isNaN(num2) ? 0 : num2, isNaN(num3) ? 0 : num3);
        NumberElement.textContent = `Найбільше число яке ви ввели - ${maxNumber} `; 
    } else {
        NumberElement.textContent = "Не вказані числа";
    }
}
oneInput.addEventListener('input', HighestNumber);
twoInput.addEventListener('input', HighestNumber);
threeInput.addEventListener('input', HighestNumber);