const getHours = prompt('Enter numbers of hours:');
const hoursToSeconds = getHours * 60 * 60;
const result = `${getHours} hours = ${hoursToSeconds} seconds`;
alert(result);