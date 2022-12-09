const getRequest = prompt('Please write what do you want: "add", "sub", "mult", "div":');
const getFirstNumber = +prompt('Write first number:', '0');
const getSecondNumber = +prompt('Write second number:', '0');

if (getRequest === 'add') {
    alert(`${getFirstNumber} + ${getSecondNumber} = ${getFirstNumber + getSecondNumber}`);
} else if (getRequest === 'sub') {
    alert(`${getFirstNumber} - ${getSecondNumber} = ${getFirstNumber - getSecondNumber}`);
} else if (getRequest === 'mult') {
    alert(`${getFirstNumber} * ${getSecondNumber} = ${getFirstNumber * getSecondNumber}`);
} else if (getRequest === 'div') {
    alert(`${getFirstNumber} / ${getSecondNumber} = ${getFirstNumber / getSecondNumber}`);
} else {
    alert('You entered incorrect data, please reload the page and try again.');
}