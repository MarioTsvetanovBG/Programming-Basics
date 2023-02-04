function num1To100() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }   
}
num1To100()

function backwardsNto1(input) {
    let n = Number(input[0]);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

function oneToNBetweenThree(input) {
    let n = Number(input[0]);
    for (i = 1; i <= n; i = i + 3) {
        console.log(i);
    }
}

function evenPowersOfTwo(input) {
    let power = Number(input[0]);
    for (i = 0; i <= power; i++) {
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }
    }
}
evenPowersOfTwo("5")

function massiveSymbols(input) {
    let text = input[0];
    for (i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}
massiveSymbols(["Lainovoz"]);

function vowelsSum(input) {
    let word = input[0];
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter == "a") {
            sum = sum + 1;
        } else if (letter == "e") {
            sum = sum + 2;
        } else if (letter == "i") {
            sum = sum + 3;
        } else if (letter == "o") {
            sum = sum + 4;
        } else if (letter == "u") {
            sum = sum + 5;
        }
    } 
    console.log(sum);
}

function sumOfNumbers(input) {
    let num = (input[0]);
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        sum = sum + n;
    }
    console.log("The sum of the digits is:"+sum);   
}

function divideNumberBy9(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let sum = 0;
    let iOutsideForLoop = "";
    for (let i = numberOne; i <= numberTwo; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            iOutsideForLoop = iOutsideForLoop + i + "\n";
        }
    }
    console.log("The sum: "+sum);
    console.log(iOutsideForLoop)
}