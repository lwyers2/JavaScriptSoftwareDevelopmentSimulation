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

    constructor(name, budget, profit, isLegacy) {
        //Project name, randomly generated
        this.name = name;
        //array of different teams, not all projects will have the same teams 
        //this.team = team;
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

customerEnquiry();

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
    // 
    if (projectType == 0) {
        projectName = "Original Project";
        budget = generateRandomIntegerInRange(65000, 90000);
    } else {
        projectName = "Legacy Project";
        budget = generateRandomIntegerInRange(45000, 75000);
    }
    let profit = calculateProfit(budget, 60, 80);
    let project = new PotentialProject(projectName, budget, profit, projectType);
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