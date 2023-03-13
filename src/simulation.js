// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// each team member is assigned to a group
////each ongoing project will have some form of ongoing tivkets
//these will have priority
//member should have certain amount of time per project per week

//go through each project and create 10-15 tickets

createOngoingProjectTickets();

console.log(simulation['Project Team']);

updateOngoingWorkHoursForSprint(true);
console.log(simulation['Project Team']);
assignOngoingProjectTicket();
setOngoingWorkHourAvailability(30);
console.log(simulation['Project Team']);
assignAllOngoingProjectTickets();



function createOngoingProjectTickets() {

    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {

        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {

            let size = simulation['Projects'][project]['size'];
            let hours = simulation['Projects'][project]['developmentContract']['hoursPerYear'];
            let amount = generateOngoingProjectTicketsAmount(size, hours);

            simulation['Projects'][project]['tickets'] = {}

            for (let i = 0; i < amount; i++) {
                simulation['Projects'][project]['tickets']['ticket' + (i + 1)] = {
                    'assignedDeveloper': '',
                    'proposedWorkInHours': generateRandomIntegerInRange(1, 5),
                    'isCompelete': false,
                    'actualWorkHours': 0,
                    'priority': generateRandomIntegerInRange(1, 3),
                    'isAssigned': false
                }
            }
        }
    })
}

function generateOngoingProjectTicketsAmount(size, hours) {

    let amount = 0;
    if (size === 'small') {
        amount = 5
    } else if (size === 'medium') {
        amount = 7
    } else if (size === 'large') {
        amount = 12
    }

    if (hours >= 25) {
        amount += 1
    } else if (hours >= 35) {
        amount += 2
    } else if (hours >= 45) {
        amount += 3
    } else if (hours >= 55) {
        amount += 4
    }

    return amount;

}

function updateOngoingWorkHoursForSprint(inSprint) {
    let members = Object.keys(simulation['Projects']['Proposed Project']['team']);
    if (inSprint) {
        changeOngoingWorkHoursAvailability(10, members);
    } else {
        changeOngoingWorkHoursAvailability(30, members);
    }
}



function changeOngoingWorkHoursAvailability(hours, members) {
    let teams = Object.keys(simulation['Project Team']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Project Team'][team]);
        employees.forEach((employee) => {
            members.forEach((member) => {
                if (member === employee) {
                    simulation['Project Team'][team][member]['ongoingWorkHours'] = hours;
                }
            })
        });
    })
}

function setOngoingWorkHourAvailability(hours) {
    let teams = Object.keys(simulation['Project Team']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Project Team'][team]);
        changeOngoingWorkHoursAvailability(hours, employees);
    });
}
//this is what I need to work on 
function assignAllOngoingProjectTickets() {

    let groups = Object.keys(simulation['Project Groups']);
    groups.forEach((group) => {
        let projects = Object.keys(simulation['Project Groups'][group]['Projects']);
        let members = Object.keys(simulation['Project Groups'][group]['Members']);
        let tickets = objects.keys(simulation['Project Groups'][group][['tickets']])




    });
}

function assignOngoingProjectTicket(project, member, ticket) {

}