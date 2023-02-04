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

cinemaTickets (["The Matrix",
"20",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])