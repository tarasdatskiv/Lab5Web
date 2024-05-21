// Task 1
function countWords() {
    let text = document.getElementById("inputText").value;
    let words = text.match(/\w+/g);
    let wordCount = words ? words.length : 0;
    document.getElementById("wordCount").innerHTML = "Word Count: " + wordCount;

    if (words) {
        let maxWordLength = Math.max(...words.map(word => word.length));
        document.getElementById("maxWordLength").innerHTML = "Max Word Length: " + maxWordLength;

        let minWordLength = Math.min(...words.map(word => word.length));
        document.getElementById("minWordLength").innerHTML = "Min Word Length: " + minWordLength;

        let totalLength = words.reduce((acc, word) => acc + word.length, 0);
        let averageWordLength = totalLength / wordCount;
        document.getElementById("averageWordLength").innerHTML = "Average Word Length: " + averageWordLength.toFixed(2);
    } else {
        document.getElementById("maxWordLength").innerHTML = "Max Word Length: 0";
        document.getElementById("minWordLength").innerHTML = "Min Word Length: 0";
        document.getElementById("averageWordLength").innerHTML = "Average Word Length: 0";
    }
}

// Task 2
function checkNumberFormat() {
    let input = document.getElementById("numberInput").value;
    let isValidNumber = /^[-+]?[0-9]*\.?[0-9]+$/.test(input);
    document.getElementById("numberError").innerHTML = isValidNumber ? "" : "Invalid number format";
}
//Task 3
Number.prototype.toWords = function() {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = 'hundred';

    let num = this.valueOf();
    
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        return 'Number out of range';
    }
    
    if (num >= 0 && num <= 9) {
        return units[num];
    } else if (num >= 10 && num <= 19) {
        return teens[num - 10];
    } else if (num >= 20 && num <= 99) {
        let ten = Math.floor(num / 10);
        let unit = num % 10;
        return tens[ten] + (unit !== 0 ? '-' + units[unit] : '');
    } else if (num >= 100 && num <= 999) {
        let hundred = Math.floor(num / 100);
        let remainder = num % 100;
        let remainderWords = remainder === 0 ? '' : ' and ' + remainder.toWords();
        return units[hundred] + ' ' + hundreds + remainderWords;
    }
};


// Function to convert number to words
function convertNumberToWords() {
    let number = parseInt(document.getElementById("numberToConvert").value);
    if (!isNaN(number)) {
        document.getElementById("numberInWords").innerHTML = number.toWords();
    } else {
        document.getElementById("numberInWords").innerHTML = "Invalid number";
    }
}
