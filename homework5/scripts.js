// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const getFirstLine = prompt('Enter first line:');
const getSecondLine = prompt('Enter second line:');
const getThirdLine = prompt('Enter third line:');
const concatenateLines = getFirstLine + ' ' + getSecondLine + ' ' + getThirdLine;
alert(concatenateLines);

// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск.
const fiveNumbers = 52439;
const fiveNumbersToString = String(fiveNumbers);
const result = `Decomposition of a five-digit number (52439): ${fiveNumbersToString[0]} ${fiveNumbersToString[1]} ${fiveNumbersToString[2]} ${fiveNumbersToString[3]} ${fiveNumbersToString[4]}`;
alert(result);