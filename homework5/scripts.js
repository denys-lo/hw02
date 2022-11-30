// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const getFirstLine = prompt('Enter first line:');
const getSecondLine = prompt('Enter second line:');
const getThirdLine = prompt('Enter third line:');
const concatenateLines = getFirstLine + ' ' + getSecondLine + ' ' + getThirdLine;
alert(concatenateLines);

// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск.
const fiveNumbers = 52439;
const splitFiveNumbers = String(fiveNumbers).split('');
const result = `Decomposition of a five-digit number (52439): ${splitFiveNumbers[0]} ${splitFiveNumbers[1]} ${splitFiveNumbers[2]} ${splitFiveNumbers[3]} ${splitFiveNumbers[4]}`;
alert(result);