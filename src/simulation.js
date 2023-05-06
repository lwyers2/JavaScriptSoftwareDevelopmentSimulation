// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/*
returns percentage off
*/
function getPercentOfTotal(percentage, total, type) {

    percentage /= 100;

    total = (percentage * total);

    if (type === "int") {
        total = parseInt(total);
    } else if (type === "float") {
        total = parseFloat(total.toFixed(2));
    }
    return total;
}



const EFFECIENCY_DEDUCTION = .1;
const EXPIRENCE_MULTIPLYER = 20;
const QUALITY_DEDUCTION = .3;

let state = new Array();


const secInMs = 1000;
const minInMs = secInMs * 60;
const hourInMs = minInMs * 60;
const dayInMs = hourInMs * 24;
const weekInMs = dayInMs * 7;
const yearInMs = dayInMs * 365;



// Event functions

/*
This function is a very simple information gathering. No need to add price, team members or anything like that. Bare bones of what a company is looking for. 
This is early days in lifecycle.
(Size and Type taken from here for reference https://www.spheregen.com/cost-of-software-development/)
company : contains company name
title: name of the project
companyIndustry: the industry that the company operates in - this will be pertenent in costs. Say if it was medical, would add complexicity to software therefore added costs
architecture: how the product is going to be made up, will this be web app, swift, android
type: New Software Development,Software Modification, Software integration, Web Development  (new, modification, integration, webDev)
size: Small, Medium, Large, Enterprise
productDetails: just a made up description of what the product entails
May add existingArchitecture
*/

function customerContactsCompany() {

    //console.log("A new company has proposed a new project");
    addDays(1);

}


/*
I want to create a way in which the compony will propose an architecture for a proposed project.
So If its a small project with only integration, this will sort of be decied already, but if this is a completely new piece of software there needs to be some way to decide upon this.
Check to see what type of project it is, then determine
needs to look at current employees and their level of fimiliarity  
*/
function architectureDetermination() {

    //this will become more complex as I build more. Want to eventually get to a point where there is a general stack that the company will use, then use some form 
    //of algorithm to determine which type of stack works best. 
    //A company may wish to only have a software modification, or some form of integration so the stack will be determined already
    //Also each developer will have a certain amount of knowledge/experience with certain technologies. this will effect how quickly/effeciently work will be completed
    //Putting in hosting too. This will be used for pricing
    //console.log("Determining most suitable tech stack .... ");
    //console.log("As the company needs a  " + simulation['Projects']['Proposed Project'].size + " sized project and it is a " + simulation['Projects']['Proposed Project']['type'] + " project, the most suitable stack is as follows: ");
    let stack = Object.keys(simulation['Projects']['Proposed Project'].techstack);
    stack.forEach((component) => {
        //console.log(`${component}: ${simulation['Projects']['Proposed Project']['techstack'][component]}`);
    });
    addDays(3);
}

/*
Replicates the company conducting market research to see if the project is worthwhile persuing. 
This will create a mini budget for potential costs that the project may incur.
What I'm looking for here is a cost primarily of each of the components, this will have to factor in employees, server costs, software costs.   
How to simulate an anlysis of real world to prove whether this would be profitable?
Can also decide whether a project is viable depenednent on internal resources and what the company uses. Say for example, if we have 5 developers, but not one has experience of c+ then the costs/timeline will be effected by this.
*/
function feasibilityStudy() {
    calculateInitialCost();
    addDays(4);
}


/*
There will be a going rate for each type of development project. Each of these types will have a different size modifier.
 
*/

/*
calculate new will have additional costs. Could only be developing a new large system with no app for example, could be web based only with a db.
standard costs will be eventually stored in json file like projects and empoloyees above
*/
function calculateInitialCost() {

    if (simulation['Projects']['Proposed Project']['type'] == 'new') {

        let newComps = Object.keys(simulation['Projects']['Proposed Project']['new']);
        newComps.forEach((component) => {
            if (component == 'web') {
                simulation['Component Costs']['web'] = simulation['Pricing']['new']['web'][simulation['Projects']['Proposed Project']['new'][component]];

            }
            if (component == 'database') {
                simulation['Component Costs']['database'] = simulation['Pricing']['new']['database'][simulation['Projects']['Proposed Project']['new'][component]]

            }
            if (component == 'server') {
                simulation['Component Costs']['server'] = simulation['Pricing']['new']['web'][simulation['Projects']['Proposed Project']['new'][component]];

            }
            if (component == 'app') {
                simulation['Component Costs']['app'] = simulation['Pricing']['new']['database'][simulation['Projects']['Proposed Project']['new'][component]]

            }

        });

    } else if (simulation['Projects']['Proposed Project']['type'] == 'modification') {
        let modComps = Object.keys(simulation['Projects']['Proposed Project']['modification']);
        modComps.forEach((component) => {
            if (component == 'web') {
                simulation['Component Costs']['web'] = simulation['Pricing']['modification']['web'][simulation['Projects']['Proposed Project']['modification'][component]];

            }
            if (component == 'database') {
                simulation['Component Costs']['database'] = simulation['Pricing']['modification']['app'][simulation['Projects']['Proposed Project']['modification'][component]]

            }
            if (component == 'server') {
                simulation['Component Costs']['server'] = simulation['Pricing']['modification']['server'][simulation['Projects']['Proposed Project']['modification'][component]];

            }
            if (component == 'app') {
                simulation['Component Costs']['app'] = simulation['Pricing']['modification']['database'][simulation['Projects']['Proposed Project']['modification'][component]]

            }

        });
    } else if (simulation['Projects']['Proposed Project']['type'] == 'web development') {
        simulation['Component Costs']['web'] = simulation['Pricing']['webDev'][simulation['Projects']['Proposed Project']['webDev']['web']];


    } else if (simulation['Projects']['Proposed Project']['type'] == 'integration') {
        let intComps = Object.keys(simulation['Projects']['Proposed Project']['integration']);
        intComps.forEach((component) => {
            if (component == 'app') {
                simulation['Component Costs']['app'] = simulation['Pricing']['integration']['web'][simulation['Projects']['Proposed Project']['integration']];

            }
            if (component == 'database') {
                simulation['Component Costs']['database'] = simulation['Pricing']['integration']['database'][simulation['Projects']['Proposed Project']['integration']]

            }
            if (component == 'server') {
                simulation['Component Costs']['server'] = simulation['Pricing']['integration']['app'][simulation['Projects']['Proposed Project']['integration']];

            }
            if (component == 'web') {
                simulation['Component Costs']['web'] = simulation['Pricing']['integration']['server'][simulation['Projects']['Proposed Project']['integration']]

            }
            if (component == 'software') {
                simulation['Component Costs']['software'] = simulation['Pricing']['integration']['software'][simulation['Projects']['Proposed Project']['integration']]
            }
        });
    }
}






function createDraftContact() {


    /*
     https://flinthillsgroup.com/software-development-contract-8-things/
    CostStructure, Language, PrivacyPolicy, ToolsAndProcesses, SuccessMetrics, DocumentationAndIntellectualPropertyOwnership, PricingAndBilling, Warranties
    https://relevant.software/blog/custom-software-development-contract-key-things-to-include/
    ServicesToBeProvided, ProjectTimeAndCost, AcceptanceTesting, IntellectualPropertyRights, Confidentiality
    https://impressit.io/blog/software-development-contract
    Liabilities, IntellectualRightsAndLicensing, ScopeOfTheProject, SoftwareAndIntegration, Non-DisclosureClause, TimelinesBudgetAndProcesses, AcceptanceTestingAndDelivery, ContractVariationAndChanges, SupportServices, ForceMajeur
 */
    simulation['Contract']['rawComponentCosts'] = getProjectCostRaw();
    simulation['Contract']['developmentCost'] = generateRandomIntegerInRange(450000, 650000);

    //console.log("The proposed contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        //console.log(component + ": " + simulation['Contract'][component])

    });
    addDays(2);


}

function negotiations() {

    //negotiations will cahnge the state of costs and created a draft contract
    //business approval will approve the changes then produce the real contract
    //some form of logic needed here to simulate the change of the proposed project changing to produce a contract
    // random percentage to either increment or decrement profit

    //will create proper randomiser for the below then update costs etc.

    //generate a random percentage for change -10 to +10
    simulation['Contract']['rawComponentCosts'] += parseInt(((generateRandomIntegerInRange(-10, 10) / 100) * simulation['Contract']['rawComponentCosts']));
    simulation['Contract']['legalCosts'] += parseInt(((generateRandomIntegerInRange(-10, 10) / 100) * simulation['Contract']['legalCosts']));
    simulation['Contract']['timeline'] += generateRandomIntegerInRange(-3, +3);
    simulation['Contract']['developmentCost'] += parseInt(((generateRandomIntegerInRange(-10, 10) / 100) * simulation['Contract']['developmentCost']));
    // simulation['Contract']['continuedSupport'] += generateRandomIntegerInRange(-3, +3);
    //console.log("After the negotiations the contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        //console.log(component + ": " + simulation['Contract'][component])

    });

    setAdditionalCost('legal Costs', simulation['Contract']['legalCosts']);
    setAdditionalCost('CheckTestCost', 45);
    addDays(2);
}


function getProjectCostRaw() {
    let total = 0;
    let rawCosts = Object.keys(simulation['Component Costs']);
    rawCosts.forEach((cost) => {
        total += simulation['Component Costs'][cost];
    });


    return total;

}

function getAdHocCosts() {
    let total = 0;
    let costs = Object.keys(simulation['Ad Hoc Costs']);
    //console.log("***********************************");
    //console.log("AD HOC COSTS");
    costs.forEach((cost) => {
        //console.log(`${cost}: ${simulation['Ad Hoc Costs'][cost]}`)
        total += simulation['Ad Hoc Costs'][cost];
    });
    //console.log(`Total: £${total}`);
    //console.log("***********************************");

    return total;

}

function calculateSalaries() {
    let total = 0;
    let teams = Object.keys(simulation['Employees']);
    //console.log("***********************************");
    //console.log("Salaries");
    teams.forEach((team) => {
        let costs = Object.keys(simulation['Employees'][team]);
        costs.forEach((cost) => {
            ////console.log(`${cost}: ${simulation['Employees'][team][cost]['salary']}`)
            total += simulation['Employees'][team][cost]['salary'];
        });

    });
    //console.log(`Total: £${total}`);
    //console.log("***********************************");
    return total;
}


function calculateMonthlyCosts() {

    let adCosts = 0;

    let costs = Object.keys(simulation['Additional Costs']['Costs']);
    //console.log("***********************************");
    //console.log("Additional Costs");
    costs.forEach((cost) => {
        //console.log(`${cost}: ${simulation['Additional Costs']['Costs'][cost]}`)
        adCosts += simulation['Additional Costs']['Costs'][cost];
    });
    //console.log(`Total: £${adCosts}`);
    //console.log("***********************************");

    let adhoc = getAdHocCosts();
    let sal = calculateSalaries();

    let totalCosts = adCosts + adhoc + sal;

    //Scrub additionalCosts
    simulation['Additional Costs']['Costs'] = {
        'na': 0
    }

    //console.log(`Total Monthly Costs: £${totalCosts}`)
    return totalCosts;


}

function deductCosts(cost) {

    //console.log(`Deducting £${cost} from Account Balance £${simulation['Company Account']['companyAccount']}`);
    simulation['Company Account']['companyAccount'] -= cost;
    //console.log(`Updated Account: £${simulation['Company Account']['companyAccount']}`)

}
/* 
Going to create some form of logic on whether the business will approval a proposal or not. For now we assume that the business does.
*/
function projectBusinessApproval() {


    //console.log(`After deliberations, the business has approved the contract with ${simulation['Projects']['Proposed Project']['company']}`)
    //console.log(`Company has agreed to pay a ${simulation['Contract']['depositPercent']}% deposit: £${getDepositAmount()}`);
    //console.log(`Company Account balance before deposit: £${simulation['Company Account']['companyAccount']}`)
    simulation['Company Account']['companyAccount'] += getDepositAmount();
    //console.log(`Company Account balance after deposit: £${simulation['Company Account']['companyAccount']}`)
    addDays(2);
}

function monthlyInstallmentPay() {
    //console.log(`The company has agreed to pay £${getInstallmentAmount()} for ${simulation['Contract']['timeline']} months every ${simulation['Contract']['paymentPerMonth']} month/s`);
    //console.log(`Company Account balance before installment payment: £${simulation['Company Account']['companyAccount']}`);
    simulation['Company Account']['companyAccount'] += getInstallmentAmount();
    //console.log(`Company Account balance after installment payment: £${simulation['Company Account']['companyAccount']}`);

}

function getDepositAmount() {

    return parseInt(simulation['Contract']['rawProjectCost'] * (simulation['Contract']['depositPercent'] / 100))

}

function getInstallmentAmount() {

    let total = 0;
    total += parseInt((simulation['Contract']['rawProjectCost'] - getDepositAmount()) / simulation['Contract']['timeline']);
    total += parseInt((simulation['Contract']['developmentCost'] / simulation['Contract']['timeline']));
    return total



}

//who will be involved
//why are you completing the project (success factors)
//What will the project be expected to deliver
///When is the project required to be delivered and what milestones
//How will the project be delivered? i.e What type of approach will be used and what technologies and tools to be used.
/**
 * will have to compare what the project is using in terms of technology/size to determine how many resources are needed
 * 
 */
function projectPlan() {
    let team = calculateTeamResources();


    simulation['Project Plan']['team'] = team;
    simulation['Projects']['Proposed Project']['team'] = team;
    simulation['Project Plan']['timeline'] = simulation['Projects']['Proposed Project']['proposedTimeline'];
    //console.log(simulation['Project Plan']);
    addDays(2);

}

/**
 * need to get this from the size of the project, and what technologies are used
 * might want to create a calsulation instead to determine how many instead of hard code DISCUSS
 */
function calculateTeamResources() {

    let type = simulation['Projects']['Proposed Project']['type'];
    //console.log(type);
    let size = simulation['Projects']['Proposed Project']['size'];
    //console.log(size);
    let junDevs = 0;
    let intDevs = 0;
    let senDevs = 0;
    let design = 0;
    let test = 0;
    //integration
    //small
    if (type == 'integration' || type == 'modificatoion') {
        if (size == 'small') {

            junDevs = 1;
            senDevs = 1;
            design = 1;
            test = 1;
        } else if (size == 'medium') {
            junDevs = 2;
            intDevs = 1;
            senDevs = 1;
            design = 1;
            test = 2;
        }
        else if (size == 'large') {
            junDevs = 3;
            intDevs = 2;
            senDevs = 1;
            design = 2;
            test = 3;
        }

        if (size == 'enterprise') {
            junDevs = 4;
            intDevs = 3;
            senDevs = 2;
            design = 2;
            test = 3;
        }
    }
    else if (type == 'new') {
        if (size == 'small') {
            junDevs = 2;
            intDevs = 1;
            senDevs = 1;
            design = 1;
            test = 1;
        } else if (size == 'medium') {
            junDevs = 3;
            intDevs = 2;
            senDevs = 1;
            design = 1;
            test = 2;
        }
        else if (size == 'large') {
            junDevs = 5;
            intDevs = 2;
            senDevs = 2;
            design = 2;
            test = 3;
        }

        if (size == 'enterprise') {
            junDevs = 5;
            intDevs = 3;
            senDevs = 3;
            design = 3;
            test = 3;
        }
    }
    else if (type == 'web development') {
        if (size == 'small') {
            junDevs = 2;
            senDevs = 1;
            design = 1;
            test = 1;
        } else if (size == 'medium') {
            junDevs = 2;
            intDevs = 2;
            senDevs = 1;
            design = 1;
            test = 2;
        }
        else if (size == 'large') {
            junDevs = 4;
            intDevs = 2;
            senDevs = 2;
            design = 2;
            test = 3;
        }

        if (size == 'enterprise') {
            junDevs = 5;
            intDevs = 3;
            senDevs = 3;
            design = 3;
            test = 3;
        }


    }

    //console.log(`Based on the size and scope of the project we suggest that there should be ${junDevs} junior developers, ${intDevs} intermediate developers, ${senDevs} senior develpers, ${design} designers, and ${test} testers`);
    simulation['Team Make-Up'] = {
        'Junior Developers': junDevs,
        'Intermediate Developers': intDevs,
        'Senior Developers': senDevs,
        'Designers': design,
        'Testers': test,
        'Total': junDevs + intDevs + senDevs + design + test

    }
    return allocateResources(junDevs, intDevs, senDevs, design, test);


}

/**
 * search through developer's languages and check who fits also need to check their capacity
 */
function allocateResources(junDevsCount, intDevsCount, senDevsCount, designCount, testCount) {

    let web = simulation['Projects']['Proposed Project']['techstack']['web'];
    let app = simulation['Projects']['Proposed Project']['techstack']['app'];
    let database = simulation['Projects']['Proposed Project']['techstack']['database'];
    let server = simulation['Projects']['Proposed Project']['techstack']['server'];

    let excludedNames = Array();
    let team = {};

    for (let i = 0; i < junDevsCount; i++) {

        let teamMember = languageExperience(web, app, database, server, 'Junior Developer', excludedNames)
        team[teamMember] = (simulation['Employees']['Development'][teamMember])
        simulation['Employees']['Development'][teamMember]['ongoingTickets'] = {
            'tickets': {}
        }
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < intDevsCount; i++) {
        let teamMember = languageExperience(web, app, database, server, 'Intermediate Developer', excludedNames)
        team[teamMember] = (simulation['Employees']['Development'][teamMember])
        simulation['Employees']['Development'][teamMember]['ongoingTickets'] = {
            'tickets': {}
        }
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < senDevsCount; i++) {
        let teamMember = languageExperience(web, app, database, server, 'Senior Developer', excludedNames)
        team[teamMember] = (simulation['Employees']['Development'][teamMember])
        simulation['Employees']['Development'][teamMember]['ongoingTickets'] = {
            'tickets': {}
        }
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < testCount; i++) {
        let teamMember = addTesterOrDesigner('Testing', excludedNames)
        team[teamMember] = (simulation['Employees']['Testing'][teamMember])
        simulation['Employees']['Testing'][teamMember]['ongoingTickets'] = {
            'tickets': {}
        }
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < designCount; i++) {
        let teamMember = addTesterOrDesigner('Design', excludedNames)
        team[teamMember] = (simulation['Employees']['Design'][teamMember])
        simulation['Employees']['Design'][teamMember]['ongoingTickets'] = {
            'tickets': {}
        }
        excludedNames.push(teamMember)
    }

    return team;


}

function languageExperience(web, app, database, server, role, excluded) {


    let mostExperienceYears = 0;
    let mostExperienced;
    let devs = Object.keys(simulation['Employees']['Development']);
    devs.forEach((dev) => {
        let isExcluded = false;
        if (simulation['Employees']['Development'][dev]['role'] == role) {
            for (let i = 0; i < excluded.length; i++) {
                if (dev == excluded[i]) {
                    isExcluded = true;
                }
            }
            if (!isExcluded) {
                let languages = Object.keys(simulation['Employees']['Development'][dev]['languages'])
                let yearsExperience = 0;
                languages.forEach((language) => {
                    if (language == web) {
                        yearsExperience += simulation['Employees']['Development'][dev]['languages'][language];
                    } else if (language == app) {
                        yearsExperience += simulation['Employees']['Development'][dev]['languages'][language];
                    } else if (language == database) {
                        yearsExperience += simulation['Employees']['Development'][dev]['languages'][language];
                    } else if (language == server) {
                        yearsExperience += simulation['Employees']['Development'][dev]['languages'][language];
                    }
                });
                if (mostExperienceYears < yearsExperience) {
                    mostExperienced = dev;
                    mostExperienceYears = yearsExperience;
                }
            }
        }

    });

    return mostExperienced;

}

function addTesterOrDesigner(role, excluded) {
    let mostExperienceYears = 0;
    let mostExperienced;

    let employees = Object.keys(simulation['Employees'][role]);
    employees.forEach((employee) => {
        let isExcluded = false;
        for (let i = 0; i < excluded.length; i++) {
            if (employee == excluded[i]) {
                isExcluded = true;
            }
        }

        if (!isExcluded) {
            let yearsExperience = simulation['Employees'][role][employee]['experience'];
            if (mostExperienceYears < yearsExperience) {
                mostExperienced = employee;
                mostExperienceYears = yearsExperience;
            }
        }

    });
    return mostExperienced;

}


function startProject() {
    //console.log("A project has been started");
}

function sprint(userStory1, userStoryDescription1, userStory2, userStoryDescription2) {
    //updateOngoingWorkHoursForSprint(true);
    sprintOne(userStory1, userStoryDescription1);
    sprintTwo(userStory1);
    sprintThree(userStory1);
    sprintFour(userStory1);
    sprintFive(userStory1);
    sprintSix(userStory1);
    sprintSeven(userStory1);
    sprintEight(userStory1);
    sprintNine(userStory1);
    sprintTen(userStory1);
    sprintEleven(userStory2, userStoryDescription2);
    sprintTwelve(userStory2);
    sprintThirteen(userStory2);
    sprintFourteen(userStory2);
    sprintFifteen(userStory2);
    sprintSixteen(userStory2);
    sprintSeventeen(userStory2);
    sprintEighteen();
    sprintNineteen();
    sprintTwenty();
    //updateOngoingWorkHoursForSprint(false);
}






function sprintOne(userStoryTitle, userStoryDescription) {

    addIncompleteTicketsToBacklog(userStoryTitle);
    simulation['Projects']['Proposed Project']['inSprint'] = true;
    updateSprintTeamAvailableHours();
    //console.log("Project manager discuesses Sprint Planning with development and design team.");
    //console.log(`User Story: ${userStoryTitle} added to Sprint Plan`);
    //need to work out a way of how many people will be assigned to a user story
    let totalDevs = simulation['Team Make-Up']['Junior Developers'] + simulation['Team Make-Up']['Intermediate Developers'] + simulation['Team Make-Up']['Senior Developers']
    createUserStory(userStoryTitle, userStoryDescription, totalDevs, simulation['Team Make-Up']['Designers'], simulation['Team Make-Up']['Testers']);
    //console.log("Braking stories into smaller tasks");
    //designer needed true or false
    //creating random tickets and assigning team members. Assign team members needs a better algorithm for deciding who get assigned what ticket
    breakingStoriesIntoTickets(userStoryTitle, generateRandomIntegerInRange(2, 5));
    //console.log("******************");
    //at here we'll want to start assigning tickets
    //console.log("Design and Implementation");
    addDays(1);

}




function sprintTwo(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager Review Sprint Plan");
    //console.log("Design and Implementation");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintThree(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager Review Sprint Plan");
    //console.log("Design and Implementation");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintFour(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager and Employees Review Sprint Plan");
    //console.log("Design and Implementation");
    //console.log("Expectations set");
    //console.log("Discussions with client");
    sprintDiscussionWithClient(userStory);
    //want to do some update could change the amount of proposed hours.
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);

}

function sprintFive(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager prepares next sprint");
    //console.log("Design and Implementation");
    //console.log("Shaping Stories for Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintSix(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager prepares next sprint");
    //console.log("Design and Implementation");
    //console.log("Design - Shaping Stories for Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}


function sprintSeven(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager - What is likely to be available to demo");
    //console.log("Design - Finishing touches for current sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintEight(userStory) {
    //console.log("Standup Feature Complete");
    //console.log("Project Manager prepares Demo");
    //console.log("Design - Finishing touches for current sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintNine(userStory) {

    //console.log("Stand Up");
    //console.log("Project Manager prepares next sprint");
    //console.log("Design - Shaping Stories for Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintTen(userStory) {
    //console.log("Stand Up Retro");
    //console.log("Project Manager Prepares Next Sprint");
    //console.log("Design - Shaping Stories for Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintEleven(userStoryTitle, userStoryDescription) {
    // adding this in here, but there may have to be something to see if tickets still ongoing
    updateSprintTeamAvailableHours();
    //console.log("Project manager discuesses Sprint Planning with development and design team.");
    //console.log(`User Story: ${userStoryTitle} added to Sprint Plan`);
    //need to work out a way of how many people will be assigned to a user story
    let totalDevs = simulation['Team Make-Up']['Junior Developers'] + simulation['Team Make-Up']['Intermediate Developers'] + simulation['Team Make-Up']['Senior Developers']
    createUserStory(userStoryTitle, userStoryDescription, totalDevs, simulation['Team Make-Up']['Designers'], simulation['Team Make-Up']['Testers']);
    //console.log("Braking stories into smaller tasks");
    //designer needed true or false
    //creating random tickets and assigning team members. Assign team members needs a better algorithm for deciding who get assigned what ticket

    breakingStoriesIntoTickets(userStoryTitle, generateRandomIntegerInRange(2, 5));
    //console.log("******************");
    //console.log("User Stories");
    //console.log(simulation['User Stories']);
    //at here we'll want to start assigning tickets
    //console.log("Design and Implementation");
    addDays(1);
}

function sprintTwelve(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager Sprint Planning");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintThirteen(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager Sprint Planning");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintFourteen(userStory) {
    //console.log("Stand Up");
    //console.log("Employees Sprint Review");
    //console.log("Project Manager Sprint Review");
    //console.log("Design Sprint Review");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}


function sprintFifteen(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager - Prepare Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintSixteen(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager - Prepare Next Sprint");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintSeventeen(userStory) {
    //console.log("Stand Up");
    //console.log("Project Manager - Understand what is likely to be available to demo");
    workOnSprintTicket();
    progressReport(userStory);
    addDays(1);
}

function sprintEighteen() {
    //console.log("Stand Up Feature Complete");
    //console.log("Project Manager - prepare demo");
    workOnSprintTicket()
    addDays(1);
}


function sprintNineteen() {
    //console.log("Stand Up");
    //console.log("Project Team Sprint Review");
    //console.log("Project Manager Sprint Review");
    //console.log("Design Sprint Review");
    workOnSprintTicket();
    addDays(1);
}

function sprintTwenty() {
    //console.log("Stand Up Retro");
    //console.log("Project Manager Prepares Next Sprint");
    addDays(1);
    workOnSprintTicket();
    simulation['Projects']['Proposed Project']['inSprint'] = false;

}

function workOnBacklog() {

    do {
        workOnSprintTicket();
    }

    while (areIncompleteTickets())
}

function areIncompleteTickets() {
    let areIncomplete = false;
    let userStories = Object.keys(simulation['User Stories']);
    userStories.forEach((userStory) => {
        let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
        tickets.forEach((ticket) => {
            let isComplete = simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']
            if (!isComplete) {
                areIncomplete = true;
            }
        })
    })
    return areIncomplete;
}

function developPrototype(prototype, isFinal) {
    createPrototype(prototype);

    if (isFinal) {
        let userStories = Object.keys(simulation['User Stories']);
        userStories.forEach((userStory) => {
            assignUserStoryToProtoType(prototype, userStory);
        });
    } else {


        let userStories = Object.keys(simulation['User Stories']);
        userStories.forEach((userStory) => {
            let assigned = simulation['User Stories'][userStory]['assignedPrototype'];
            if (!assigned) {
                assignUserStoryToProtoType(prototype, userStory);
            }
        });

    }


    generateAvgQualityOfPrototype(prototype);

}

function createPrototype(prototype) {

    simulation['Prototypes'][prototype] = {};
    simulation['Prototypes'][prototype]['userStories'] = {};
    simulation['Prototypes'][prototype]['proposedWorkHours'] = generateRandomIntegerInRange(40, 60);
    simulation['Prototypes'][prototype]['actualWorkHours'] = 0;
    simulation['Prototypes'][prototype]['isComplete'] = 0;
    simulation['Prototypes'][prototype]['reworkHours'] = 0;
    simulation['Prototypes'][prototype]['reworkGiven'] = false;
    simulation['Prototypes'][prototype]['testingComplete'] = false;
    simulation['Prototypes'][prototype]['proposedTestingHours'] = 0;
    simulation['Prototypes'][prototype]['actualTestingHours'] = 0;
    simulation['Prototypes'][prototype]['avgQual'] = 0;
    assignTeamToPrototype(prototype);


}

function generateAvgQualityOfPrototype(prototype) {

    let ticketCount = 0;
    let qualTotal = 0;
    let userStories = Object.keys(simulation['Prototypes'][prototype]['userStories']);
    userStories.forEach((userStory) => {
        let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
        tickets.forEach((ticket) => {
            ticketCount++;
            qualTotal += simulation['User Stories'][userStory]['tickets'][ticket]['avgQual'];
        })
    })


    qualTotal /= ticketCount;

    qualTotal = parseFloat(qualTotal.toFixed(2));

    simulation['Prototypes'][prototype]['avgQual'] = qualTotal;




}

function workOnPrototype(prototype) {
    let count = 0;
    do {
        count++;
        let employees = Object.keys(simulation['Projects']['Proposed Project']['team']);
        employees.forEach((employee) => {

            let role = simulation['Projects']['Proposed Project']['team'][employee]['role'];
            if (role === 'Junior Developer' || role === 'Intermediate Developer' || role === 'Senior Developer') {
                for (let i = 0; i < 5; i++) {
                    if (simulation['Prototypes'][prototype]['actualWorkHours'] < simulation['Prototypes'][prototype]['proposedWorkHours']) {
                        simulation['Prototypes'][prototype]['actualWorkHours'] += simulation['Projects']['Proposed Project']['team'][employee]['workEffeciency'];
                        simulation['Prototypes'][prototype]['actualWorkHours'] = parseFloat(simulation['Prototypes'][prototype]['actualWorkHours'].toFixed(2));
                    }


                }
                if (simulation['Prototypes'][prototype]['actualWorkHours'] >= simulation['Prototypes'][prototype]['proposedWorkHours']) {
                    simulation['Prototypes'][prototype]['isComplete'] = true;
                    sendPrototypeForTesting(prototype);
                }
            }
        });

        addDays(1);

    }

    while (simulation['Prototypes'][prototype]['isComplete'] == false);
}


function sendPrototypeForTesting(prototype) {

    generatePrototypeTestingHours(prototype);


    do {

        let employees = Object.keys(simulation['Projects']['Proposed Project']['team']);
        employees.forEach((employee) => {

            let role = simulation['Projects']['Proposed Project']['team'][employee]['role'];
            if (role === 'Testing') {
                for (let i = 0; i < 5; i++) {
                    if (simulation['Prototypes'][prototype]['actualTestingHours'] < simulation['Prototypes'][prototype]['proposedTestingHours']) {
                        simulation['Prototypes'][prototype]['actualTestingHours'] += parseFloat(simulation['Projects']['Proposed Project']['team'][employee]['workEffeciency'].toFixed(2));
                    }


                }
                if (simulation['Prototypes'][prototype]['actualTestingHours'] >= simulation['Prototypes'][prototype]['proposedTestingHours']) {
                    simulation['Prototypes'][prototype]['testingComplete'] = true;

                }
            }
        });

        addDays(1);

    }

    while (simulation['Prototypes'][prototype]['testingComplete'] == false);

    simulation['Prototypes'][prototype]['actualTestingHours'] = parseFloat(simulation['Prototypes'][prototype]['actualTestingHours'].toFixed(2));

}


function generatePrototypeTestingHours(prototype) {

    let testingTime = generateRandomIntegerInRange(10, 15);
    testingTime /= 100;
    let actualWorkInHours = simulation['Prototypes'][prototype]['actualWorkHours'];
    if (!simulation['Prototypes'][prototype]['reworkGiven']) {
        testingTime += parseInt((actualWorkInHours * testingTime) + 10)
    } else {
        testingTime += parseInt((actualWorkInHours * testingTime) + 5)

    }
    simulation['Prototypes'][prototype]['proposedTestingHours'] = testingTime;
}

function assignTeamToPrototype() {

    let employees = Object.keys(simulation['Projects']['Proposed Project']['team']);
    employees.forEach((employee) => {

        let role = simulation['Projects']['Proposed Project']['team'][employee]['role'];
        if (role === 'Junior Developer' || role === 'Intermediate Developer' || role === 'Senior Developer') {
            setAssignedWorkHours('Development', employee, 5);
        }

    });

}




function assignUserStoryToProtoType(prototype, userStory) {

    simulation['Prototypes'][prototype]['userStories'][userStory] = simulation['User Stories'][userStory];
    simulation['User Stories'][userStory]['assignedPrototype'] = true;


}

function presentPrototypeToCustomer(prototype) {

    let avgQual = simulation['Prototypes'][prototype]['avgQual'];


    let reworkAmount = (2 - avgQual) * (generateRandomIntegerInRange(1, 20) / 10);
    reworkAmount *= 20;
    reworkAmount = parseInt(reworkAmount);
    simulation['Prototypes'][prototype]['reworkHours'] = reworkAmount;
    simulation['Prototypes'][prototype]['reworkGiven'] = true;
    simulation['Prototypes'][prototype]['proposedWorkHours'] += reworkAmount;
    simulation['Prototypes'][prototype]['isComplete'] = false;
    simulation['Prototypes'][prototype]['testingComplete'] = false;
    workOnPrototype(prototype);
}

function launchProduct() {
    console.log("Final Product Created");
}



function createUserStory(title, description, developersNeeded, designersNeeded, testersNeeded) {


    // adding this here as we need to create some way of adding the ongoing tickets for each user story
    clearOngoingSprintTickets(title);

    simulation['User Stories'][title] = {};
    simulation['User Stories'][title]['name'] = title;
    simulation['User Stories'][title]['description'] = description;
    simulation['User Stories'][title]['developersNeeded'] = developersNeeded;
    simulation['User Stories'][title]['designersNeeded'] = designersNeeded;
    simulation['User Stories'][title]['testersNeeded'] = testersNeeded;
    //create empty container for tickets to be added to later
    simulation['User Stories'][title]['tickets'] = {};
    simulation['Projects']['Proposed Project']['backlog'][title] = {}
    simulation['User Stories'][title]['assignedPrototype'] = false;

}



function addIncompleteTicketsToBacklog(newUserStory) {
    let userStories = Object.keys(simulation['User Stories']);
    userStories.forEach((userStory) => {
        if (newUserStory !== simulation['User Stories'][userStory]['name']) {
            let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
            tickets.forEach((ticket) => {
                let isComplete = simulation['User Stories'][userStory]['tickets'][ticket]['isComplete'];
                if (!isComplete) {
                    addTicketToBackLog(userStory, ticket);
                }
            })
        }
    })
}





function createTicket(userStory, ticketTitle, description, proposedWorkInHours, priority, designerRequired) {
    simulation['User Stories'][userStory]['tickets'][ticketTitle] = {};
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['ticketTitle'] = ticketTitle
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['ticketDescription'] = description;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['proposedWorkInHours'] = proposedWorkInHours;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['actualWorkInHours'] = 0;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['isComplete'] = false;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['totalQuality'] = 0;
    //create empty container for technologies to be added seperately
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['technologies'] = {};
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['isAssigned'] = false;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['priority'] = priority;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['designerRequired'] = designerRequired;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['proposedTestingTime'] = 0;
    //not complete, in progress, complete
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['inTesting'] = false;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['testingComplete'] = false;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['actualTestingTime'] = 0;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['testingTimePerTester'] = 0;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['reworkHours'] = 0;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['reworkGiven'] = false;
}

//this is really dumb this definitley needs changed, but okay for now
function determineTeamMemberAmountForTicket(proposedWorkInHours, designerRequired) {
    let needed = 0
    if (designerRequired == 1) {
        needed = -1;
    }
    if (proposedWorkInHours <= 25) {
        needed += 2
    } else if (proposedWorkInHours >= 25) {
        needed += 3
    } else if (proposedWorkInHours >= 35) {
        needed += 4
    }

    return needed;

}


function assignSprintTicketWorkers(userStory, ticketName) {
    //check to see if the ticket needs an additional designer
    let designerNeeded = simulation['User Stories'][userStory]['tickets'][ticketName]['designerRequired'];
    let ticket = simulation['User Stories'][userStory]['tickets'][ticketName];
    //calculate the amount of workers needed for each ticket based on proposed hours of ticket
    let developersNeeded = determineTeamMemberAmountForTicket(simulation['User Stories'][userStory]['tickets'][ticketName]['proposedWorkInHours'], simulation['User Stories'][userStory]['tickets'][ticketName]['designerRequired']);
    //get the technologies that the ticket deals with
    let technologies = Object.keys(simulation['User Stories'][userStory]['tickets'][ticketName]['technologies']);
    //get the proposed ticket work in hours as a variable.
    let proposedWorkInHours = parseInt(simulation['User Stories'][userStory]['tickets'][ticketName]['proposedWorkInHours']);
    // get how many hours are needed to be completed per day divide total by 9 - 9 days of sprint per user Story 
    let totalHoursPerDay = Math.ceil(proposedWorkInHours / 9);
    //divide the 
    let hoursPerMember = totalHoursPerDay / developersNeeded;
    if (designerNeeded) {
        //adding one extra hour for 'review'
        hoursPerMember = Math.ceil((totalHoursPerDay / (developersNeeded + 1)));
    } else {
        //adding one extra hour for 'review'
        hoursPerMember = Math.ceil((totalHoursPerDay / developersNeeded));
    }
    //Update ticketTime per member on the ticket itself for the amount of work each member should do.
    simulation['User Stories'][userStory]['tickets'][ticketName]['hoursPerMember'] = hoursPerMember;
    // return all employees who are developers
    let developers = getProposedTicketTeamMembers('Development');
    //so right now I have how many team members are needed, how many hours of work should be conducted per day, and the total proposed amount of hours for ticket to be finished
    let availableDevelopers = getAvailableEmployeesSprintTickets('Development', developers, hoursPerMember);
    //returns all employees who are designers
    let designers = getProposedTicketTeamMembers('Design');
    let availableDesigners = getAvailableEmployeesSprintTickets('Design', designers, hoursPerMember);


    if ((availableDevelopers.length < developersNeeded) || (availableDesigners < 1)) {
        addTicketToBackLog(userStory, ticket, ticketName);
    } else {


        if (designerNeeded === 1) {
            let mostExperiencedDes = getMostSuitableDesigner(availableDesigners);
            assignTicketToEmployee(mostExperiencedDes, userStory, ticket, ticketName);
            addAssignedWorkHours('Design', mostExperiencedDes, hoursPerMember);
        }



        for (let i = 0; i < developersNeeded; i++) {
            let mostExperienced = getMostSuitableDeveloper(availableDevelopers, technologies, userStory, ticketName);
            assignTicketToEmployee(mostExperienced, userStory, ticket, ticketName);
            addAssignedWorkHours('Development', mostExperienced, hoursPerMember);
            availableDevelopers.pop(mostExperienced);
        }
        simulation['User Stories'][userStory]['tickets'][ticketName]['isAssigned'] = true;
    }



    let membersNeeded = developersNeeded;
    if (designerNeeded) {
        membersNeeded += 1;
    }

    let qualAvg = generateTicketQualityAverage(userStory, ticketName, membersNeeded)

    simulation['User Stories'][userStory]['tickets'][ticketName]['avgQual'] = qualAvg;
    generateTestingTime(userStory, ticketName);
}

//get all team members from a specific team
function getProposedTicketTeamMembers(team) {

    //empty array to store developers
    let projectTeamMembers = new Array();
    //get everyone from development team
    let specificTeam = Object.keys(simulation['Employees'][team]);
    //get all from project Team
    let projectTeam = Object.keys(simulation['Projects']['Proposed Project']['team']);

    //loop through project team
    projectTeam.forEach((teamMember) => {
        //loop through developers
        specificTeam.forEach((specificTeamMember) => {
            //check to see if they are a developer then add to developers array
            if (teamMember === specificTeamMember) {
                projectTeamMembers.push(teamMember);
            }
        })
    })

    return projectTeamMembers;
}

//get the designers for the new project



//search through languages each developer has for technology. Return the total

function assignTechnologyToTicket(userStory, ticketTitle, type, name) {
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['technologies'][name] = {}
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['technologies'][name]['type'] = type;

}

function breakingStoriesIntoTickets(userStory, ticketsNeeded) {

    //create some form of algorithm to decide on who should work on a ticket and how many determined by hours, and technology, and possibly complexity? Can that be assigned a value?
    for (let i = 0; i < ticketsNeeded; i++) {
        //random generate technologies to worked on

        //i plus 1 for readability
        createTicket(userStory, 'Ticket ' + (i + 1), 'Description for ticket ' + (i + 1), generateRandomIntegerInRange(25, 30), generateRandomIntegerInRange(1, 5), generateRandomIntegerInRange(0, 1));
        generateTechnology(userStory, 'Ticket ' + (i + 1));
        //assign team members to ticket
        assignSprintTicketWorkers(userStory, 'Ticket ' + (i + 1));
    }
}


function generateTechnology(userStory, ticketName) {

    let stackAmount = 0;
    let stackNames = new Array();

    let stack = Object.keys(simulation['Projects']['Proposed Project']['techstack']);
    stack.forEach((component) => {
        stackAmount += 1;
        stackNames.push(component);
    });

    let includedInTicket = generateRandomIntegerInRange(1, stackAmount);

    let components = new Array();

    for (let i = 0; i < includedInTicket; i++) {
        let rand = generateRandomIntegerInRange(0, (stackAmount - 1));
        while (components.includes(rand)) {
            rand = generateRandomIntegerInRange(0, (stackAmount - 1));
        }
        components.push(rand);
    }
    for (let i = 0; i < components.length; i++) {
        simulation['User Stories'][userStory]['tickets'][ticketName]['technologies'][stackNames[components[i]]] = simulation['Projects']['Proposed Project']['techstack'][stackNames[components[i]]];
    }
}

//so sprint 1 creates these things - in between these 'work' needs to be commenced.  going to make it v simple then add more complexity

function workOnSprintTicket() {

    let team = Object.keys(simulation['Projects']['Proposed Project']['team']);
    //only do this for developers and designers
    team.forEach((member) => {
        if (simulation['Projects']['Proposed Project']['team']['role'] !== 'Testing') {
            let userStories = Object.keys(simulation['Projects']['Proposed Project']['team'][member]['ongoingTickets']['tickets']);
            userStories.forEach((userStory) => {
                let tickets = Object.keys(simulation['Projects']['Proposed Project']['team'][member]['ongoingTickets']['tickets'][userStory])
                tickets.forEach((ticket) => {
                    if (!isTicketComplete(member, userStory, ticket)) {
                        let hoursPerMember = simulation['Projects']['Proposed Project']['team'][member]['ongoingTickets']['tickets'][userStory][ticket]['hoursPerMember'];
                        for (let i = 0; i < hoursPerMember; i++) {
                            if (!isTicketComplete(member, userStory, ticket)) {
                                updateTicketHours(member, userStory, ticket);
                                updateTicketCompletion(member, userStory, ticket);
                            } else {
                                if (areBacklogTickets(userStory)) {
                                    let backlogTickets = getUnassignedBackLogTickets(userStory);
                                    for (let i = 0; i < backlogTickets.length; i++) {
                                        assignSprintTicketWorkers(userStory, backlogTickets[i]);
                                    }
                                }
                            }
                        }
                    }
                })
                if (areCompleteTicketsAvailableForTesting(userStory)) {
                    assignSprintTicketsForTesting(userStory);
                }
            })
        }
    });



    //only do this for developers and designers
    team.forEach((employee) => {

        if (simulation['Projects']['Proposed Project']['team'][employee]['role'] === 'Testing') {
            let userStories = Object.keys(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets']);
            userStories.forEach((userStory) => {
                if (areTestingTicketsAssinged(userStory)) {
                    //console.log(employee)
                    //console.log(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'])
                    let tickets = Object.keys(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory]);
                    tickets.forEach((ticket) => {
                        let hoursPerMember = simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['testingTimePerTester']

                        for (let i = 0; i < hoursPerMember; i++) {
                            if (testingSprintTicketComplete(userStory, ticket)) {
                                simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'] = true;
                                removeTestingTicket(userStory, ticket, employee);
                                generateRework(userStory, ticket);
                            } else {
                                testSprintTicket(userStory, ticket, employee);
                            }
                        }


                    })
                }

            });
        }


    });

}

function progressReport(userStory) {


    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    tickets.forEach((ticket) => {

        if (!simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']) {

            // console.log(`${ticket}: Proposed Hours to completion: ${simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours']} Current hours worked: ${simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours']}`);
        } else {
            // console.log(`${ticket}: took ${simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours']}`);
        }
    });
}

function sprintDiscussionWithClient(userStory) {

    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    tickets.forEach((ticket) => {

        //create a random num generate - after discussions with client they may want to change the work which will either increase or decrease amount of time
        let rework = generateClientDiscussionRework(userStory, ticket);

        simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours'] += rework;
    });
}

function generateClientDiscussionRework(userStory, ticket) {

    let rework = 2;
    let avgQual = simulation['User Stories'][userStory]['tickets'][ticket]['avgQual'];
    let passRate = generateRandomIntegerInRange(50, 200);
    passRate /= 100;


    if (avgQual < passRate) {

        rework = rework + ((passRate - avgQual) * rework)
    } else {

        rework = generateRandomIntegerInRange(-10, 2);
    }


    rework = parseFloat(rework.toFixed(2));

    return rework;
}

/*
adds a number of days to date
*/

function addDays(days) {

    simulation.Date.setDate(simulation.Date.getDate() + days);

}

//console.log(simulation);


function softwareSubscriptions() {

    let software = Object.keys(simulation['Projects']['Inhouse Software']);
    software.forEach((software) => {
        let subscriberIncome = simulation['Projects']['Inhouse Software'][software]['subscribers'] * simulation['Projects']['Inhouse Software'][software]['monthlySubscription'];
        //console.log(`${simulation['Projects']['Inhouse Software'][software]['subscribers']} are subscribed to ${software} adding £${subscriberIncome} to company income.`)
        simulation['Company Account']['companyAccount'] += subscriberIncome;
    });
}

/*
software will have people uploaded content onto a site that is priced
*/
function monthlyWebsiteInvoices() {

    let webSiteUploads = simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts'];
    let customers = simulation['Projects']['Inhouse Software']['software 1']['customers'];

    let uploads = generateRandomIntegerInRange(30, 85);
    let boost1 = generateRandomIntegerInRange(1, 5);
    let boost2 = generateRandomIntegerInRange(1, 5);
    let boost3 = generateRandomIntegerInRange(1, 3);
    let boost4 = generateRandomIntegerInRange(1, 3);

    //15 percent of customers won't always upload
    let customerUploads = getPercentOfTotal(85, customers, "int");
    customerUploads *= uploads;
    //35 percent of customers will get a boost1
    boost1 *= getPercentOfTotal(35, customers, "int");
    //10 percent of customers will get a boost 2
    boost2 *= getPercentOfTotal(10, customers, "int");
    //5 percent of customers will get a boost 3 
    boost3 *= getPercentOfTotal(5, customers, "int");

    let totalIncome = 0;

    totalIncome += simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts']['upload'] * customerUploads;
    totalIncome += simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts']['boost1'] * boost1;
    totalIncome += simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts']['boost2'] * boost2;
    totalIncome += simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts']['boost3'] * boost3;
    totalIncome += simulation['Projects']['Inhouse Software']['software 1']['websiteUploadCosts']['boost4'] * boost4;

    simulation['Company Account']['companyAccount'] += totalIncome;


}


function yearlyDevelopmentIncome() {

    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {


        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
            let yearlyDevelopmentIncome = simulation['Projects'][project]['developmentContract']['hoursPerYear'] * simulation['Development Work']['costPerHour'];
            //console.log(`${project} generates £${yearlyDevelopmentIncome} yearly for development work`);
            simulation['Company Account']['companyAccount'] += yearlyDevelopmentIncome;
        }
    })

}

function monthlySupportContracts() {

    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {


        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
            let supportContract = simulation['Projects'][project]['supportContract']['package']
            let monthlySupportContracts = simulation['Support Packages'][supportContract]['cost'];
            //console.log(`${project} generates £${monthlySupportContracts} monthly for support`);
            simulation['Company Account']['companyAccount'] += monthlySupportContracts;
        }
    })

}

function monthlyHostingFees() {
    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {


        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
            let hostingFees = simulation['Projects'][project]['monthlyHostingFees']
            //console.log(`${project} generates £${hostingFees} monthly for hosting fees`);
            simulation['Company Account']['companyAccount'] += hostingFees;
        }
    })
}


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
                    'priority': generateRandomIntegerInRange(1, 3)
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

    if (hours >= 15) {
        amount += 1
    } else if (hours >= 25) {
        amount += 2
    } else if (hours >= 35) {
        amount += 3
    } else if (hours >= 45) {
        amount += 4
    }

    return amount;

}

function updateOngoingWorkHoursForSprint() {
    let inSprint = simulation['Projects']['Proposed Project']['inSprint'];
    let members = Object.keys(simulation['Projects']['Proposed Project']['team']);
    if (inSprint) {
        //updating all work hours to only allow for 10 hours on other projects
        changeOngoingWorkHoursAvailability(10, members);
    } else {
        changeOngoingWorkHoursAvailability(30, members);
    }
}


//change how many hours an employee can work on tickets per week
//may need to update if employee is on leave/ill
function changeOngoingWorkHoursAvailability(team, member, hours) {

    //created how many hours an employee has to work
    simulation['Employees'][team][member]['weeklyAvailableWorkHours'] = hours;


}

//sets all employees work Availability per week
function setAllOngoingWorkHourAvailability(hours) {
    let teams = Object.keys(simulation['Employees']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {
            changeOngoingWorkHoursAvailability(team, employee, hours);
        })
    });
}


// houw many hours per day an employee has per day to do work - standard is set at 7.5 to account for lunch
function updateDailyAvailableHours(team, employee, hours) {
    simulation['Employees'][team][employee]['dailyHours'] = hours;
}

//updates all employees available work per day
function setAllDailyAvailableHours(hours) {
    //get all teams
    let teams = Object.keys(simulation['Employees']);
    //loop through each team
    teams.forEach((team) => {
        //get all employee in that team
        let employees = Object.keys(simulation['Employees'][team]);
        //loop through each employee
        employees.forEach((employee) => {
            //update their available work hours per day
            updateDailyAvailableHours(team, employee, hours);
        })
    });
}

//can be edited for employees if they are off on leave/ill
function updateDaysToWorkPerWeek(team, employee, days) {
    simulation['Employees'][team][employee]['daysPerWeek'] = days;
}

//this is usefull for bank holidays/set default amount of days
function setAllDaysToWorkPerWeek(days) {
    //get all teams
    let teams = Object.keys(simulation['Employees']);
    //loop through each team
    teams.forEach((team) => {
        //get all employee in that team
        let employees = Object.keys(simulation['Employees'][team]);
        //loop through each employee
        employees.forEach((employee) => {
            //update their available days to work
            updateDaysToWorkPerWeek(team, employee, days);
        })
    });
}

function updateEmployeesHoursPerWeek() {
    //get all teams
    let teams = Object.keys(simulation['Employees']);
    //loop through each team
    teams.forEach((team) => {
        //get all employee in that team
        let employees = Object.keys(simulation['Employees'][team]);
        //loop through each employee
        employees.forEach((employee) => {
            //storing days and daily work hours as variables to make it more readable
            let days = simulation['Employees'][team][employee]['daysPerWeek'];
            let dailyHours = simulation['Employees'][team][employee]['dailyHours']
            //update their available hours per week (days * daily hours) to work
            simulation['Employees'][team][employee]['workingHoursPerWeek'] = days * dailyHours;
        })
    });
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
                        let teams = Object.keys(simulation['Employees']);
                        teams.forEach((team) => {
                            let employees = Object.keys(simulation['Employees'][team]);
                            employees.forEach((employee) => {
                                if (team === 'Development') {

                                    let isAssigned = simulation['Projects'][project]['tickets'][ticket]['isAssigned'];
                                    let employeeWorkHours = simulation['Employees'][team][employee]['ongoingWorkHours'];
                                    let assignedWorkHours = simulation['Employees'][team][employee]['assignedWorkHours'];
                                    let ticketHours = simulation['Projects'][project]['tickets'][ticket]['proposedWorkInHours'];

                                    if (!isAssigned) {
                                        if (employee == member) {
                                            ////console.log(`Employee: ${employee} EmployeeWorkHours: ${employeeWorkHours} AssignedWorkHours: ${assignedWorkHours} Ticket: ${ticket}`)
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

    simulation['Projects'][project]['tickets'][ticket]['assignedMember'] = member;
    simulation['Projects'][project]['tickets'][ticket]['isAssigned'] = true;
    simulation['Employees'][team][member]['assignedWorkHours'] += ticketHours;

}

function setAllAssignedWorkHours(hours) {
    let teams = Object.keys(simulation['Employees']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {
            setAssignedWorkHours(team, employee, hours)

        })
    });
}



function setAssignedWorkHours(team, employee, hours) {
    simulation['Employees'][team][employee]['assignedWorkHours'] = hours;
}

function generateEmployeeScores() {

    let teams = Object.keys(simulation['Employees']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {
            simulation['Employees'][team][employee]['satisfactionMatrix']['sickDays'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['satisfactionMatrix']['eNPS'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['satisfactionMatrix']['salarySatisfaction'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['satisfactionMatrix']['employeeSatisfactionSurvey'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['effeciency'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['teamWork'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['independentWork'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['reliability'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['effectiveness'] = generateRandomIntegerInRange(0, 10);
            simulation['Employees'][team][employee]['performanceReview']['planning'] = generateRandomIntegerInRange(0, 10);
        });
    });
}

function generateEmployeeWorkRate() {

    let teams = Object.keys(simulation['Employees']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {

            let effTotal = EFFECIENCY_DEDUCTION;
            let quaTotal = QUALITY_DEDUCTION;
            //effeciency
            effTotal += (simulation['Employees'][team][employee]['performanceReview']['effeciency'] / 10);
            effTotal += (simulation['Employees'][team][employee]['performanceReview']['independentWork'] / 50);
            effTotal += (simulation['Employees'][team][employee]['performanceReview']['teamWork'] / 50);
            effTotal += (simulation['Employees'][team][employee]['experience'] / EXPIRENCE_MULTIPLYER);
            effTotal = Math.floor(effTotal * 100) / 100;
            simulation['Employees'][team][employee]['workEffeciency'] = effTotal;
            //quality
            quaTotal += (simulation['Employees'][team][employee]['performanceReview']['effectiveness'] / 10);
            quaTotal += (simulation['Employees'][team][employee]['performanceReview']['planning'] / 10);
            quaTotal = Math.floor(quaTotal * 100) / 100;
            simulation['Employees'][team][employee]['workQuality'] = quaTotal;
        });
    });

}



function getEmployeeDayQualityWorkRate(team, employee) {

    let dayWorkRate = generateRandomIntegerInRange(-2, 2);
    dayWorkRate = (dayWorkRate / 10);
    dayWorkRate += simulation['Employees'][team][employee]['workQuality'];
    dayWorkRate = parseFloat(dayWorkRate.toFixed(2));
    //console.log(dayWorkRate);


    let teams = Object.keys(simulation['Employees']);
    teams.forEach((team) => {
        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {
            getEmployeeDayEfficiencyWorkRate(team, employee);
            getEmployeeDayQualityWorkRate(team, employee);
        })
    })
}

function getEmployeeDayEfficiencyWorkRate(team, employee) {

    let dayWorkRate = generateRandomIntegerInRange(-2, 2);
    dayWorkRate = (dayWorkRate / 10);
    dayWorkRate += simulation['Employees'][team][employee]['workEffeciency'];
    dayWorkRate = parseFloat(dayWorkRate.toFixed(2));
    //console.log(dayWorkRate);

}

function updateSprintTeamAvailableHours() {
    let developers = getProposedTicketTeamMembers('Development');
    let designers = getProposedTicketTeamMembers('Design');

    let projectMembers = Object.keys(simulation['Projects']['Proposed Project']['team']);

    developers.forEach((developer) => {
        projectMembers.forEach((member) => {
            if (developer === member) {
                setAssignedWorkHours('Development', member, 0);
            }
        })
    })


    designers.forEach((designer) => {
        projectMembers.forEach((member) => {
            if (designer === member) {
                setAssignedWorkHours('Design', member, 0);
            }
        })
    })

}

/*
checks whether an employee has capacity do complete work on the available ticket
*/
function employeeAvailableToWork(workAssignedHours, workerAvailableHours, ticketHours) {

    //check whether the employees already assigned hours + how many hours the ticket needs is less then all of the available hours
    if ((workAssignedHours + ticketHours) <= workerAvailableHours) {
        return true;
    }
    return false;
}

/*
take in which department the employee is from (either designer or development), the employees in that department, and how many hours are needed to complete the ticket
*/
function getAvailableEmployeesSprintTickets(department, employees, ticketHours) {

    //create empty array
    let available = new Array();

    //loop through all of the employees
    for (let i = 0; i < employees.length; i++) {
        //get the assigned work work hours
        let workAssignedHours = simulation['Employees'][department][employees[i]]['assignedWorkHours']
        //get how many hours per day an employee can work
        let workerAvailableHours = simulation['Employees'][department][employees[i]]['dailyHours'];
        //check whether the employee has the capacity
        if (employeeAvailableToWork(workAssignedHours, workerAvailableHours, ticketHours)) {
            //add that employee to the array
            available.push(employees[i])
        }
    }

    //return all employees that have capacity
    return available;
}

/*
get the employee, and assign that ticket to the employee
*/
function assignTicketToEmployee(employee, userStory, ticket, ticketName) {
    // get the name of the user Story (I have generate ticket and user Story names generically so these need to be differentiated)
    let userStoryName = simulation['User Stories'][userStory]['name'];
    //update tickets qualityTotal
    let quality = simulation['Projects']['Proposed Project']['team'][employee]['workQuality']
    simulation['User Stories'][userStoryName]['tickets'][ticketName]['totalQuality'] += quality
    //add the ticket to that user's inventory of tickets
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStoryName][ticketName] = ticket;

}

/**
 * 
 * @param {the user story of the ticket} userStory
 * This is to clear the UserStory and ticket so that the employee can be 'assigned' tickets 
 */
function clearOngoingSprintTickets(userStory) {
    //get all employees on the project
    let employees = Object.keys(simulation['Projects']['Proposed Project']['team']);
    employees.forEach((employee) => {
        //loop through all employees and create an empty slot for the user story so that each ticket won't be replaced.
        simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory] = {};
    });

}

/**
 * 
 * @param {array employees that are designers designers[]} 
 * @returns the most experienced designer
 */
function getMostSuitableDesigner(designers) {
    // set most experienced years to 0 as this will change
    let mostExperienceDesYears = 0;
    //initialise the most experienced Designer
    let mostExperiencedDes;
    //loop through array of designers
    for (let i = 0; i < designers.length; i++) {
        //initialise the years experience of the specific designer
        let yearsExp = simulation['Employees']['Design'][designers[i]]['experience'];
        //if the years of the designer is more than the mostExperienced Dev then update the most experienced designer years and the most experienced designer
        if (mostExperienceDesYears < yearsExp) {
            mostExperiencedDes = designers[i];
            mostExperienceDesYears = yearsExp;
        }
    }
    //return the most experienced designer
    return mostExperiencedDes;
}
/**
 * 
 * @param {array of developers} developers 
 */
function getMostSuitableDeveloper(developers, technologies, userStory, ticketName) {


    let mostExperienceYears = 0;
    let mostExperienced;
    for (let i = 0; i < developers.length; i++) {
        let totalExp = 0;
        let yearsExp = simulation['Employees']['Development'][developers[i]]['experience'];
        technologies.forEach((tech) => {
            //get the technology that is being used in the ticket
            let language = simulation['User Stories'][userStory]['tickets'][ticketName]['technologies'][tech];
            //if the developer does not have experience in that language the total won't be totaled
            if (typeof simulation['Employees']['Development'][developers[i]]['languages'][language] !== 'undefined') {
                // add to years of experience
                yearsExp += simulation['Employees']['Development'][developers[i]]['languages'][language];
            }
        });
        totalExp += yearsExp;
        //check if experience of the developer against most experienced. If they are more experienced they will get added to the ticket
        if (mostExperienceYears < yearsExp) {
            mostExperienced = developers[i];
            mostExperienceYears = yearsExp;
        }



    }


    return mostExperienced
}

function addAssignedWorkHours(team, employee, hours) {
    simulation['Employees'][team][employee]['assignedWorkHours'] += hours
}

function availableResources(available, membersNeeded) {

    if (available < membersNeeded) {
        return false;
    }
    return true;

}

/**
 * 
 * @param {The user story of the ticket} userStory 
 * @param {the ticket to add to the backlog} ticket 
 */
function addTicketToBackLog(userStory, ticket, ticketName) {


    simulation['Projects']['Proposed Project']['backlog'][userStory][ticketName] = ticket;

}




function updateTicketHours(employee, userStory, ticket) {
    let workRate = 1;
    workRate *= simulation['Projects']['Proposed Project']['team'][employee]['workEffeciency'];
    workRate = parseFloat(workRate.toFixed(2));
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualWorkInHours'] += workRate;
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualWorkInHours'] = parseFloat(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualWorkInHours'].toFixed(2))
}



function isTicketComplete(employee, userStory, ticket) {
    let isComplete = simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['isComplete'];

    return isComplete;

}

function updateTicketCompletion(employee, userStory, ticket) {
    let actualHours = simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualWorkInHours'];
    let proposedHours = simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['proposedWorkInHours'];

    if (actualHours >= proposedHours) {
        simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['isComplete'] = true;
        unassignSprintTicket(userStory, ticket);

    }
}

function areBacklogTickets(userStory) {

    let tickets = JSON.stringify(simulation['Projects']['Proposed Project']['backlog'][userStory]);
    if (tickets === '{}') {
        return false;
    } else {
        if (areUnassignedBacklogTicket(userStory)) {
            return true;
        }
    }

    return false;

}

function areUnassignedBacklogTicket(userStory) {

    unassigned = false
    let tickets = Object.keys(simulation['Projects']['Proposed Project']['backlog'][userStory]);

    tickets.forEach((ticket) => {

        if (simulation['Projects']['Proposed Project']['backlog'][userStory][ticket]['isAssigned'] == false) {
            unassigned = true;
        }
    });
    return unassigned;

}

function getUnassignedBackLogTickets(userStory) {
    let unassigned = new Array();
    let tickets = Object.keys(simulation['Projects']['Proposed Project']['backlog'][userStory]);
    tickets.forEach((ticket) => {

        if (simulation['Projects']['Proposed Project']['backlog'][userStory][ticket]['isAssigned'] == false) {
            unassigned.push(ticket);
        }
    })
    return unassigned;
}



function unassignSprintTicket(userStory, ticket) {

    let employees = Object.keys(simulation['Projects']['Proposed Project']['team']);
    employees.forEach((employee) => {
        let employeeTickets = Object.keys(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory]);
        employeeTickets.forEach((employeeTicket) => {
            if (ticket === employeeTicket) {
                //continue on this
                simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['isAssigned'] = false
                let hoursPerMember = simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['hoursPerMember'];
                removeSprintTicketHoursFromEmployee(employee, hoursPerMember)
            }
        })
    });


}


function removeSprintTicketHoursFromEmployee(employee, hours) {

    simulation['Projects']['Proposed Project']['team'][employee]['assignedWorkHours'] -= hours

}

function generateTicketQualityAverage(userStory, ticketName, assignedAmount) {

    let qualAvg = simulation['User Stories'][userStory]['tickets'][ticketName]['totalQuality'];

    qualAvg /= assignedAmount;

    qualAvg = parseFloat(qualAvg.toFixed(2))

    return qualAvg;



}

function generateTestingTime(userStory, ticketName) {

    //25% - 35 % as testing as conducted by developers
    let testingTime = generateRandomIntegerInRange(10, 15);
    testingTime /= 100;
    let actualWorkInHours = simulation['User Stories'][userStory]['tickets'][ticketName]['proposedWorkInHours'];
    simulation['User Stories'][userStory]['tickets'][ticketName]['proposedTestingTime'] = actualWorkInHours * testingTime;
}



function assignSprintTicketsForTesting(userStory) {

    let team = Object.keys(simulation['Projects']['Proposed Project']['team']);


    team.forEach((employee) => {
        if (simulation['Projects']['Proposed Project']['team'][employee]['role'] === 'Testing') {

            let testingReadyTickets = getTestingReadyTickets(userStory);

            for (let i = 0; i < testingReadyTickets.length; i++) {
                let hoursPerTester = simulation['User Stories'][userStory]['tickets'][testingReadyTickets[i]]['proposedTestingTime'];
                // days per week
                hoursPerTester /= 5;

                hoursPerTester = Math.ceil(hoursPerTester.toFixed(2));
                simulation['User Stories'][userStory]['tickets'][testingReadyTickets[i]]['testingTimePerTester'] = hoursPerTester;
                let assignedWorkHours = simulation['Projects']['Proposed Project']['team'][employee]['assignedWorkHours']
                let availableWorkHours = simulation['Projects']['Proposed Project']['team'][employee]['dailyHours']
                if ((assignedWorkHours + hoursPerTester) <= availableWorkHours) {
                    assignSprintTicketToTester(userStory, testingReadyTickets[i], employee);
                }


            }
        }
    })
}

function assignSprintTicketToTester(userStory, ticket, employee) {

    let hours = simulation['User Stories'][userStory]['tickets'][ticket]['testingTimePerTester'];
    let userStoryName = simulation['User Stories'][userStory]['name'];
    //add the ticket to that user's inventory of tickets
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStoryName][ticket] = simulation['User Stories'][userStory]['tickets'][ticket];
    simulation['Projects']['Proposed Project']['team'][employee]['assignedWorkHours'] += hours
    simulation['User Stories'][userStoryName]['tickets'][ticket]['inTesting'] = true;




}

function areCompleteTicketsAvailableForTesting(userStory) {

    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    let available = false;
    tickets.forEach((ticket) => {
        let isComplete = simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']
        let inTesting = simulation['User Stories'][userStory]['tickets'][ticket]['inTesting'];
        let testingComplete = simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'];
        if ((isComplete) && (!inTesting) && (!testingComplete)) {
            available = true;
        }
    })
    return available;
}


function getTestingReadyTickets(userStory) {
    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    let available = new Array();
    tickets.forEach((ticket) => {
        let isComplete = simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']
        let inTesting = simulation['User Stories'][userStory]['tickets'][ticket]['inTesting'];
        let testingComplete = simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'];
        let reworkGiven = simulation['User Stories'][userStory]['tickets'][ticket]['reworkGiven'];
        if ((isComplete) && (!inTesting) && (!testingComplete) && (!reworkGiven)) {
            available.push(ticket);
        }
    })

    return available;

}

function areTestingTicketsAssinged(userStory) {
    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    let assigned = false;
    tickets.forEach((ticket) => {
        let isComplete = simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']
        let inTesting = simulation['User Stories'][userStory]['tickets'][ticket]['inTesting'];
        let testingComplete = simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'];
        let reworkGiven = simulation['User Stories'][userStory]['tickets'][ticket]['reworkGiven'];
        if ((isComplete) && (inTesting) && (!testingComplete) && (!reworkGiven)) {

            assigned = true;
        }
    })
    return assigned;
}

function testSprintTicket(userStory, ticket, employee) {
    let workRate = 1;
    workRate *= simulation['Projects']['Proposed Project']['team'][employee]['workEffeciency'];
    workRate = parseFloat(workRate.toFixed(2));
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualTestingTime'] += workRate;
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualTestingTime'] = parseFloat(simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['actualTestingTime'].toFixed(2))
}

function testingSprintTicketComplete(userStory, ticket) {
    let proposed = simulation['User Stories'][userStory]['tickets'][ticket]['proposedTestingTime'];
    let actual = simulation['User Stories'][userStory]['tickets'][ticket]['actualTestingTime'];

    if (actual >= proposed) {

        simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'] = true;

    }

    return simulation['User Stories'][userStory]['tickets'][ticket]['testingComplete'];

}

function removeTestingTicket(userStory, ticket, employee) {
    simulation['Projects']['Proposed Project']['team'][employee]['ongoingTickets']['tickets'][userStory][ticket]['inTesting'] = false;
    simulation['Projects']['Proposed Project']['team'][employee]['assignedWorkHours'] -= simulation['User Stories'][userStory]['tickets'][ticket]['testingTimePerTester'];
}

function generateRework(userStory, ticket) {

    let rework = 2;
    let avgQual = simulation['User Stories'][userStory]['tickets'][ticket]['avgQual'];
    let passRate = generateRandomIntegerInRange(50, 200);
    passRate /= 100;


    if (avgQual < passRate) {

        rework = rework + ((passRate - avgQual) * rework)
    }

    rework = parseFloat(rework.toFixed(2));

    rework = Math.floor(rework);

    simulation['User Stories'][userStory]['tickets'][ticket]['reworkHours'] = rework;
    simulation['User Stories'][userStory]['tickets'][ticket]['isAssigned'] = false;
    simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours'] += rework;
    simulation['User Stories'][userStory]['tickets'][ticket]['isComplete'] = false;
    simulation['User Stories'][userStory]['tickets'][ticket]['reworkGiven'] = true;

}


