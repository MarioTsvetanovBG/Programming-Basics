function dayOfTheWeek(input) {
    let day = Number(input[0]);
    switch (day) {
        case 1: console.log("Monday"); break;  
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }
}

function weekendOrWorkingDay (input) {
    let day = input[0]
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day"); break;
        case "Saturday":
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error"); break;    
    }
}


function animalType (input) {
    // dog -> mammal
    // 2. crocodile, tortoise, snake -> reptile
    // 3. others -> unknown
    let animal = input[0];
    if (animal == "dog") {
        console.log("mammal");
    } else if (animal == "crocodile" || animal == "tortoise" || animal == "snake") {
        console.log("reptile");
    } else {
        console.log("unknown");
    }
}

function personalTitles (input) {
// · "Mr." – мъж (пол 'm') на 16 или повече години
// · "Master" – момче (пол 'm') под 16 години
// · "Ms." – жена (пол 'f') на 16 или повече години
// · "Miss" – момиче (пол 'f') под 16 години 
    let age = Number(input[0]);
    let gender = input[1];
    if (age < 16) {
        if (gender == 'm') {
            console.log ("Master");
        } else {
            console.log ("Miss");
        }
    } else {
        if (gender == 'm') {
            console.log("Mr.");
        } else {
            console.log("Ms.")
        }
    }
}

function smallShop (input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let price = 999999999;
    if (town == "Sofia") {
        if (product == "coffee") {
            price = 0.5;
        } else if (product == "water") {
            price = 0.8;
        } else if (product == "beer") {
            price = 1.2;
        } else if (product == "sweets") {
            price = 1.45;
        } else if (product == "peanuts"){
            price = 1.6;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            price = 0.4;
        } else if (product == "water") {
            price = 0.7;
        } else if (product == "beer") {
            price = 1.15;
        } else if (product == "sweets") {
            price = 1.30;
        } else if (product == "peanuts"){
            price = 1.5;
        }    
    } else if (town == "Varna") {
        if (product == "coffee") {
            price = 0.45;
        } else if (product == "water") {
            price = 0.7;
        } else if (product == "beer") {
            price = 1.1;
        } else if (product == "sweets") {
            price = 1.35;
        } else if (product == "peanuts"){
            price = 1.55;
        }
    }
    let totalPrice = quantity * price;
    console.log(totalPrice);
}
smallShop(["coffee", "Varna", "2"])