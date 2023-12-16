function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const totalSum = (n * (n + 1)) / 2; 
    const sumOfArray = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - sumOfArray; 
  }
  
  function findMissing() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const resultElement = document.getElementById('result');
  
    const numbersArray = inputNumbers.split(',').map(Number);
  
    const missingNumber = findMissingNumber(numbersArray);
  
    resultElement.textContent = `Missing Number: ${missingNumber}`;
  }
  
  document.getElementById('findMissing').addEventListener('click', findMissing);
  