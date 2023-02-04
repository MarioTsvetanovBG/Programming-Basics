function excellentResult(input){
    result=Number(input[0]);
    if (result>=5.50){
        console.log("Excellent!")
    }
}

function greaterNumber(input) {
    numOne = Number(input[0]);
    numTwo = Number(input[1]);
    if (numOne>numTwo) {
        console.log(numOne);
    } else {
        console.log(numTwo);
    }
}

function evenOrOdd(input) {
    number = Number(input[0]);
    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}


function passwordGuess(input) {
    password = input[0];
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}


function numbersFrom100To200(input) {
    number = Number(input[0]);
    if (number < 100) {
        console.log("Less than 100");
    } else if (number <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}


function speedInfo(input) {
    // • При скорост до 10 (включително) отпечатайте "slow"
    // • При скорост над 10 и до 50 (включително) отпечатайте "average" 
    // • При скорост над 50 и до 150 (включително) отпечатайте "fast"
    // • При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
    // • При по-висока скорост отпечатайте "extremely fast"
    speed = Number(input[0]);
    if (speed <= 10) {
        console.log("slow");
    } else if (10 < speed, speed <= 50) {
        console.log("average");
    } else if (50 < speed, speed <= 150) {
        console.log("fast");
    } else if (150 < speed, speed <= 1000) {
        console.log ("ultra fast");
    } else if (speed > 1000) {
        console.log("extremely fast")
    }
}

function areaOfFigures(input) {
    let figure = input[0];
    let area = 0;
    let a = Number(input[1]);
    if (figure === "square") {
        area = a * a;
    } else if (figure === "rectangle") {
        let b = Number(input[2]);
        area = a * b;
    } else if (figure === "circle") {
        area = Math.PI * Math.pow(a, 2);
    } else if (figure === "triangle") {
        let h = Number(input[2]);
        area = a * h / 2
    }
    console.log(area.toFixed(3))
}


function workingHours (input) {
    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];
    if (dayOfTheWeek == "Sunday") {
        console.log("closed");
    } else {
        if (hour <= 18 && hour >= 10) {
            console.log("open");
        } else {
            console.log("closed");
        }
    }
}

function cinemaTicket (input) {
    let day = input[0];
    let pricePerTicket = 9999999;
    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        pricePerTicket = 12;
    } else if (day == "Wednesday" || day == "Thursday") {
        pricePerTicket = 14;
    } else {
        pricePerTicket = 16;
    }
    console.log(pricePerTicket);
}

function fruitOrVegetable (input) {
    let fruitOrVeggy = input[0];
    // banana, apple, kiwi, cherry, lemon и grapes
    // tomato, cucumber, pepper и carrot 
    switch (fruitOrVeggy) {
        case "banana": 
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}


function invalidNumber (input) {
    let number = Number(input[0]);
    if ((number >= 100 && number <= 200) || number == 0) {
    } else {
        console.log("invalid");
    }
}

function fruitShop (input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let priceFruit = 0;
    if (day == "Sunday" || day == "Saturday") {
        if (fruit == "banana") {
           priceFruit = 2.7;
        } else if (fruit == "apple") {
            priceFruit = 1.25;
        } else if (fruit == "orange") {
            priceFruit = 0.90;
        } else if (fruit == "grapefruit") {
            priceFruit = 1.6;
        } else if (fruit == "kiwi") {
            priceFruit = 3;
        } else if (fruit == "pineapple") {
            priceFruit = 5.6;
        } else if (fruit == "grapes") {
            priceFruit = 4.2;
        } else {
            console.log("error");
        }
    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thurstday" || day == "Friday") {
        if (fruit == "banana") {
            priceFruit = 2.5;
        } else if (fruit == "apple") {
            priceFruit = 1.2;
        } else if (fruit == "orange") {
            priceFruit = 0.85;
        } else if (fruit == "grapefruit") {
            priceFruit = 1.45;
        } else if (fruit == "kiwi") {
            priceFruit = 2.7;
        } else if (fruit == "pineapple") {
            priceFruit = 5.5;
        } else if (fruit == "grapes") {
            priceFruit = 3.85;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
    let totalPrice = priceFruit * quantity;
    if (totalPrice == 0) {
    } else {    
        console.log(totalPrice.toFixed(2));
    }
}

function tradeComision (input) {
    let city = input[0];
    let trading = Number(input[1]);
    
    let comision =  0;
    
    if (city == "Sofia") {
        if (trading >= 0 && trading <= 500) {
            comision = 0.05;
        } else if (trading > 500 && trading <= 1000) {
            comision = 0.07;
        } else if (trading > 1000 && trading <= 10000) {
            comision = 0.08;
        } else if (trading > 10000) {
            comision = 0.12;
        } else {
            console.log("error")
        }
    } else if (city == "Varna") {
        if (trading >= 0 && trading <= 500) {
            comision = 0.045;
        } else if (trading > 500 && trading <= 1000) {
            comision = 0.075;
        } else if (trading > 1000 && trading <= 10000) {
            comision = 0.1;
        } else if (trading > 10000) {
            comision = 0.13;
        } else {
            console.log("error")
        }
    } else if (city == "Plovdiv") {
        if (trading >= 0 && trading <= 500) {
            comision = 0.055;
        } else if (trading > 500 && trading <= 1000) {
            comision = 0.08;
        } else if (trading > 1000 && trading <= 10000) {
            comision = 0.12;
        } else if (trading > 10000) {
            comision = 0.145;
        } else {
            console.log("error")
        }
    } else {
        console.log("error");
    }
    let comisionPrice = trading * comision;
    if (comision > 0) {
        console.log(comisionPrice.toFixed(2))
    }  
}