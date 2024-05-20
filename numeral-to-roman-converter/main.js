function convertToRoman(num) {
  // Define the mapping of numbers to Roman numerals, including overline notation for larger numbers
  const romanMapping = [
    { value: 4000000, symbol: '|M̅|' },
    { value: 1000000, symbol: 'M̅' },
    { value: 900000, symbol: 'C̅M̅' },
    { value: 500000, symbol: 'D̅' },
    { value: 400000, symbol: 'C̅D̅' },
    { value: 100000, symbol: 'C̅' },
    { value: 90000, symbol: 'X̅C̅' },
    { value: 50000, symbol: 'L̅' },
    { value: 40000, symbol: 'X̅L̅' },
    { value: 10000, symbol: 'X̅' },
    { value: 9000, symbol: 'I̅X̅' },
    { value: 5000, symbol: 'V̅' },
    { value: 4000, symbol: 'I̅V̅' },
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';

  // Loop through the romanMapping array
  for (let i = 0; i < romanMapping.length; i++) {
    while (num >= romanMapping[i].value) {
      result += romanMapping[i].symbol;
      num -= romanMapping[i].value;
    }
  }

  return result;
}



document.getElementById("convert-button").addEventListener("click", () => {
const numberInput = document.getElementById("number");
const errorElement = document.getElementById("error");
const outputElement = document.getElementById("output");
const number = parseInt(numberInput.value);

errorElement.textContent = "";
outputElement.textContent = "";

//check if the entered value is a number and falls between 1 and 4000000
if (isNaN(number) || number < 1 || number > 4000000) {
  errorElement.textContent = "Please enter a number between 1 and 4000000";
} else {
  //call function to convert
  const romanNumeral = convertToRoman(number);
  outputElement.textContent = `Roman numeral :${romanNumeral}`;
}
})

