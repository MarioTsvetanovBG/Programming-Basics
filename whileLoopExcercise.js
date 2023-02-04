function library(input) {
    let index = 0;
    let bookNum = 1;
    let favBook = input[index];
    index++;
    let book = input[index];
    while (true) {
        if (book === "No More Books") {
            bookNum = bookNum - 1;
            console.log("The book you search is not here!");
            console.log(`You checked ${bookNum} books.`);
            break;
        } else if (book === favBook) {
            bookNum = bookNum - 1;
            console.log(`You checked ${bookNum} books and found it.`);
            break;
        }
        index++;
        book = input[index];
        bookNum = bookNum + 1;
    }
}


function examPrep(input) {
    let uncannyMarks = Number(input[0]);
    let index = 1;
    
    let poorMark = 0;
    let markCount = 0;
    let markSum = 0;
    let average = 0;
    let lastExcercise = "hasan"

    while (true) {
        let excercise = input[index];
        if (excercise === "Enough") {
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${markCount}`);
            console.log(`Last problem: ${lastExcercise}`);
            break;
        }
        index++;
        let mark = Number(input[index]);
        markCount = markCount + 1;
        markSum = markSum + mark;
        average = markSum / markCount;
        if (mark <= 4) {
            poorMark = poorMark + 1;
            if (poorMark === uncannyMarks) {
                console.log(`You need a break, ${uncannyMarks} poor grades.`);
                break;
            }
        }
        lastExcercise = excercise;
        index++;
   }
}
            

function vacantion(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let moneyHave = Number(input[index]);
    index++;
    
    let moneySum = moneyHave; 
    let days = 1
    let spendingFiveDays = 0;

    while (true) {
        let text = input[index];
        index++
        let sumInput = Number(input[index]);
        if (text === "save") {
            moneySum = moneySum + sumInput;
            spendingFiveDays = 0;
            if (moneySum >= neededMoney) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        } else if (text === "spend") {
            moneySum = moneySum - sumInput;
            if (moneySum < 0) {
                moneySum = 0;
            } 
            spendingFiveDays = spendingFiveDays + 1;
            if (spendingFiveDays === 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;
            }
        }

        days++;
        index++;
    }
}

function steps(input) {
    let index = 0;
    let sumSteps = 0;
    let isGoingHomeValid = false;
    while (true) {
        let stepsInput = input[index];
        if (stepsInput !== "Going home") {
            let steps = Number(stepsInput);
            sumSteps = sumSteps + steps;
            if (sumSteps >= 10000) {
                console.log("Goal reached! Good job!")
                if ((sumSteps - 10000) > 0) {
                    console.log(`${sumSteps - 10000} steps over the goal!`)
                    break;
                } else {
                    break;
                } 
            }
            if (isGoingHomeValid === true) {
                console.log(`${10000 - sumSteps} more steps to reach goal.`);
                break;
            }
        } else {
            isGoingHomeValid = true;
        }
        index++;
    }
}


function coins(input) {
    let moneyInput = Number(input[0]);
    let stotinki = Math.round(moneyInput * 100);
    let coinsSum = 0;
    while(stotinki !== 0) {
        if (stotinki >= 200) {
            stotinki = stotinki - 200;
        } else if (stotinki >= 100) {
            stotinki = stotinki - 100;
        } else if (stotinki >= 50) {
            stotinki = stotinki - 50;
        } else if (stotinki >= 20) {
            stotinki = stotinki - 20;
        } else if (stotinki >= 10) {
            stotinki = stotinki - 10;
        } else if (stotinki >= 5) {
            stotinki = stotinki - 5;
        } else if (stotinki >= 2) {
            stotinki = stotinki - 2;
        } else if (stotinki === 1) {
            stotinki = 0;
        }
        coinsSum++;
    }
    console.log(coinsSum);
}

function cake(input) {
    let index = 0;
    let wide = Number(input[index]);
    index++;
    let high = Number(input[index]);
    index++;
    let cakePieces = wide * high;
    while (true) {
        let guests = input[index];
        if (guests === "STOP" && cakePieces > 0) {
            console.log(`${cakePieces} pieces are left.`);
            break;
        } else if (cakePieces < Number(guests)) {
            console.log(`No more cake left! You need ${Number(guests) - cakePieces} pieces more.`);
            break;
        }
        cakePieces = cakePieces - guests;
        index++;
    }
}


function moving(input) {
    let index = 0;
    let wide = Number(input[index]);
    index++;
    let long = Number(input[index]);
    index++;
    let high = Number(input[index]);

    let freeSpace = wide * long * high;
    while(true) {
        index++;
        let command = input[index];
        let boxes = Number(command);
        if (command === "Done") {
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        } else if (boxes > freeSpace) {
            console.log(`No more free space! You need ${boxes - freeSpace} Cubic meters more.`);
            break;
        }
        freeSpace = freeSpace - boxes;
    }
}