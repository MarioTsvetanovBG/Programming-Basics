function readText(input) {
    let index = 0;
    let randomWords = input[index];
    while (randomWords !== "Stop") {
        console.log(randomWords);
        index++
        randomWords = input[index];
    }
}

function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let userInput = input[index];
    while (password !== userInput) {
        userInput = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}


function sumNumber(input) {
    let index = 0;
    let sum = 0;
    let firstNumber = Number(input[index]);
    index++;
    while (true) {
        if (sum >= firstNumber) {
            break
        }
        let secondNumber = Number(input[index]);
        sum = sum + secondNumber;
        index++
    }
    console.log(sum);
}
    
    
function twoKPlusOne(input) {
    let number = Number(input[0]);
    let numberOne = 1;
    while (number >= numberOne) {
        console.log(numberOne);
        numberOne = 2 * numberOne + 1;
    }
}

function balanceCard(input) {
    let index = 0;
    let sum = 0;
    while (true) {
        let increase = input[index];
        let increaseNumber = Number(increase);
        
        if (increaseNumber < 0) {
            console.log("Invalid operation!");
            break;
        } else if (increase === "NoMoreMoney") {
            break;
        }

        sum = sum + increaseNumber;
        console.log("Increase: "+increaseNumber.toFixed(2));
        index++;
    }
    console.log("Total: "+sum.toFixed(2))
}


function maxNumber(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (true) {
        let textNumber = input[index];
        if (textNumber === "Stop") {
            break;
        }
        let newNumber = Number(textNumber);
        if (newNumber > maxNumber) {
            maxNumber = newNumber;
        }
        index++;
    }
    console.log(maxNumber);
}

function minNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (true) {
        let textNumber = input[index];
        if (textNumber === "Stop") {
            break;
        }
        let newNumber = Number(textNumber);
        if (newNumber < minNumber) {
            minNumber = newNumber;
        }
        index++;
    }
    console.log(minNumber);
}


function graduation(input) {
    let index = 0;
    let excluded = 0;
    let yearOfStudy = 0;
    let marks = 0;
    let studentName = input[index];
    
    while (yearOfStudy !== 12) {
        yearOfStudy = yearOfStudy + 1;
        index = index + 1;
        let mark = Number(input[index]);
        if (mark < 4) {
            excluded = excluded + 1;
            if (excluded === 1) {
                yearOfStudy = yearOfStudy - 1;
            } else if (excluded === 2) {
                console.log(`${studentName} has been excluded at ${yearOfStudy} grade`);
                break;
            }        
        }
        marks = marks + mark;
    }
    if (yearOfStudy === 12) {
        console.log(`${studentName} graduated. Average grade: ${(marks / 12).toFixed(2)}`)
    } 
}