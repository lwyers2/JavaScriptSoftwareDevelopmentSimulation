// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let state = new Array();


const secInMs = 1000;
const minInMs = secInMs * 60;
const hourInMs = minInMs * 60;
const dayInMs = hourInMs * 24;
const weekInMs = dayInMs * 7;
const yearInMs = dayInMs * 365;
setOngoingWorkHourAvailability(30);

//before
state.push(JSON.stringify(simulation));
// Yearly run 
monthOne();
state.push(JSON.stringify(simulation));
monthTwo();
state.push(JSON.stringify(simulation));
monthThree();
state.push(JSON.stringify(simulation));
monthFour();
state.push(JSON.stringify(simulation));
monthFive();
state.push(JSON.stringify(simulation));
monthSix();
state.push(JSON.stringify(simulation));
monthSeven();
state.push(JSON.stringify(simulation));
monthEight();
state.push(JSON.stringify(simulation));
monthNine();
state.push(JSON.stringify(simulation));
monthTen();
state.push(JSON.stringify(simulation));
monthEleven();
state.push(JSON.stringify(simulation));
monthTwelve();
state.push(JSON.stringify(simulation));
monthThirteen();
state.push(JSON.stringify(simulation));
monthFourteen();
state.push(JSON.stringify(simulation));
let test = JSON.parse(state[0]);
console.log(test['date']);

// // monthly functions

function monthOne() {
    customerContactsCompany();
    architectureDetermination();
    feasibilityStudy();
    createDraftContact();
    negotiations();
    deductCosts(calculateMonthlyCosts());
    projectBusinessApproval();
    monthlyInstallmentPay();
    softwareSubscriptions();
    yearlyDevelopmentIncome();
    monthlySupportContracts();
    monthlyHostingFees();

    console.log("Time Period Ended");
    console.log("******************");


}


function setAdditionalCost(costName, cost) {

    simulation['Additional Costs']['Costs'][costName] = cost;

}




function monthTwo() {
    console.log("Month 2");
    console.log("******************");
    projectPlan();
    sprint('User Story 1', 'User Story Description 1', 'User Story 2', 'User Story Description 2');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");
}

function monthThree() {
    console.log("Month 3");
    console.log("******************");
    sprint('User Story 3', 'User Story Description 3', 'User Story 4', 'User Story Description 4');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthFour() {
    console.log("Month 4");
    console.log("******************");
    sprint('User Story 5', 'User Story Description 5', 'User Story 6', 'User Story Description 6');
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthFive() {
    console.log("Month 5");
    console.log("******************");
    sprint('User Story 7', 'User Story Description 7', 'User Story 8', 'User Story Description 8');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthSix() {
    console.log("Month 6");
    console.log("******************");
    sprint('User Story 9', 'User Story Description 9', 'User Story 10', 'User Story Description 10');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthSeven() {
    console.log("Month 7");
    console.log("******************");
    sprint('User Story 11', 'User Story Description 11', 'User Story 12', 'User Story Description 12');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthEight() {
    console.log("Month 8");
    console.log("******************");
    sprint('User Story 13', 'User Story Description 13', 'User Story 14', 'User Story Description 14');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthNine() {
    console.log("Month 9");
    console.log("******************");
    sprint('User Story 15', 'User Story Description 15', 'User Story 16', 'User Story Description 16');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthTen() {
    console.log("Month 10");
    console.log("******************");
    sprint('User Story 17', 'User Story Description 17', 'User Story 18', 'User Story Description 18');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthEleven() {

    console.log("Month 11");
    console.log("******************");
    sprint('User Story 19', 'User Story Description 19', 'User Story 20', 'User Story Description 20');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthTwelve() {
    console.log("Month 12");
    console.log("******************");
    sprint('User Story 21', 'User Story Description 21', 'User Story 22', 'User Story Description 22');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthThirteen() {
    console.log("Month 13");
    console.log("******************");
    sprint('User Story 23', 'User Story Description 23', 'User Story 24', 'User Story Description 24');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");

}


function monthFourteen() {
    console.log("Month 14");
    console.log("******************");
    sprint('User Story 25', 'User Story Description 26', 'User Story 27', 'User Story Description 27');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    console.log("Time Period Ended");
    console.log("******************");
}


let projects = Object.keys(simulation['Projects']);
let total = 0;
projects.forEach((project) => {

    if (project != 'Inhouse Software') {
        total += simulation['Projects'][project]['developmentContract']['hoursPerYear'];
    }

});

console.log(`Total: ${total} -  Gain perYear: ${total * 200}`);


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

    console.log("A new company has proposed a new project");
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
    console.log("Determining most suitable tech stack .... ");
    console.log("As the company needs a  " + simulation['Projects']['Proposed Project'].size + " sized project and it is a " + simulation['Projects']['Proposed Project']['type'] + " project, the most suitable stack is as follows: ");
    let stack = Object.keys(simulation['Projects']['Proposed Project'].techstack);
    stack.forEach((component) => {
        console.log(`${component}: ${simulation['Projects']['Proposed Project']['techstack'][component]}`);
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
                simulation['Component Costs']['web'] = simulation['Pricing']['new']['web'][simulation['Projects']['Proposed Project']['modification'][component]];

            }
            if (component == 'database') {
                simulation['Component Costs']['database'] = simulation['Pricing']['new']['app'][simulation['Projects']['Proposed Project']['modification'][component]]

            }
            if (component == 'server') {
                simulation['Component Costs']['server'] = simulation['Pricing']['new']['server'][simulation['Projects']['Proposed Project']['modification'][component]];

            }
            if (component == 'app') {
                simulation['Component Costs']['app'] = simulation['Pricing']['new']['database'][simulation['Projects']['Proposed Project']['modification'][component]]

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

    console.log("The proposed contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        console.log(component + ": " + simulation['Contract'][component])

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
    // simulation['Contract']['continuedSupport'] += generateRandomIntegerInRange(-3, +3);
    console.log("After the negotiations the contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        console.log(component + ": " + simulation['Contract'][component])

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
    console.log("***********************************");
    console.log("AD HOC COSTS");
    costs.forEach((cost) => {
        console.log(`${cost}: ${simulation['Ad Hoc Costs'][cost]}`)
        total += simulation['Ad Hoc Costs'][cost];
    });
    console.log(`Total: £${total}`);
    console.log("***********************************");

    return total;

}

function calculateSalaries() {
    let total = 0;
    let teams = Object.keys(simulation['Project Team']);
    console.log("***********************************");
    console.log("Salaries");
    teams.forEach((team) => {
        let costs = Object.keys(simulation['Project Team'][team]);
        costs.forEach((cost) => {
            //console.log(`${cost}: ${simulation['Project Team'][team][cost]['salary']}`)
            total += simulation['Project Team'][team][cost]['salary'];
        });

    });
    console.log(`Total: £${total}`);
    console.log("***********************************");
    return total;
}


function calculateMonthlyCosts() {

    let adCosts = 0;

    let costs = Object.keys(simulation['Additional Costs']['Costs']);
    console.log("***********************************");
    console.log("Additional Costs");
    costs.forEach((cost) => {
        console.log(`${cost}: ${simulation['Additional Costs']['Costs'][cost]}`)
        adCosts += simulation['Additional Costs']['Costs'][cost];
    });
    console.log(`Total: £${adCosts}`);
    console.log("***********************************");

    let adhoc = getAdHocCosts();
    let sal = calculateSalaries();

    let totalCosts = adCosts + adhoc + sal;

    //Scrub additionalCosts
    simulation['Additional Costs']['Costs'] = {
        'na': 0
    }

    console.log(`Total Monthly Costs: £${totalCosts}`)
    return totalCosts;


}

function deductCosts(cost) {

    console.log(`Deducting £${cost} from Account Balance £${simulation['Company Account']['companyAccount']}`);
    simulation['Company Account']['companyAccount'] -= cost;
    console.log(`Updated Account: £${simulation['Company Account']['companyAccount']}`)

}
/* 
Going to create some form of logic on whether the business will approval a proposal or not. For now we assume that the business does.
*/
function projectBusinessApproval() {


    console.log(`After deliberations, the business has approved the contract with ${simulation['Projects']['Proposed Project']['company']}`)
    console.log(`Company has agreed to pay a ${simulation['Contract']['depositPercent']}% deposit: £${getDepositAmount()}`);
    console.log(`Company Account balance before deposit: £${simulation['Company Account']['companyAccount']}`)
    simulation['Company Account']['companyAccount'] += getDepositAmount();
    console.log(`Company Account balance after deposit: £${simulation['Company Account']['companyAccount']}`)
    addDays(2);
}

function monthlyInstallmentPay() {
    console.log(`The company has agreed to pay £${getInstallmentAmount()} for ${simulation['Contract']['timeline']} months every ${simulation['Contract']['paymentPerMonth']} month/s`);
    console.log(`Company Account balance before installment payment: £${simulation['Company Account']['companyAccount']}`);
    simulation['Company Account']['companyAccount'] += getInstallmentAmount();
    console.log(`Company Account balance after installment payment: £${simulation['Company Account']['companyAccount']}`);

}

function getDepositAmount() {

    return parseInt(simulation['Contract']['rawProjectCost'] * (simulation['Contract']['depositPercent'] / 100))

}

function getInstallmentAmount() {

    return parseInt((simulation['Contract']['rawProjectCost'] - getDepositAmount()) / simulation['Contract']['timeline'])


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
    console.log(simulation['Project Plan']);
    addDays(2);

}

/**
 * need to get this from the size of the project, and what technologies are used
 * might want to create a calsulation instead to determine how many instead of hard code DISCUSS
 */
function calculateTeamResources() {

    let type = simulation['Projects']['Proposed Project']['type'];
    console.log(type);
    let size = simulation['Projects']['Proposed Project']['size'];
    console.log(size);
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
            test = 1;
        }
        else if (size == 'large') {
            junDevs = 3;
            intDevs = 2;
            senDevs = 1;
            design = 2;
            test = 1;
        }

        if (size == 'enterprise') {
            junDevs = 4;
            intDevs = 3;
            senDevs = 2;
            design = 2;
            test = 2;
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
            test = 1;
        }
        else if (size == 'large') {
            junDevs = 5;
            intDevs = 2;
            senDevs = 2;
            design = 2;
            test = 2;
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
            test = 1;
        }
        else if (size == 'large') {
            junDevs = 4;
            intDevs = 2;
            senDevs = 2;
            design = 2;
            test = 2;
        }

        if (size == 'enterprise') {
            junDevs = 5;
            intDevs = 3;
            senDevs = 3;
            design = 3;
            test = 3;
        }


    }

    console.log(`Based on the size and scope of the project we suggest that there should be ${junDevs} junior developers, ${intDevs} intermediate developers, ${senDevs} senior develpers, ${design} designers, and ${test} testers`);
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
        team[teamMember] = (simulation['Project Team']['Development Team'][teamMember])
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < intDevsCount; i++) {
        let teamMember = languageExperience(web, app, database, server, 'Intermediate Developer', excludedNames)
        team[teamMember] = (simulation['Project Team']['Development Team'][teamMember])
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < senDevsCount; i++) {
        let teamMember = languageExperience(web, app, database, server, 'Senior Developer', excludedNames)
        team[teamMember] = (simulation['Project Team']['Development Team'][teamMember])
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < testCount; i++) {
        let teamMember = addTesterOrDesigner('Testing', excludedNames)
        team[teamMember] = (simulation['Project Team']['Testing'][teamMember])
        excludedNames.push(teamMember)
    }
    for (let i = 0; i < designCount; i++) {
        let teamMember = addTesterOrDesigner('Design', excludedNames)
        team[teamMember] = (simulation['Project Team']['Design'][teamMember])
        excludedNames.push(teamMember)
    }

    return team;


}

function languageExperience(web, app, database, server, role, excluded) {


    let mostExperienceYears = 0;
    let mostExperienced;
    let devs = Object.keys(simulation['Project Team']['Development Team']);
    devs.forEach((dev) => {
        let isExcluded = false;
        if (simulation['Project Team']['Development Team'][dev]['role'] == role) {
            for (let i = 0; i < excluded.length; i++) {
                if (dev == excluded[i]) {
                    isExcluded = true;
                }
            }
            if (!isExcluded) {
                let languages = Object.keys(simulation['Project Team']['Development Team'][dev]['languages'])
                let yearsExperience = 0;
                languages.forEach((language) => {
                    if (language == web) {
                        yearsExperience += simulation['Project Team']['Development Team'][dev]['languages'][language];
                    } else if (language == app) {
                        yearsExperience += simulation['Project Team']['Development Team'][dev]['languages'][language];
                    } else if (language == database) {
                        yearsExperience += simulation['Project Team']['Development Team'][dev]['languages'][language];
                    } else if (language == server) {
                        yearsExperience += simulation['Project Team']['Development Team'][dev]['languages'][language];
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

    let employees = Object.keys(simulation['Project Team'][role]);
    employees.forEach((employee) => {
        let isExcluded = false;
        for (let i = 0; i < excluded.length; i++) {
            if (employee == excluded[i]) {
                isExcluded = true;
            }
        }

        if (!isExcluded) {
            let yearsExperience = simulation['Project Team'][role][employee]['experience'];
            if (mostExperienceYears < yearsExperience) {
                mostExperienced = employee;
                mostExperienceYears = yearsExperience;
            }
        }

    });
    return mostExperienced;

}


function startProject() {
    console.log("A project has been started");
}

function sprint(userStory1, userStoryDescription1, userStory2, userStoryDescription2) {
    updateOngoingWorkHoursForSprint(true);
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
    updateOngoingWorkHoursForSprint(false);
}






function sprintOne(userStoryTitle, userStoryDescription) {

    console.log("Project manager discuesses Sprint Planning with development and design team.");
    console.log(`User Story: ${userStoryTitle} added to Sprint Plan`);
    //need to work out a way of how many people will be assigned to a user story
    let totalDevs = simulation['Team Make-Up']['Junior Developers'] + simulation['Team Make-Up']['Intermediate Developers'] + simulation['Team Make-Up']['Senior Developers']
    createUserStory(userStoryTitle, userStoryDescription, totalDevs, simulation['Team Make-Up']['Designers'], simulation['Team Make-Up']['Testers']);
    console.log("Braking stories into smaller tasks");
    //designer needed true or false
    //creating random tickets and assigning team members. Assign team members needs a better algorithm for deciding who get assigned what ticket
    breakingStoriesIntoTickets(userStoryTitle, generateRandomIntegerInRange(3, 8), generateRandomIntegerInRange(0, 1));
    console.log("******************");
    //at here we'll want to start assigning tickets
    console.log("Design and Implementation");
    addDays(1);
}




function sprintTwo(userStory) {
    console.log("Stand Up");
    console.log("Project Manager Review Sprint Plan");
    console.log("Design and Implementation");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintThree(userStory) {
    console.log("Stand Up");
    console.log("Project Manager Review Sprint Plan");
    console.log("Design and Implementation");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintFour(userStory) {
    console.log("Stand Up");
    console.log("Project Manager and Project Team Review Sprint Plan");
    console.log("Design and Implementation");
    console.log("Expectations set");
    console.log("Discussions with client");
    sprintDiscussionWithClient(userStory);
    //want to do some update could change the amount of proposed hours.
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);

}

function sprintFive(userStory) {
    console.log("Stand Up");
    console.log("Project Manager prepares next sprint");
    console.log("Design and Implementation");
    console.log("Shaping Stories for Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintSix(userStory) {
    console.log("Stand Up");
    console.log("Project Manager prepares next sprint");
    console.log("Design and Implementation");
    console.log("Design - Shaping Stories for Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}


function sprintSeven(userStory) {
    console.log("Stand Up");
    console.log("Project Manager - What is likely to be available to demo");
    console.log("Design - Finishing touches for current sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintEight(userStory) {
    console.log("Standup Feature Complete");
    console.log("Project Manager prepares Demo");
    console.log("Design - Finishing touches for current sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintNine(userStory) {

    console.log("Stand Up");
    console.log("Project Manager prepares next sprint");
    console.log("Design - Shaping Stories for Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintTen(userStory) {
    console.log("Stand Up Retro");
    console.log("Project Manager Prepares Next Sprint");
    console.log("Design - Shaping Stories for Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintEleven(userStoryTitle, userStoryDescription) {
    console.log("Project manager discuesses Sprint Planning with development and design team.");
    console.log(`User Story: ${userStoryTitle} added to Sprint Plan`);
    //need to work out a way of how many people will be assigned to a user story
    let totalDevs = simulation['Team Make-Up']['Junior Developers'] + simulation['Team Make-Up']['Intermediate Developers'] + simulation['Team Make-Up']['Senior Developers']
    createUserStory(userStoryTitle, userStoryDescription, totalDevs, simulation['Team Make-Up']['Designers'], simulation['Team Make-Up']['Testers']);
    console.log("Braking stories into smaller tasks");
    //designer needed true or false
    //creating random tickets and assigning team members. Assign team members needs a better algorithm for deciding who get assigned what ticket
    breakingStoriesIntoTickets(userStoryTitle, generateRandomIntegerInRange(3, 8), generateRandomIntegerInRange(0, 1));
    console.log("******************");
    console.log("User Stories");
    console.log(simulation['User Stories']);
    //at here we'll want to start assigning tickets
    console.log("Design and Implementation");
    addDays(1);
}

function sprintTwelve(userStory) {
    console.log("Stand Up");
    console.log("Project Manager Sprint Planning");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintThirteen(userStory) {
    console.log("Stand Up");
    console.log("Project Manager Sprint Planning");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintFourteen(userStory) {
    console.log("Stand Up");
    console.log("Project Team Sprint Review");
    console.log("Project Manager Sprint Review");
    console.log("Design Sprint Review");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}


function sprintFifteen(userStory) {
    console.log("Stand Up");
    console.log("Project Manager - Prepare Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintSixteen(userStory) {
    console.log("Stand Up");
    console.log("Project Manager - Prepare Next Sprint");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintSeventeen(userStory) {
    console.log("Stand Up");
    console.log("Project Manager - Understand what is likely to be available to demo");
    workOnTicket(userStory);
    progressReport(userStory);
    addDays(1);
}

function sprintEighteen() {
    console.log("Stand Up Feature Complete");
    console.log("Project Manager - prepare demo");
    addDays(1);
}


function sprintNineteen() {
    console.log("Stand Up");
    console.log("Project Team Sprint Review");
    console.log("Project Manager Sprint Review");
    console.log("Design Sprint Review");
    addDays(1);
}

function sprintTwenty() {
    console.log("Stand Up Retro");
    console.log("Project Manager Prepares Next Sprint");
    addDays(1);
}





function createUserStory(title, description, developersNeeded, designersNeeded, testersNeeded) {

    simulation['User Stories'][title] = {};
    simulation['User Stories'][title]['description'] = description;
    simulation['User Stories'][title]['developersNeeded'] = developersNeeded;
    simulation['User Stories'][title]['designersNeeded'] = testersNeeded;
    simulation['User Stories'][title]['testersNeeded'] = designersNeeded;
    //create empty container for tickets to be added to later
    simulation['User Stories'][title]['tickets'] = {};

}

function createTicket(userStory, ticketTitle, description, proposedWorkInHours, priority, designerRequired) {
    simulation['User Stories'][userStory]['tickets'][ticketTitle] = {};
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['ticketDescription'] = description;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['proposedWorkInHours'] = proposedWorkInHours;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['actualWorkInHours'] = 0;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['isComplete'] = false;
    //create empty container for technologies to be added seperately
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['technologies'] = {};
    //create empty container for team members to be added seperately
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['assignedTeamMembers'] = {};
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['priority'] = priority;
    simulation['User Stories'][userStory]['tickets'][ticketTitle]['designerRequired'] = designerRequired;

}

//this is really dumb this definitley needs changed, but okay for now
function determineTeamMemberAmountForTicket(proposedWorkInHours, designerRequired) {
    let needed = 0
    if (designerRequired == 1) {
        needed = -1;
    }
    if (proposedWorkInHours <= 90) {
        needed = 3
    } else if (proposedWorkInHours <= 120) {
        needed = 4
    } else if (proposedWorkInHours <= 170) {
        needed = 5
    }

    return needed;

}


function assignTicketWorkers(userStory, ticketName) {
    let designerNeeded = simulation['User Stories'][userStory]['tickets'][ticketName]['designerRequired'];
    let teamMembersNeeded = determineTeamMemberAmountForTicket(simulation['User Stories'][userStory]['tickets'][ticketName]['proposedWorkInHours'], simulation['User Stories'][userStory]['tickets'][ticketName]['designerRequired']);
    let technologies = Object.keys(simulation['User Stories'][userStory]['tickets'][ticketName]['technologies']);
    let teamMembers = Object.keys(simulation['Projects']['Proposed Project']['team']);
    let proposedWorkInHours = parseInt(simulation['User Stories'][userStory]['tickets'][ticketName]['proposedWorkInHours'] / 2);
    //want to loop through all developers and get a total off all the languages they have
    //remove hours for meetings 2hours per week
    let totalHoursPerWeek = parseInt(proposedWorkInHours / 2);
    let hoursPerMember;
    if (designerNeeded) {
        hoursPerMember = parseInt(totalHoursPerWeek / (teamMembersNeeded + 1));
    } else {
        hoursPerMember = parseInt(totalHoursPerWeek / teamMembersNeeded);
    }


    let excluded = new Array();


    for (let i = 0; i < teamMembersNeeded; i++) {
        let mostExperienceYears = 0;
        let mostExperienced;
        teamMembers.forEach((member) => {
            let yearsExp = 0;
            let totalExp = 0;
            let isExcluded = false;
            let workingHoursPerDay = simulation['Projects']['Proposed Project']['team'][member]['hoursPerTicket'];
            if (workingHoursPerDay < 1) {

            }

            for (let i = 0; i < excluded.length; i++) {
                if (member == excluded[i]) {
                    isExcluded = true;
                }
            }
            if (!isExcluded) {
                //check if member is a developer first
                if (simulation['Projects']['Proposed Project']['team'][member]['role'].includes('Developer')) {

                    //get a total of years experience from team member for all techs in ticket
                    technologies.forEach((tech) => {
                        let language = simulation['User Stories'][userStory]['tickets'][ticketName]['technologies'][tech];
                        if (typeof simulation['Project Team']['Development Team'][member]['languages'][language] !== 'undefined') {
                            yearsExp += simulation['Project Team']['Development Team'][member]['languages'][language];
                        }

                    });
                    totalExp += yearsExp;
                }
                if (mostExperienceYears < yearsExp) {
                    mostExperienced = member;
                    mostExperienceYears = yearsExp;
                }
            }

        });

        excluded.push(mostExperienced);


    }



    if (designerNeeded == 1) {
        let mostExperienceYears = 0;
        let mostExperienced;
        teamMembers.forEach((member) => {

            if (simulation['Projects']['Proposed Project']['team'][member]['role'] == 'Design') {
                let yearsExp = simulation['Projects']['Proposed Project']['team'][member]['experience'];
                if (mostExperienceYears < yearsExp) {
                    mostExperienced = member;
                    mostExperienceYears = yearsExp;
                }
            }

        });
        excluded.push(mostExperienced);
    }


    for (let i = 0; i < excluded.length; i++) {

        simulation['User Stories'][userStory]['tickets'][ticketName]['assignedTeamMembers'][excluded[i]] = simulation['Projects']['Proposed Project']['team'][excluded[i]];

    }



}

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
        createTicket(userStory, 'Ticket ' + (i + 1), 'Description for ticket ' + (i + 1), generateRandomIntegerInRange(80, 130), generateRandomIntegerInRange(1, 5), generateRandomIntegerInRange(0, 1));
        generateTechnology(userStory, 'Ticket ' + (i + 1));
        //assign team members to ticket
        assignTicketWorkers(userStory, 'Ticket ' + (i + 1));
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

function workOnTicket(userStory) {
    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    tickets.forEach((ticket) => {
        if (!simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']) {
            let teamMembers = Object.keys(simulation['User Stories'][userStory]['tickets'][ticket]['assignedTeamMembers']);
            let totalHoursWorked = 0;
            teamMembers.forEach((member) => {
                let rand = generateRandomIntegerInRange(0, 7);
                totalHoursWorked += rand;
                //for now random number, but will be calculate by member
                simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours'] += rand;
            });
            //         console.log(`There has been a total of ${totalHoursWorked} hours worked on ${ticket}`);
        } else {
            console.log(`${ticket}: is completed`);
        }
        if (simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours'] >= simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours']) {
            console.log(`${ticket} is now complete, freeing up resources....`);
            //will actually need to code this in, but first will need to make assigning more complex
            simulation['User Stories'][userStory]['tickets'][ticket]['isComplete'] = true;
        }
    })
}

function progressReport(userStory) {


    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    tickets.forEach((ticket) => {

        if (!simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']) {

            //         console.log(`${ticket}: Proposed Hours to completion: ${simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours']} Current hours worked: ${simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours']}`);
        } else {
            console.log(`${ticket}: took ${simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours']}`);
        }
    });
}

function sprintDiscussionWithClient(userStory) {

    let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
    tickets.forEach((ticket) => {

        //create a random num generate - after discussions with client they may want to change the work which will either increase or decrease amount of time
        let rand = generateRandomIntegerInRange(-5, 15);
        simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours'] += rand;
        console.log(`Updated hours for ${ticket}: ${rand}. Current Proposed work hours: ${simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours']}`);

    });
}



/*
adds a number of days to date
*/

function addDays(days) {

    simulation.date.setDate(simulation.date.getDate() + days);

}

console.log(simulation);

// function developPrototype() {
//     console.log("A prototype has been developed");
// }

// function testPrototype() {
//     console.log("Testing has commenced on the most recent prototype");
// }

// function customerApproval() {
//     console.log("The customer has approved the last action");
// }

// function developFinalPrototype() {
//     console.log("A final prototype has been developed");
// }

// function testFinalPrototype() {
//     console.log("Testing of the final prototype has been created");
// }

// function productChanges() {
//     console.log("Product Changes");
// }

// function productCreated() {
//     console.log("Final Product Created");
// }

function softwareSubscriptions() {

    let software = Object.keys(simulation['Projects']['Inhouse Software']);
    software.forEach((software) => {
        let subscriberIncome = simulation['Projects']['Inhouse Software'][software]['subscribers'] * simulation['Projects']['Inhouse Software'][software]['monthlySubscription'];
        console.log(`${simulation['Projects']['Inhouse Software'][software]['subscribers']} are subscribed to ${software} adding £${subscriberIncome} to company income.`)
        simulation['Company Account']['companyAccount'] += subscriberIncome;
    });
}

function yearlyDevelopmentIncome() {

    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {


        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
            let yearlyDevelopmentIncome = simulation['Projects'][project]['developmentContract']['hoursPerYear'] * simulation['Development Work']['costPerHour'];
            console.log(`${project} generates £${yearlyDevelopmentIncome} yearly for development work`);
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
            console.log(`${project} generates £${monthlySupportContracts} monthly for support`);
            simulation['Company Account']['companyAccount'] += monthlySupportContracts;
        }
    })

}

function monthlyHostingFees() {
    let projects = Object.keys(simulation['Projects']);
    projects.forEach((project) => {


        if ((project !== "Inhouse Software") && (project !== "Proposed Project")) {
            let hostingFees = simulation['Projects'][project]['monthlyHostingFees']
            console.log(`${project} generates £${hostingFees} monthly for hosting fees`);
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
        employees.forEach((employee) => {
            simulation['Project Team'][team][employee]['assignedWorkHours'] = 0;

        })
    });
}