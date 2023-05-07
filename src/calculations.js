// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/*
returns percentage off
*/
function getPercentOfTotal(percentage, total, type) {

    percentage /= 100;

    total = (percentage * total);

    if (type === "int") {
        total = parseInt(total);
    } else if (type === "float") {
        total = parseFloat(total.toFixed(2));
    }
    return total;
}