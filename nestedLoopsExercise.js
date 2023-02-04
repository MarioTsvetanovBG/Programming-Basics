function pyramid(input) {
    let pyramidN = Number(input[0]);

    let endOfLoop = false;
    let numberCountResult = 0;

    for (let rowCount = 1; rowCount <= pyramidN; rowCount++) {
        let stringResult = "";
        for (let numberCount = 1; numberCount <= rowCount; numberCount++) {
            numberCountResult = numberCountResult + 1;
            if (numberCountResult > pyramidN) {
                endOfLoop = true;
                break;
            }
            stringResult = stringResult + numberCountResult + " ";
        }
        console.log(stringResult);
        if (endOfLoop === true) {
            break;
        }
    }
}

pyramid(["20"])

function evenOddPositionSum(input) {
    firstNumber = Number(input[0]);
    secondNumber = Number(input[1]);

    result = ""

    for (let numberBetween = firstNumber; numberBetween <= secondNumber; numberBetween++) {
        let oddSum = 0;
        let evenSum = 0;
        let numberString = String(numberBetween);

        for (let placeInNumber = 0; placeInNumber < numberString.length; placeInNumber++) {
            let currentDigit = numberString[placeInNumber];
            let currentDigitNumber = Number(currentDigit);
            if (placeInNumber % 2 != 0) {
                oddSum = oddSum + currentDigitNumber;
            } else {
                evenSum = evenSum + currentDigitNumber;
            }
        }
        if (oddSum == evenSum) {
            result = result + numberBetween + " ";
        }
    }
    console.log(result)
}


function primeNonPrimeNumbers(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (true) {
        let command = input[index];
        let numCommand = Number(command);
        if (command === "stop") {
            break;
        } else if (numCommand < 0) {
            console.log("Number is negative.");
            index++;
            continue;
        }
        let isPrime = true;
        for (let inspection = 2; inspection < numCommand; inspection++) {
            if (numCommand % inspection == 0) {
                nonPrimeSum = nonPrimeSum + numCommand;
                isPrime = false;
                break;
            }
        }
        if (isPrime == true) {
            primeSum = primeSum + numCommand;
        }
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}


function trainTheTrainers(input) {
    let index = 0;
    let juri = Number(input[index]);
    index++;

    let presentationCount = 0;
    let totalAverage = 0;

    while (true) {
        let presentation = input[index];
        if (presentation === "Finish") {
            console.log(`Student's final assessment is ${(totalAverage / presentationCount).toFixed(2)}.`);
            break;
        }
        presentationCount++;

        let loopSum = 0;
        for (let mark = 0; mark < juri; mark++) {
            index++;
            let newMark = Number(input[index]);
            loopSum = loopSum + newMark;
        }

        let averageMark = (loopSum / juri);
        totalAverage = totalAverage + averageMark;
        console.log(`${presentation} - ${averageMark.toFixed(2)}.`)
        index++;
    }
}

function specialNumbers(input) {
    let number = Number(input[0]);
    let result = "";
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (number % a === 0 && number % b === 0 && number % c === 0 && number % d === 0) {
                        result = (result + a + b + c + d + " ");
                    }
                }
            }
        }
    }
    console.log(result);
}


function cinemaTickets(input) {
    let index = 0;

    let totalCounts = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidoTickets = 0;

    let studentTicketsPercent = 0;
    let standardTicketsPercent = 0;
    let kidoTicketsPercent = 0;
    
    while (true) {
        let movie = input[index];
        index++;
        let seats = Number(input[index]);
        if (movie === "Finish") {
            studentTicketsPercent = studentTickets / totalCounts * 100;
            standardTicketsPercent = standardTickets / totalCounts * 100;
            kidoTicketsPercent = kidoTickets / totalCounts * 100;
            console.log(`Total tickets: ${totalCounts}`);
            console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
            console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`)
            console.log(`${kidoTicketsPercent.toFixed(2)}% kids tickets.`)
            break;
        }
        
        let count = 0;
        while (true) {
            index++;
            let ticketType = input[index];
            if (ticketType === "End") {
                break;
            } else if (ticketType == "student") {
                studentTickets++;
            } else if (ticketType == "standard") {
                standardTickets++;
            } else if (ticketType == "kid") {
                kidoTickets++;
            }
            count++;
            if (count == seats) {
                break;
            }
        }
        totalCounts = totalCounts + count;
        let percentFull = count / seats * 100;
        console.log(`${movie} - ${percentFull.toFixed(2)}% full.`);
        index++;
    }
}