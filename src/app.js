// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const simulation = new Array();

simulation['Projects'] = {
    "Proposed Project": {
        component: 'Proposed Project',
        company: 'Company Name',
        title: 'Proposed Project',
        techStack: 'MERN',
        proposedProfit: 1000000,
        proposedTimeline: 1,
        projectAgreed: false
    }
};

simulation['Company Account'] = {
    companyAccount: 9000000,
    monthlyPay: 350000
};




// // Yearly run 
monthOne();
monthTwo();
monthThreeToFive();
monthSixToEight();
monthNineToTwelve();


// // monthly functions

function monthOne() {
    console.log("Month 1");
    console.log("******************");
    customerContactsCompany();
    negotiations();
    projectBusinessApproval();
    monthlyCosts();
    console.log("Time Period Ended");
    console.log("******************");
}

function monthTwo() {
    console.log("Month 2");
    console.log("******************");
    projectPlan();
    allocateResources();
    customerRecommendations();
    //negotiations();
    monthlyCosts();
    console.log("Time Period Ended");
    console.log("******************");

}

function monthThreeToFive() {
    console.log("Month 3 - 5");
    console.log("******************");
    startProject();
    developPrototype();
    testPrototype();
    //businessApproval();
    customerApproval();
    //businessApproval();
    monthlyCosts();
    console.log("Time Period Ended");
    console.log("******************");
}

function monthSixToEight() {
    console.log("Month 6 - 8");
    console.log("******************");
    developPrototype();
    testPrototype();
    //businessApproval();
    customerApproval();
    //businessApproval();
    monthlyCosts();
    console.log("Time Period Ended");
    console.log("******************");
}

function monthNineToTwelve() {
    console.log("Month 9 - 12");
    console.log("******************");
    developFinalPrototype();
    testFinalPrototype();
    //businessApproval();
    customerApproval();
    productChanges();
    //businessApproval();
    productCreated();
    customerApproval();
    //businessApproval();
    monthlyCosts();
    console.log("Time Period Ended");
    console.log("******************");
}



// Event functions
function customerContactsCompany() {

    console.log("A new company has proposed a new project");
    simulation['Projects'] = {
        "Proposed Project": {
            company: 'Company Name',
            title: 'Proposed Project',
            techStack: 'MERN',
            proposedProfit: 1000000,
            proposedTimeline: 1,
            projectAgreed: false
        }
    }
}


function negotiations() {
    //some form of logic needed here to simulate the change of the proposed project changing to produce a contract
    // random percentage to either increment or decrement profit
    let change = generateRandomInteger(1, 15);
    let originalProfit = simulation['Projects']['Proposed Project'].proposedProfit;
    let newProfit = parseInt(originalProfit + (originalProfit * (change / 100)));

    simulation['Contract'] = {
        techStack: 'MERN',
        profit: newProfit,
        timeline: 1,
        legalFees: 40000
    }

    simulation['Company Account'].companyAccount -= simulation['Contract'].legalFees;



}

function projectBusinessApproval() {

    simulation['Projects']["Approved Project"] = {
        company: simulation['Projects']["Proposed Project"].company,
        title: simulation['Projects']["Proposed Project"].title,
        techStack: simulation["Contract"].techStack,
        profit: simulation['Contract'].profit,
        proposedTimeline: simulation['Contract'].timeline,
        projectAgreed: true,
        monthlyCosts: 0
    }

    simulation['Company Account'].companyAccount += simulation['Projects']["Approved Project"].profit;
    console.log("The business has approved the following: " + simulation['Projects']["Approved Project"].title);


}


function monthlyCosts() {



    console.log("Account total before Monthly Costs: £" + simulation['Company Account'].companyAccount);
    simulation['Company Account'].companyAccount = simulation['Company Account'].companyAccount - (simulation['Projects']['Approved Project'].monthlyCosts + simulation['Company Account'].monthlyPay);
    console.log("Account total after Monthly Costs: £" + simulation['Company Account'].companyAccount);

}

function projectPlan() {
    let projectPlan = { component: 'Project Plan', specification: 'Project Specification', timeline: '1 Year' };
    simulation.push(projectPlan);
    console.log("Project Plan has been created");

}

function allocateResources() {

    simulation['projectTeam'] = {
        'Project Team': {
            "Phil Elverum": {
                "Age": 30,
                "Role": 'Senior Developer',
                "Experience": 6,
                "Tenure": 2
            },
            "Mimi Parker": {
                "Age": 37,
                "Role": 'Lead Developer',
                "Experience": 14,
                "Tenure": 7
            },
            "Stuart Staples": {
                "Age": 23,
                "Role": 'Junior Developer',
                "Experience": 1,
                "Tenure": 1
            },
            "Jackson Frank": {
                "Age": 29,
                "Role": 'Junior Developer',
                "Experience": 3,
                "Tenure": 1
            },
            "Warren Ellis": {
                "Age": 26,
                "Role": 'Junior Developer',
                "Experience": 3,
                "Tenure": 2
            },
            "Krustin Hayter": {
                "Age": 27,
                "Role": 'Junior Developer',
                "Experience": 4,
                "Tenure": 4
            },
            "Chrustia Cabral": {
                "Age": 33,
                "Role": 'Design',
                "Experience": 10,
                "Tenure": 3
            },
            "Mark Eitzel": {
                "Age": 31,
                "Role": 'Testing',
                "Experience": 6,
                "Tenure": 4
            },
            "Stephen Merritt": {
                "Age": 26,
                "Role": 'Testing',
                "Experience": 3,
                "Tenure": 3
            },
            "Brian Chippendale": {
                "Age": 45,
                "Role": 'Project Manager',
                "Experience": 23,
                "Tenure": 15
            }
        }
    };

    simulation['Monthly Costs'] = {
        projectServer: 10000,
        hostingFees: 5000,
        additionalSoftware: 2000,
        hardware: 2000,
        officeRental: 1000
    };


    for (const cost in simulation['Monthly Costs']) {
        simulation['Projects']["Approved Project"].monthlyCosts += simulation['Monthly Costs'][cost];
    }

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