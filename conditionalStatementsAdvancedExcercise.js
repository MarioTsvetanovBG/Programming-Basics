function cinema (input) {
    let projection = input[0];
    let redove = Number(input[1]);
    let koloni = Number(input[2]);
    let price = 9999999999;
// Premiere – премиерна прожекция, на цена 12.00 лева.
// Normal – стандартна прожекция, на цена 7.50 лева.
// Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева. 
    if (projection == "Premiere") {
        price = 12;
    } else if (projection == "Normal") {
        price = 7.5;
    } else if (projection == "Discount") {
        price = 5;
    }
    totalPrice = price * (redove*koloni);
    console.log(totalPrice.toFixed(2));
}

function summerDress (input) {
    let temperature = Number(input[0]);
    let partOfTheDay = input[1];

    let outfit = "";
    let shoes = "";

    if (partOfTheDay == "Morning") {
        if (temperature >= 10 && 18 >= temperature) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (partOfTheDay == "Afternoon") {
        if (temperature >= 10 && 18 >= temperature) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (temperature >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

function newHouse (input) {
    let flowerType = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    // 5 3.80 2.80 3 2.50 
    let flowerPrice = 0;
    
    if (flowerType == "Roses") {
        flowerPrice = 5;
    } else if (flowerType == "Dahlias") {
        flowerPrice = 3.8;
    } else if (flowerType == "Tulips") {
        flowerPrice = 2.8;
    } else if (flowerType == "Narcissus") {
        flowerPrice = 3;
    } else if (flowerType == "Gladiolus") {
        flowerPrice = 2.5;
    }

    let totalPrice = flowerPrice * numberOfFlowers;

    if (flowerType == "Roses" && numberOfFlowers > 80) {
        totalPrice = totalPrice * 0.9;
    }
    if (flowerType == "Dahlias" && numberOfFlowers > 90) {
        totalPrice = totalPrice * 0.85;
    }
    if (flowerType == "Tulips" && numberOfFlowers > 80) {
        totalPrice = totalPrice * 0.85;
    }
    if (flowerType == "Narcissus" && numberOfFlowers < 120) {
        totalPrice = totalPrice * 1.15;
    }
    if (flowerType == "Gladiolus" && numberOfFlowers < 80) {
        totalPrice = totalPrice * 1.2;
    }
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}


function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let shipRent = 99999999;

    if (season == "Spring") {
        shipRent = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        shipRent = 4200;
    } else if (season == "Winter") {
        shipRent = 2600;
    }

    if (fisherman <= 6) {
        shipRent = shipRent * 0.9;
    } else if (fisherman >= 7 && fisherman <= 11) {
        shipRent = shipRent * 0.85;
    } else if (fisherman >=12) {
        shipRent = shipRent * 0.75;
    }

    if (fisherman % 2 == 0 && season != "Autumn") {
        shipRent = shipRent * 0.95;
    }

    if (budget >= shipRent) {
        console.log(`Yes! You have ${(budget - shipRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(shipRent - budget).toFixed(2)} leva.`)
    }
}

function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    typeOfRelax = "";
    let moneySpend = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            moneySpend = 0.3 * budget;
        } else {
            moneySpend = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            moneySpend = 0.4 * budget;
        } else {
            moneySpend = 0.8 * budget;
        }
    } else {
        destination = "Europe";
        moneySpend = budget * 0.90;
    }
    if (budget > 1000) {
        typeOfRelax = "Hotel";
    }
    if (season == "summer") {
        if (budget <= 1000) {
            typeOfRelax = "Camp";
        }
    } else {
        typeOfRelax = "Hotel";
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${typeOfRelax} - ${moneySpend.toFixed(2)}`)
}

function operationsBetweenNumbers (input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operator = input[2];

    let result = 0;
    if (operator == "+" ) {
        result = numberOne + numberTwo;
    } else if (operator == "-") {
        result = numberOne - numberTwo;
    } else if (operator == "*") {
        result = numberOne * numberTwo;
    } else if (operator == "/") {
        if (numberTwo === 0) {
            console.log(`Cannot divide ${numberOne} by zero`);
        } else {
            result = numberOne / numberTwo;
        }
    } else if (operator == "%") {
        if (numberTwo === 0) {
            console.log(`Cannot divide ${numberOne} by zero`);
        } else {
            result = numberOne % numberTwo;
        }
    }
    
    let evenOrOdd = "";
    if (result % 2 == 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }
    if (operator == "+" || operator == "-" || operator == "*") {
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`)
    } else if (operator == "/" && numberTwo != 0) {
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`)
    } else if (operator == "%" && numberTwo != 0) {
        console.log(`${numberOne} % ${numberTwo} = ${result}`)
    }
}

function hotelRoom (input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    let studioDiscount = 0;
    let apartmentDiscount = 0;
    
    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
    } else if (month == "June" || month == "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70; 
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (nights > 7 && nights <= 14) {
        if (month == "May" || month == "October") {
            studioDiscount = 0.05;
        }
    } else if (nights > 14) {
        apartmentDiscount = 0.1;
        if (month == "May" || month == "October") {
            studioDiscount = 0.3;
        } else if (month == "June" || month == "September")
            studioDiscount = 0.2;
    }
    let totalPriceApartment = nights * apartmentPrice * (1 - apartmentDiscount);
    let totalPriceStudio = nights * studioPrice * (1 - studioDiscount);
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
}

function examOnTime (input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minuteArrive = Number(input[3]);

    let transferExamHour = hourExam * 60 + minuteExam;
    let transferArriveHour = hourArrive * 60 + minuteArrive;

    if (transferArriveHour > transferExamHour) {
        console.log("Late");
    } else {
        if ((transferExamHour - transferArriveHour) <= 30) {
            console.log("On time");
        } else {
            console.log("Early");
        }
    }
    
    let hours = Math.floor(Math.abs(transferExamHour - transferArriveHour) / 60);
    let minutes = Math.abs(transferExamHour - transferArriveHour) % 60;
    
    if (transferExamHour >= transferArriveHour) {
        if ((transferExamHour - transferArriveHour) <= 59) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else {
        if ((transferArriveHour - transferExamHour) <= 59) {
            console.log(`${minutes} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }
}

function skiTrip (input) {
// "room for one person" – 18.00 лв за нощувк
// "apartment" – 25.00 лв за нощувка
// "president apartment" – 35.00 лв за нощувка
    let dayStay = Number(input[0]);
    let typeOfStay = input[1];
    let mark = input[2];

    let price = 0;
    let discount = 0;

    if (typeOfStay == "room for one person") {
        price = 18;
    } else if (typeOfStay == "apartment") {
        price = 25;
        if (dayStay < 10) {
            discount = 0.3;
        } else if (dayStay >= 10 && dayStay <= 15) {
            discount = 0.35;
        } else {
            discount = 0.5;
        }
    } else if (typeOfStay == "president apartment") {
        price = 35;
        if (dayStay < 10) {
            discount = 0.1;
        } else if (dayStay >= 10 && dayStay <= 15) {
            discount = 0.15;
        } else {
            discount = 0.20;
        }
    }
    let nights = dayStay - 1;
    totalPrice = price * nights * (1 - discount);
    if (mark == "positive") {
        totalPrice = totalPrice + 0.25 * totalPrice;
    } else {
        totalPrice = 0.9 * totalPrice;
    }
    console.log(totalPrice.toFixed(2));
}