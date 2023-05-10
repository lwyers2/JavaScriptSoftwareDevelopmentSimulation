
// each team member is assigned to a group
////each ongoing project will have some form of ongoing tivkets
//these will have priority
//member should have certain amount of time per project per week

//go through each project and create 10-15 tickets
createOngoingProjectTickets();

setAllAssignedWorkHours(0);

//every 3 months
//employeePerformanceReview

//employeeSatisfactionReview every 6 months

//revieweNPS (when falls behind certain level - wage increase)?

//need likelyhood to move job once it hits a certain


updateOngoingWorkHoursForSprint(true);


setOngoingWorkHourAvailability(30);

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

function setAllAssignedWorkHours(hours) {
    let teams = Object.keys(simulation['Project Team']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Project Team'][team]);
        employees.forEach((employee) => {
            setAssignedWorkHours(employee, team, hours)

        })
    });
}



function setAssignedWorkHours(employee, team, hours) {
    simulation['Project Team'][team][employee]['assignedWorkHours'] = hours;
}

//just have it that all tickets are assigned from top to bottom, so probably should create a better way
function assignAllOngoingProjectTickets() {

    let groups = Object.keys(simulation['Project Groups']);
    groups.forEach((group) => {
        let projects = Object.keys(simulation['Project Groups'][group]['Projects']);
        // let members = Object.keys(simulation['Project Groups'][group]['Members']);

        projects.forEach((project) => {
            if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
                let tickets = Object.keys(simulation['Projects'][project]['tickets'])
                tickets.forEach((ticket) => {
                    let members = Object.keys(simulation['Project Groups'][group]['Members'])
                    members.forEach((member) => {
                        let teams = Object.keys(simulation['Project Team']);
                        teams.forEach((team) => {
                            let employees = Object.keys(simulation['Project Team'][team]);
                            employees.forEach((employee) => {
                                if (team === 'Development Team') {

                                    let isAssigned = simulation['Projects'][project]['tickets'][ticket]['isAssigned'];
                                    let employeeWorkHours = simulation['Project Team'][team][employee]['ongoingWorkHours'];
                                    let assignedWorkHours = simulation['Project Team'][team][employee]['assignedWorkHours'];
                                    let ticketHours = simulation['Projects'][project]['tickets'][ticket]['proposedWorkInHours'];

                                    if (!isAssigned) {
                                        if (employee == member) {
                                            //console.log(`Employee: ${employee} EmployeeWorkHours: ${employeeWorkHours} AssignedWorkHours: ${assignedWorkHours} Ticket: ${ticket}`)
                                            if ((assignedWorkHours + ticketHours) < employeeWorkHours) {
                                                assignOngoingProjectTicket(project, member, team, ticket, ticketHours);
                                            }
                                        }
                                    }
                                }



                            });
                        });

                    })
                })
            }

        })



    });
}

function assignOngoingProjectTicket(project, member, team, ticket, ticketHours) {

    console.log(`Assigning ${member} to ${ticket} for ${project}`)
    simulation['Projects'][project]['tickets'][ticket]['assignedMember'] = member;
    simulation['Projects'][project]['tickets'][ticket]['isAssigned'] = true;
    simulation['Project Team'][team][member]['assignedWorkHours'] += ticketHours;

}

