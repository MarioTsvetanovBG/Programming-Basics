// 1. Конвертор: USD към BGN
function usdToBgn(input){
    // 1 USD = 1.79549 BGN
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

// 2. Конвертор: от радиани в градуси
function convertorRadians(input){
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees)
}

// 3. Калкулатор депозити
function calculatorDeposit(input) {
    // сума = депозирана сума + срок на депозита 
    // * ((депозирана сума * годишен лихвен процент ) / 12)
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualPercent = Number(input[2]);
    let totalSum = depositSum + depositTime * (depositSum * annualPercent / 100)/12;
    console.log(totalSum)
}

// 4. Задължителна литература
function literature(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysMustRead = Number(input[2]);
    let answer = totalPages / pagesPerHour / daysMustRead;
    console.log(answer)
}

// 5. Учебни материали
// • Пакет химикали - 5.80 лв.
// • Пакет маркери - 7.20 лв.
// • Препарат - 1.20 лв (за литър)
function schoolLogistic(input){
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let fluidLeters = Number(input[2]);
    let discount = Number(input[3]);
    let totalPrice = (penPacks * 5.8) + (markerPacks * 7.2) + (fluidLeters * 1.2);
    let totalDiscount = totalPrice * discount / 100;
    let finalPrice = totalPrice - totalDiscount;
    console.log(finalPrice)
}

// 6. Пребоядисване
// · Предпазен найлон - 1.50 лв. за кв. метър
// · Боя - 14.50 лв. за литър
// · Разредител за боя - 5.00 лв. за литър 
function repaint(input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let totalWorkingTime = Number(input[3]);
    let priceLogistics = ((nailon + 2) * 1.5) + ((paint + (paint / 10))  * 14.5) + (razreditel * 5) + 0.4;
    let priceForWorkers = (priceLogistics * 30 / 100) * totalWorkingTime; 
    let totalPrice = priceForWorkers + priceLogistics;
    console.log(totalPrice);
}

// 7. Доставка на храна
// • Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв. 
function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);
    let priceMenus = (chickenMenus * 10.35) + (fishMenus * 12.4) + (veganMenus * 8.15);
    let desert = priceMenus / 5 + 2.50;
    let totalPrice = priceMenus + desert;
    console.log(totalPrice);
}

// 8. Баскетболно оборудване
// Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
function basketball(input) {
    let costsPerYear = Number(input[0]);
    let shoes = costsPerYear * 60/100;
    let dress = shoes * 80/100;
    let ball = dress / 4;
    let accessoaries = ball / 5;
    let realBill = costsPerYear + shoes + dress + ball + accessoaries;
    console.log(realBill)
}

// 9. Аквариум
function aquarium(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = (lenght * width * height) - percent * (lenght * width * height) / 100;
    console.log(volume / 1000)
}