function helloSoftUni(){
    console.log("Hello SoftUni");
}
helloSoftUni()

function num1To10(){
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
    console.log("6")
    console.log("7")
    console.log("8")
    console.log("9")
    console.log("10")
}
num1To10()

function squareArea(input){
    let a=Number(input[0]);
    let area=a*a;
    console.log(area)
}
squareArea("5")

function inchesToCentimeters(input){
    let inches = Number(input);
    let cm = inches*2.54;
    console.log(cm);
}
inchesToCentimeters("10")

function greetingsPerson(input){
    let name=input;
    console.log(`Hello, ${name}!`)
}
greetingsPerson("Niki")

function concatenateDate(input){
    firstName=input[0];
    lastName=input[1];
    age=Number(input[2]);
    town=input[3];
    let result=(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
    console.log(result)
}
concatenateDate(["Petko","Kirov","95","Kaspi4an"])

function projectsCreation(input){
    architectName=input[0];
    projects=Number(input[1]);
    workingHours=projects*3
    console.log(`The architect ${architectName} will need ${workingHours} hours to complete ${projects} project/s.`)
}
projectsCreation(["Hasan","20"])

function petShop(input){
    dogFoodPrice=Number(2.5);
    catFoodPrice=Number(4);
    dogFood=Number(input[0]);
    catFood=Number(input[1]);
    price=dogFood*dogFoodPrice+catFood*catFoodPrice
    console.log(price);
}
petShop(["10","20"])

function yardGreening(input){
    squareMetersForGreening=Number(input[0]);
    squareMetterPrice=7.61;
    discount=squareMetterPrice*squareMetersForGreening*0.18
    totalPrice=squareMetterPrice*squareMetersForGreening-discount
    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["10"])