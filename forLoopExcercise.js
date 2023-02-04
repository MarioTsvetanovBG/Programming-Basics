function numbersEndingIn7() {
    for (i = 1; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
numbersEndingIn7()

function oneTo10MultipleTable(input) {
    let newNumber = Number(input[0]);
    for (let i = 1; i < 11; i++) {
       let result = newNumber * i;
       console.log(`${i} * ${newNumber} = ${result}`);
    }
}

function histogram(input) {
    let numberCount = Number(input[0]);
    let tab1 = 0;
    let tab2 = 0;
    let tab3 = 0;
    let tab4 = 0;
    let tab5 = 0;
    for (i = 0; i < numberCount; i++) {
        let numberInput = Number(input[i + 1]);
        if (numberInput < 200) {
            tab1++;
        } else if (numberInput >= 200 && numberInput <= 399) {
            tab2++;
        } else if (numberInput >= 400 && numberInput <= 599) {
            tab3++;
        } else if (numberInput >= 600 && numberInput <= 799) {
            tab4++;
        } else {
            tab5++;
        }
    }
    console.log((tab1 / numberCount * 100).toFixed(2) + "%")
    console.log((tab2 / numberCount * 100).toFixed(2) + "%")
    console.log((tab3 / numberCount * 100).toFixed(2) + "%")
    console.log((tab4 / numberCount * 100).toFixed(2) + "%")
    console.log((tab5 / numberCount * 100).toFixed(2) + "%")
}

function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyNumber = 0;
    let money = 10;
    let sumMoney = 0;
    let stealer = 0;
    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 !== 0) {
            toyNumber++;
        } else {
            sumMoney = sumMoney + money; //1- 10; 2- (10+20)30; 3- 30+30=60.....
            money = money + 10;  //1- 20; 2- 30
            stealer++;
        }
    }
    let totalMoney = (sumMoney - stealer) + (toyNumber * toyPrice);
    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`)
    }
}

function bossIsAss(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let salaryAfterTickets = salary;
    for (let i = 0; i < tabs; i++) {
        let newTab = input[i + 2]; 
        if (salaryAfterTickets > 0) {
            if (newTab == "Facebook") {
                salaryAfterTickets = salaryAfterTickets - 150;
            } else if (newTab == "Instagram") {
                salaryAfterTickets = salaryAfterTickets - 100;
            } else if (newTab == "Reddit") {
                salaryAfterTickets = salaryAfterTickets - 50;
            }
        } else {
            break;
        }
    }
    if (salaryAfterTickets > 0) {
        console.log(Math.round(salaryAfterTickets))
    } else {
        console.log('You have lost your salary.')
    }
}

function oscars(input) {
    let name = input[0];
    let startingPoints = Number(input[1]);
    let actorsNumber = Number(input[2]);
    let totalPoints = startingPoints;

    for (i = 0; i < actorsNumber * 2; i = i + 2) {
        let actorName = input[i + 3];
        let actorVote = Number(input[i + 4]);
        let actorPoints = (Number(actorName.length) * actorVote) / 2;
        totalPoints = totalPoints + actorPoints;
        
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }
    if (totalPoints <= 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
}


function trekingMania(input) {
    let groupsCount = Number(input[0]);
    let sumOfPeople = 0;
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let groupFour = 0;
    let groupFive = 0;
    for (let i = 1; i <= groupsCount; i++) {
        let peopleInTheGroup = Number(input[i]);
        sumOfPeople = sumOfPeople + peopleInTheGroup;
        if (peopleInTheGroup <= 5) {
            groupOne = groupOne + peopleInTheGroup;
        } else if (peopleInTheGroup >= 6 && peopleInTheGroup <= 12) {
            groupTwo = groupTwo + peopleInTheGroup;
        } else if (peopleInTheGroup >= 13 && peopleInTheGroup <= 25) {
            groupThree = groupThree + peopleInTheGroup;
        } else if (peopleInTheGroup >= 26 && peopleInTheGroup <= 40) {
            groupFour = groupFour + peopleInTheGroup;
        } else if (peopleInTheGroup > 40) {
            groupFive = groupFive + peopleInTheGroup;
        }
    }
    console.log((groupOne / sumOfPeople * 100).toFixed(2)+"%");
    console.log((groupTwo / sumOfPeople * 100).toFixed(2)+"%");
    console.log((groupThree / sumOfPeople * 100).toFixed(2)+"%");
    console.log((groupFour / sumOfPeople * 100).toFixed(2)+"%");
    console.log((groupFive / sumOfPeople * 100).toFixed(2)+"%");
}   


function tenisRanklist(input) {
// § W - ако е победител получава 2000 точки
// § F - ако е финалист получава 1200 точки
// § SF - ако е полуфиналист получава 720 точки
    
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let w = 0;
    let f = 0;
    let sf = 0;
    let totalPoints = startingPoints;
    for (let i = 0; i < tournamentCount; i++) {
        let tournamentTitle = input[i + 2];
        if (tournamentTitle == "W") {
            w = w + 1;
            totalPoints = totalPoints + 2000;
        } else if (tournamentTitle == "F") {
            f = f + 1;
            totalPoints = totalPoints + 1200;
        } else if (tournamentTitle == "SF") {
            sf = sf + 1;
            totalPoints = totalPoints + 720;
        }
    }
    let numberOfTournaments = w + f + sf;
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor((totalPoints - startingPoints)/ numberOfTournaments)}`)
    console.log(`${(w / numberOfTournaments * 100).toFixed(2)}%`)       
}