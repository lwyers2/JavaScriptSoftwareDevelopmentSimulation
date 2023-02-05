// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const simulation = new Array();



simulation['Company Account'] = {
    'companyAccount': 9000000
};

simulation['Pricing'] = {
    'new': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }

    },
    'modification': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }
    },
    'integration': {
        "web": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "database": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "server": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "app": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        },
        "software": {
            'small': 1500,
            'medium': 1750,
            'large': 2000,
            'enterprise': 2500
        }
    },
    'webDev': {
        'small': 1500,
        'medium': 1750,
        'large': 2000,
        'enterprise': 2500
    }
}

//this could be something that is input if the simulation is running a prexisting project for example
// simulation['Tech Stacks'] ={
// }
simulation['Project Team'] = {
    'Project Team': {
        "Phil Elverum": {
            'age': 30,
            'role': 'Senior Developer',
            'experience': 6,
            'tenure': 2,
            'salary': 62000
        },
        "Mimi Parker": {
            'age': 37,
            'role': 'Lead Developer',
            'experience': 14,
            'tenure': 7,
            'salary': 60000
        },
        "Stuart Staples": {
            'age': 23,
            'role': 'Junior Developer',
            'experience': 1,
            'tenure': 1,
            'salary': 28000
        },
        "Jackson Frank": {
            'age': 29,
            'role': 'Junior Developer',
            'experience': 3,
            'tenure': 1,
            'salary': 31000
        },
        "Warren Ellis": {
            'age': 26,
            'role': 'Junior Developer',
            'experience': 3,
            'tenure': 2,
            'salary': 29000
        },
        "Krustin Hayter": {
            'age': 27,
            'role': 'Junior Developer',
            'experience': 4,
            'tenure': 4,
            'salary': 33000
        },
        "Chrustia Cabral": {
            'age': 33,
            'role': 'Design',
            'experience': 10,
            'tenure': 3,
            'salary': 37000
        },
        "Mark Eitzel": {
            'age': 31,
            'role': 'Testing',
            'experience': 6,
            'tenure': 4,
            'salary': 30000
        },
        "Stephen Merritt": {
            'age': 26,
            'role': 'Testing',
            'experience': 3,
            'tenure': 3,
            'salary': 26000
        },
        "Brian Chippendale": {
            'age': 45,
            'role': 'Project Manager',
            'experience': 23,
            'tenure': 15,
            'salary': 54000
        }
    }
};

// Real life example. It terms of whether own comp[any actually takes over the costs for server maintence I'm not 100% sure. Keep simple anyway for now. Just to show how different types of projects may look
simulation['Projects'] = {
    'Proposed MindMe': {
        name: 'Mind Me Stripe Integration',
        company: 'Mind Me ie',
        industry: 'Healthcare',
        type: 'integration',
        size: 'medium',
        techstack: {
            web: 'PHP',
            database: 'Maria SQL',
            server: 'linux'
        },
        hosting: 'aws',
        integration: {
            software: 'Stripe',
            app: 'Web'
        }
    }
}





// // Yearly run 
// monthOne();
// monthTwo();
// monthThreeToFive();
// monthSixToEight();
// monthNineToTwelve();


// // monthly functions

// function monthOne() {
//     console.log("Month 1");
//     console.log("******************");
//     customerContactsCompany();
//     architectureDetermination();
//     negotiations();
//     projectBusinessApproval();
//     monthlyCosts();
//     console.log("Time Period Ended");
//     console.log("******************");
// }

// function monthTwo() {
//     console.log("Month 2");
//     console.log("******************");
//     projectPlan();
//     allocateResources();
//     customerRecommendations();
//     //negotiations();
//     monthlyCosts();
//     console.log("Time Period Ended");
//     console.log("******************");

// }

// function monthThreeToFive() {
//     console.log("Month 3 - 5");
//     console.log("******************");
//     startProject();
//     developPrototype();
//     testPrototype();
//     //businessApproval();
//     customerApproval();
//     //businessApproval();
//     monthlyCosts();
//     monthlyCosts();
//     monthlyCosts();
//     console.log("Time Period Ended");
//     console.log("******************");
// }

// function monthSixToEight() {
//     console.log("Month 6 - 8");
//     console.log("******************");
//     developPrototype();
//     testPrototype();
//     //businessApproval();
//     customerApproval();
//     //businessApproval();
//     monthlyCosts();
//     monthlyCosts();
//     monthlyCosts();
//     console.log("Time Period Ended");
//     console.log("******************");
// }

// function monthNineToTwelve() {
//     console.log("Month 9 - 12");
//     console.log("******************");
//     developFinalPrototype();
//     testFinalPrototype();
//     //businessApproval();
//     customerApproval();
//     productChanges();
//     //businessApproval();
//     productCreated();
//     customerApproval();
//     //businessApproval();
//     monthlyCosts();
//     monthlyCosts();
//     monthlyCosts();
//     monthlyCosts();
//     console.log("Time Period Ended");
//     console.log("******************");
// }

customerContactsCompany();
architectureDetermination();
feasibilityStudy();
createDraftContact();
negotiations();




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
    simulation['Projects']['Proposed Project'] = {
        'company': 'Company Name',
        'companyIdustry': 'Finance',
        'title': 'Proposed Project',
        'type': 'web development',
        'size': 'large',
        'techstack': {
            'web': 'default',
            'app': 'default',
            'database': 'default',
            'server': 'default'
        },
        'hosting': 'default',
        'webDev': {
            'web': 'enterprise'
        },
        //months
        'proposedTimeline': 14,

    }

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
    simulation['Projects']['Proposed Project']['techstack'] = {
        'web': 'PHP',
        'app': 'Swift',
        'database': 'SQL',
        'server': 'linux'
    }

    console.log("The stack includes: ");

    let stack = Object.keys(simulation['Projects']['Proposed Project'].techstack);
    stack.forEach((component) => {
        console.log(`${component}: ${simulation['Projects']['Proposed Project']['techstack'][component]}`);
    });
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

}


/*
There will be a going rate for each type of development project. Each of these types will have a different size modifier.
 
*/

/*
calculate new will have additional costs. Could only be developing a new large system with no app for example, could be web based only with a db.
standard costs will be eventually stored in json file like projects and empoloyees above
*/
function calculateInitialCost() {

    simulation['Component Costs'] = {
        'web': 0,
        'app': 0,
        'database': 0,
        'server': 0,
        'software': 0,

    }

    if (simulation['Projects']['Proposed Project']['type'] == 'new') {
        //calculateNew();


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

    simulation['Contract'] = {

        'rawComponentCosts': getProjectCostRaw(),
        'legalCosts': 3000,
        'depositPercent': 5,
        //will flesh this out to include multiple support packages
        'supportPackage': 'included',
        'additionalComponets': 'n/a',
        //company/customer/thirdparty
        'intellecualRights': 'company',
        //this will be deduced from size of product eventually. Create a timeline breakdown along with testing
        'timeline': 14,
        //how uch payment in terms of months
        'paymentPerMonth': 1,
        //length in months 
        'continuedSupport': 24
    }

    console.log("The proposed contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        console.log(component + ": " + simulation['Contract'][component])

    });


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
    simulation['Contract']['continuedSupport'] += generateRandomIntegerInRange(-3, +3);

    console.log("After the negotiations the contract is as follows: ")

    let contract = Object.keys(simulation['Contract']);
    contract.forEach((component) => {
        console.log(component + ": " + simulation['Contract'][component])

    });
}


function getProjectCostRaw() {
    let total = 0;
    let rawCosts = Object.keys(simulation['Component Costs']);
    rawCosts.forEach((cost) => {
        total += simulation['Component Costs'][cost];
    });

    return total;

}

/* 
Going to create 
*/
function projectBusinessApproval() {

    let estimatedCost = 0;
    let deposit = 0;

    simulation['Contract'] = {

        //costs - time and materials
        'estimatedCosts': estimatedCost,
        'deposit': deposit,
        //calculate months dependant on size
        'timelineInMonths': 15,
        //i.e every 2 months
        'installmentsMonthly': 2
    }

    console.log("The business has approved the following: " + simulation['Projects']["Approved Project"].title);


}


function monthlyCosts() {



    console.log("Account total before Monthly Costs: £" + simulation['Company Account'].companyAccount);
    for (const person in simulation['Project Team']['Project Team']) {
        simulation['Company Account'].companyAccount -= simulation['Project Team']['Project Team'][person]['Salary'];
    }
    for (const cost in simulation['Monthly Costs']) {
        simulation['Company Account'].companyAccount -= simulation['Monthly Costs'][cost];
    }
    console.log("Account total after Monthly Costs: £" + simulation['Company Account'].companyAccount);

}

function projectPlan() {
    let projectPlan = { component: 'Project Plan', specification: 'Project Specification', timeline: '1 Year' };
    simulation.push(projectPlan);
    console.log("Project Plan has been created");

}

function allocateResources() {



    simulation['Monthly Costs'] = {
        projectServer: 10000,
        hostingFees: 5000,
        additionalSoftware: 2000,
        hardware: 2000,
        officeRental: 1000
    };




}

function customerRecommendations() {
    console.log("Customer has added recomendations to project - extra costs added: £4000");

}

function startProject() {
    console.log("A project has been started");
}

function developPrototype() {
    console.log("A prototype has been developed");
}

function testPrototype() {
    console.log("Testing has commenced on the most recent prototype");
}

function customerApproval() {
    console.log("The customer has approved the last action");
}

function developFinalPrototype() {
    console.log("A final prototype has been developed");
}

function testFinalPrototype() {
    console.log("Testing of the final prototype has been created");
}

function productChanges() {
    console.log("Product Changes");
}

function productCreated() {
    console.log("Final Product Created");
}