const getFirstNumber = +prompt('Enter first number:');
const getSecondNumber = +prompt('Enter second number:');
const showResult = `User entered ${getFirstNumber} & ${getSecondNumber}:
- ${getFirstNumber} + ${getSecondNumber} = ${getFirstNumber + getSecondNumber}
- ${getFirstNumber} - ${getSecondNumber} = ${getFirstNumber - getSecondNumber}
- ${getFirstNumber} * ${getSecondNumber} = ${getFirstNumber * getSecondNumber}
- ${getFirstNumber} / ${getSecondNumber} = ${getFirstNumber / getSecondNumber}`;
alert(showResult);