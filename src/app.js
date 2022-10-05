
// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Classes

// Project class - stores deatils about the size of a project, its budget, where it is a legacy project

class Project {

    constructor(name, teams, budget, profit, isLegacy, size, custRelScore) {
        //Project name, randomly generated
        this.name = name;
        //array of different teams, not all projects will have the same teams 
        this.teams = teams;
        //budget allocated to project per year
        this.budget = budget;
        //profit generated from project
        this.profit = profit;
        //this will have an impact on complexity (developers less likely to be less comfortable with code not created in house, following standardised structure) 
        this.isLegacy = isLegacy;
        // scope of website, database, structure, features, users
        this.size = size;
        // customer satisfaction, hard to 
        this.custRelScore = custRelScore;
    }
}


// creating an array of 'Owned Projects'

//need to populate the company - will eventually be a .json file, but for now keeping it simple and adding here





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





class Team {
    //effeciency, moral, quality, synergy, knowledge, experience, leadership,
    constructor(project, resources, taskResolution) {
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


// Commenting out all subclasses of teams for time being to save on complexity

// class Development extends Team {
//     //specRealis, codeEff, codeReu
//     constructor(senDevCount, junDevCount, bugCreation) {
//         this.senDevCount = senDevCount;
//         this.junDevCount = junDevCount;
//         /*
//         For these need to make something actually definable in a value way - these are too subjective
//         this.specRealis = specRealis;
//         this.codeEff = codeEff;
//         this.codeReu = codeReu;
//         */
//         this.bugCreation = bugCreation;
//     }
// }

// class Testing extends Team {
//     constructor(codeCoverage) {
//         this.codeCoverage = codeCoverage;

//     }
// }

// class Design extends Team {
//     constructor(userEx, reqReal, designConformity) {
//         this.userEx = userEx;
//         this.reqReal = reqReal;
//         this.designConformity = designConformity;
//     }
// }

// class ProjectManager extends Team {
//     constructor(teamRel, organisation, delegation, planning) {
//         this.teamRel = teamRel;
//         this.organisation = organisation;
//         this.delegation = delegation;
//         this.planning = planning;
//     }
// }

// class ProductOwner extends Team {
//     constructor(custRel, research) {
//         this.custRel = custRel;
//         this.research = research;
//     }
// }

// class Marketing extends Team {
//     constructor(chosenMedia, eventsAttended, companyProfile) {
//         this.chosenMedia = chosenMedia;
//         this.eventsAttended = eventsAttended;
//         this.companyProfile = companyProfile;

//     }
// }

// class Support extends Team {
//     constructor(custSatis, callHand, bugDisc) {
//         this.custSatis = custSatis;
//         this.callHand = callHand;
//         this.bugDisc = bugDisc;
//     }
// }

class Budget {
    constructor(development, support, server, hosting, marketing, software) {
        this.development = development;
        this.support = support;
        this.server = server;
        this.hosting = hosting;
        this.marketing = marketing;
        this.software = software;
    }
}

class SizeOfProject {
    constructor(customers, dataSet, complexity, platforms, softArch) {
        this.customers = customers;
        this.dataSet = dataSet;
        this.complexity = complexity;
        this.platforms = platforms;
        this.softArch = softArch;
    }
}

class SoftwareArchetucture {
    constructor(frontend, backend, serverStru, codeEff, codeReu) {
        this.frontend = frontend;
        this.backend = backend;
        this.serverStru = serverStru;
        this.codeEff = codeEff;
        this.codeReu = codeReu;
    }
}

class CustomerRelationshipScore {
    constructor(productOwnerScore, supportScore, companyProfileScore) {
        this.productOwnerScore = productOwnerScore;
        this.supportScore = supportScore;
        this.companyProfileScore = companyProfileScore;
    }
}


function daily() {


}

// Going to create 40 Emplloyees randomly with dummy data, 16 developers, 4 PO, 5 PM, 3 UX, 6 Testers, 4 Support, 2 Marketing  

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

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

// I've really tried to do too much

let teams = new Array();

for (let i = 0; i < 5; i++) {

    let devs = generateRandomIntegerInRange(1, 6);
    let designers = generateRandomIntegerInRange(1, 2);
    let testers = generateRandomIntegerInRange(1, 5);
    let resources = new Array();

}






// make random funcions for events

// Draft attempt at events

// Big Events:

// Company Requests Services

// //Potential Factors
// 1. Are they looking to create a whole new system? 
// 2. Will this be a legacy based system?

// //if new system
// 1. Allocation of resources
// 2. Deciding on technologies
// 3. Software archeticture
// 4. Research of field
// 5. Risks assesed
// 6. Pricing assesed
// 7. Market Research
// 8. Features discussion

// //if legacy
// 1. Allocation of resources
// 2. New training needed? 
// 3. Risk assesed
// 4. Pricing and potential profits
// 5. Proposed additional features
// 6. Research into pre-existing app
// 7. Potential restructuring/new developments needed

// Lead to Negotiations if company sees if it is viable
// 1. Produce proposal
// 2. Initiate negotiations
// 3. Conduct Negotiations
// 4. Update proposal
// 5. Reassess resources
// 6. Reassess potential pricing
// 7. Reassess potential risk
// 8. Reassess features
// 9. Reassess profits

// Either negotions go through different phases, or are dropped completely

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





//events

let run = document.getElementById('run-simulation');

run.addEventListener("click", () => {
    console.log("run");
});