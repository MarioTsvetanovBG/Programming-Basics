function sumSeconds(input) {
    contenterOne = Number(input[0]);
    contenterTwo = Number(input[1]);
    contenterThree = Number(input[2]);
    sumTime = contenterOne + contenterTwo + contenterThree;
    minutes = Math.floor(sumTime / 60);
    seconds = sumTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["50", "40", "60"]);


function bonusPoints(input) {
    let startingPoints = Number(input[0]);
    let bonusPoints = 0;

    if (startingPoints <= 100) {
        bonusPoints = bonusPoints + 5;
    } else if (startingPoints > 100 && startingPoints <= 1000) {
        bonusPoints = startingPoints * 0.2
    } else if (startingPoints > 1000) {
        bonusPoints = startingPoints * 0.1
    }
    
    totalPoints = startingPoints + bonusPoints;
    let additionalBonusPoints = 0;
    if (startingPoints % 2 == 0) {
        additionalBonusPoints = additionalBonusPoints + 1;
    }
    if (startingPoints % 10 == 5) {
        additionalBonusPoints = additionalBonusPoints + 2;
    }
    console.log(`${bonusPoints + additionalBonusPoints}`);
    console.log(`${totalPoints + additionalBonusPoints}`);
}
bonusPoints(["175"])


function timePlus15Minutes(input) {
    let addHours = Number(input[0]);
    let addMinutes = Number(input[1]);
    let hours = addHours;
    let minutes = addMinutes + 15;
   
    if (minutes > 59) {
        hours = hours + 1;
        minutes = minutes - 60;
    }
    
    if (hours > 23) {
        hours = 0;    
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}


function timePlus15MinutesV2(input) {
    let addHours = Number(input[0]);
    let addMinutes = Number(input[1]);
    let minutesPlus15 = addMinutes + 15;
    let sumMinutes = addHours * 60 + minutesPlus15;
    let realHours = Math.floor(sumMinutes / 60);
    let realMinutes = sumMinutes % 60;
    if (realHours > 23) {
        realHours = realHours % 24;
    } 
    if (realMinutes < 10) {
        console.log(`${realHours}:0${realMinutes}`);
    } else {
        console.log(`${realHours}:${realMinutes}`);
    }
}
timePlus15MinutesV2(["72","15"])

function toyShop(input) {
    // • Пъзел - 2.60 лв.
    // • Говореща кукла - 3 лв.
    // • Плюшено мече - 4.10 лв.
    // • Миньон - 8.20 лв.
    // • Камионче - 2 лв
    let tourPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let dollNumber = Number(input[2]);
    let teddyNumber = Number(input[3]);
    let minionNumber = Number(input[4]);
    let truckNumber = Number(input[5]);
    let totalPrice = puzzleNumber * 2.6 + dollNumber * 3 + teddyNumber * 4.1 
    + minionNumber * 8.2 + truckNumber * 2;
    if ((puzzleNumber + dollNumber + teddyNumber 
        + minionNumber + truckNumber) >= 50) {
            totalPrice = totalPrice * 0.75
    }
    afterRent = totalPrice - 0.1 * totalPrice;
    if (tourPrice <= afterRent) {
        console.log(`Yes! ${(afterRent - tourPrice).toFixed(2)} lv left.`)
    } else { 
        console.log(`Not enough money! ${(tourPrice - afterRent).toFixed(2)} lv needed.`)
    }  
}

function godziVsKong(input) {
    // 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
    // 2. Брой на статистите – цяло число в интервала [1 … 500]
    // 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
    let budgetForMovie = Number(input[0]);
    let numberOfPersonal = Number(input[1]);
    let clothPrice = Number(input[2]);
    
    let decor = 0.1 * budgetForMovie;
    if (numberOfPersonal > 150) {
        clothPrice = clothPrice * 0.9;
    }
    let totalCost = clothPrice * numberOfPersonal + decor;
    if (budgetForMovie < totalCost) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budgetForMovie).toFixed(2)} leva more.`);
    } else {
        console.log("Action!"); 
        console.log(`Wingard starts filming with ${(budgetForMovie - totalCost).toFixed(2)} leva left.`)
    }
}


function worldSwimmingRecord(input) {
    let worldRecordSeconds = Number(input[0]);
    let worldRecordDistance = Number(input[1]);
    let secondsForMeter = Number(input[2]);
    // съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди ==> обща дистанция / 15 м -- за да разберем
    // колко пъти ще се забави за цялото разстояние. После уножаваме по времето 12.5, за да видим колко ще е общото време
    // на забавяне.
    let slowDownInSeconds = Math.floor(worldRecordDistance / 15) * 12.5;
    let personalTime = worldRecordDistance * secondsForMeter + slowDownInSeconds; 
    if (personalTime < worldRecordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${personalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(personalTime - worldRecordSeconds).toFixed(2)} seconds slower.`);
    }
}


function trading(input) {
    // • Видеокарта – 250 лв./бр.
    // • Процесор – 35% от цената на закупените видеокарти/бр.
    // • Рам памет – 10% от цената на закупените видеокарти/бр.
    
    let budgetPetko = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let priceAll = videocards * 250 + 0.35 * (videocards * 250)* processors + 0.1 * (videocards * 250) * ram
    if (videocards > processors) {
        priceAll = priceAll * 0.85
    }
    let diff = (Math.abs(budgetPetko - priceAll)).toFixed(2);
    if (budgetPetko >= priceAll) {
        console.log(`You have ${diff} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    }
}


function lunchBreak(input) {
    // 1. Име на сериал – текст
    // 2. Продължителност на епизод  – цяло число в диапазона [10… 90]
    // 3. Продължителност на почивката  – цяло число в диапазона [10… 120]
    let tvShow = input[0];
    let tvShowTime = Number(input[1]);
    let lunchBreakTime = Number(input[2]);
    // По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде
    //  1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка. 
    let timeLeft = lunchBreakTime - (lunchBreakTime / 8 + lunchBreakTime / 4);
    if (tvShowTime <= timeLeft) {
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(timeLeft - tvShowTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(tvShowTime - timeLeft)} more minutes.`);
    }
}