// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creation of a potential project until Company decides

//size, custRelScore
class PotentialProject {

    constructor(name, budget, profit, isLegacy, team) {
        //Project name, randomly generated
        this.name = name;
        //array of different teams, not all projects will have the same teams 
        this.team = team;
        //budget allocated to project per year
        this.budget = budget;
        //profit generated from project
        this.profit = profit;
        //this will have an impact on complexity (developers less likely to be less comfortable with code not created in house, following standardised structure) 
        this.isLegacy = isLegacy;
        // // scope of website, database, structure, features, users
        // this.size = size;
        // // customer satisfaction, hard to 
        // this.custRelScore = custRelScore;
    }
}
class Team {
    //effeciency, moral, quality, synergy, knowledge, experience, leadership,
    constructor(project, resources, employees, taskResolution) {
        this.project = project;
        this.resources = resources;
        this.employees = employees;
        /*
        For these need to make something actually definable in a value way - these are too subjective
        this.effeciency = effeciency;
        this.moral = moral;
        this.quality = quality;
        this.synergy = synergy;
        this.knowledge = knowledge;
        this.experience = experience;
        this.leadership = leadership;
        */
        this.taskResolution = taskResolution;
    }
}

class Employee {

    constructor(department, yrsExp, yrsAtFirm, disciplinery, sickPerYear, avgEmplSati, reviewScore) {
        // which department
        this.department = department;
        //yrs exp for overall knowledge of field
        this.yrsExp = yrsExp;
        //experience for projects at company
        this.yrsAtFirm = yrsAtFirm;
        // higher rate may contribute to lower moral
        this.disciplinery = disciplinery;
        //contribute to lower moral
        this.sickPerYear = sickPerYear;
        // this would be like those 'anonymous' employee satisfaction things you have to fill in /10
        this.avgEmplSati = avgEmplSati;
        // 6month-1 year employer review of employee /10
        this.reviewScore = reviewScore;
    }
}
// create company structure
let companyEmployees = createEmployees();
// create 4 projects
let project1 = customerEnquiry();
let project2 = customerEnquiry();
let project3 = customerEnquiry();
let project4 = customerEnquiry();
//build teams 
let team = createTeam(companyEmployees);

console.log(team);




// customer enquiry will continually make a new project/renogotaite a project until the company decides on one 
function customerEnquiry() {
    console.log("A new customer has enquired about your services ...");
    console.log("The details of their enquiry are below: ")
    //company decision set to false
    let decision = false;
    //creating a new project
    let potProject = createProject();
    //check if the project is worthwhile. If its not create a new project
    profitChecker(potProject.profit) == true ? potProject = reNegotiate(potProject) : potProject = createProject();
    decision = companyDecision;
    // renogotations until company decides
    while (decision != true) {
        profitChecker(potProject.profit) == true ? potProject = reNegotiate(potProject) : potProject = createProject();
        console.log(potProject);
        decision = companyDecision();
    }
    // return project after renogtations
    return potProject;

}


function createProject() {
    //generate wither true or false
    let projectType = generateRandomIntegerInRange(0, 1);
    // simple project name, original or legacy. will change at somepoint
    let projectName;
    let budget;
    let placeholderTeam = new Team();
    // 
    if (projectType == 0) {
        projectName = "Original Project";
        budget = generateRandomIntegerInRange(65000, 90000);
    } else {
        projectName = "Legacy Project";
        budget = generateRandomIntegerInRange(45000, 75000);
    }
    let profit = calculateProfit(budget, 60, 80);
    let project = new PotentialProject(projectName, budget, profit, projectType, placeholderTeam);
    return project;
}

function calculateProfit(budget, min, max) {
    let proPer = generateRandomInteger(min, max);
    let profit = budget + (budget * (proPer / 100));
    profit = parseInt(profit);
    return profit - budget;
}

function haltNegotiations() {
    console.log("The profit potential for this customer is to low...");

}

function reNegotiate(project) {
    //generate a random percentage between -15, +15
    let change = generateRandomInteger(-15, 15);
    project.budget = project.budget + (project.budget * (change / 100));
    project.budget = parseInt(project.budget);
    project.profit = calculateProfit(project.budget, 70, 90);
    return project;

}

function profitChecker(profit) {
    if (profit > 10000) {
        return true;
    } else {
        return false;
    }
}

function companyDecision() {
    let decision = generateRandomIntegerInRange(0, 1);
    console.log("Company decision: " + decision);
    return decision;
}

function createEmployees() {

    let employees = new Array();

    // devs

    for (let i = 0; i < 16; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }

        let dev = new Employee('Development', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }

    // PO
    for (let i = 0; i < 4; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }
        yrsExp += 5;

        let dev = new Employee('Project Owner', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }


    //PM
    for (let i = 0; i < 5; i++) {


        let yrsExp = generateRandomInteger(20);
        let yrsAtFirm = generateRandomInteger(20);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }
        yrsExp += 5;

        let dev = new Employee('Project Manager', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }



    //Design
    for (let i = 0; i < 3; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }


        let dev = new Employee('Design', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }



    //PM
    for (let i = 0; i < 4; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }
        yrsExp += 5;

        let dev = new Employee('Testing', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }

    //Support
    for (let i = 0; i < 5; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }


        let dev = new Employee('Support', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }


    //Marketing
    for (let i = 0; i < 2; i++) {

        let yrsExp = generateRandomInteger(15);
        let yrsAtFirm = generateRandomInteger(15);

        if (yrsAtFirm > yrsExp) {
            yrsAtFirm = yrsExp;
        }

        if (yrsAtFirm == 0) {
            yrsAtFirm = 1;
        }

        if (yrsExp == 0) {
            yrsExp = 1;
        }
        yrsExp += 5;

        let dev = new Employee('Marketing', yrsExp, yrsAtFirm, generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15), generateRandomInteger(15));

        employees.push(dev);
    }

    return employees;

}

function createTeam(employees) {

    let devAm = generateRandomIntegerInRange(1, (getEmployeeCount('Development', employees) / 2));
    let designersAm = generateRandomIntegerInRange(1, getEmployeeCount('Design', employees));
    let testersAm = generateRandomIntegerInRange(1, getEmployeeCount('Testing', employees));

    let devs = getTeamMembers('Development', employees, devAm);
    let designers = getTeamMembers('Design', employees, designersAm);
    let testers = getTeamMembers('Testing', employees, testersAm);
    let support = getTeamMembers('Support', employees, 5);
    let marketing = getTeamMembers('Marketing', employees, 2);
    let pm = getTeamMembers('Project Manager', employees, 1);
    let po = getTeamMembers('Project Owner', employees, 1);


    let newTeam = new Array();

    newTeam.push(devs);
    newTeam.push(designers);
    newTeam.push(testers);
    newTeam.push(support);
    newTeam.push(marketing);
    newTeam.push(pm);
    newTeam.push(po);



    //devs


    return newTeam;
}


function getTeamMembers(type, employees, amount) {
    let positions = getEmployeeArray(type, employees);
    let count = 0;
    let teamEmployees = new Array();
    while (count < amount) {
        let employeeNum = generateRandomIntegerInRange(positions[0], positions[positions.length - 1]);
        if (inTeam(employees[employeeNum], teamEmployees) == false) {

            teamEmployees.push(employees[employeeNum]);
            count++;
        }

    }
    return teamEmployees;
}




function inTeam(nEmployee, employees) {

    for (let employee of employees) {
        if (JSON.stringify(nEmployee) == JSON.stringify(employee)) {
            return true;
        }
    }

    return false;
}

function getEmployeeArray(type, employees) {
    let positions = new Array();
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department == type) {
            positions.push(i);
        }
    }
    return positions;
}

function getEmployeeCount(type, employees) {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department == type) {
            count++;
        }

    }
    return count;

}

// If company decideds to go through with project

// Allocation of resources
// 1. Development team assigned
// 2. Testing Team assigned
// 3. Product Owner Assigned
// 4. Project manager assigned
// 5. UX/UI Team assigned
// 6. Marketing consulted

// Development plan
// 1. Key milestones decided
// 2. Budget
// 3. Feature Development
// 4. Customer Feedback schedule
// 5. Prototype timeline
// 6. Methodology
// 7. Software consideration
// 8. Hardware Considerations
// 9. Hosting
// 10. Feature criticality

// Development Processes
// 1. Daily standup - work assesed
// 2. Ticket Creation
// 3. Ticket Completion
// 4. QA Testing tickets
// 5. Bug discovery

// Sprint Initiated

// Sprint Finished

// Further Testing

// Feature Creation

// Feature sent to Client
// 1. Client feedback
// 2. Bug discovery
// 3. Feature Reassesment

// Ongoing Client Relationships With Project Owner

// 1. Client feedback
// 2. Deliverables

// Prototype developed

// Further Testing

// Product Complete

// //Preexisting Contracts

// Client Relations
// 1. Bugs encountered
// 2. Customer Service
// 3. Support Team proficiency
// 4. Stability of products
// 5. Additional features needed
// 6. Continuing Development