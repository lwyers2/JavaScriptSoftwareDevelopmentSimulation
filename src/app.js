const companyAccount = { component: 'Company Account', companyAccount: 900000 };
const simulation = new Array();
simulation.push(companyAccount);
console.log(simulation[getComponent('Company Account')].companyAccount);
const companyMonthlyCosts = { component: 'Monthly Costs', total: 0 };
simulation.push(companyMonthlyCosts);
const monthlyPay = 35000;
simulation[getComponent('Monthly Costs')].total += monthlyPay;








// Yearly run 
monthOne();
monthTwo();
monthThreeToFive();
monthSixToEight();
monthNineToTwelve();


// monthly functions

function monthOne() {
    console.log("Month 1");
    console.log("******************");
    customerContactsCompany();
    negotiations();
    businessApproval('Contract');
    prjectWorkApproval('Contract');
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
    negotiations();
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

    let proposedProject = {
        component: 'Proposed Project',
        company: 'Company Name',
        title: 'Proposed Project',
        techStack: 'MERN',
        proposedProfit: 100000,
        proposedTimeline: '1 year'
    }


    simulation.push(proposedProject);

}

function negotiations() {
    //some form of logic needed here to simulate the change of the proposed project changing to produce a contract
    let contract = {
        component: 'Contract',
        techStack: 'MERN',
        cost: 100000,
        timeline: '1 Year',
        legalFees: 40000
    }

    updateCompanyAccount(0 - contract.legalFees);
    simulation.push(contract);
}

function businessApproval(approvalComponent) {

    //will add more logic here
    let pos = getComponent(approvalComponent);

    console.log("The business has approved the following: " + simulation[pos].component);

}

function prjectWorkApproval(approvalComponent) {

    let pos = getComponent(approvalComponent);

    console.log("Project Approval has been given for the following: " + simulation[pos].component);
    updateCompanyAccount(simulation[getComponent('Contract')].cost);
    console.log("Company has been credited: £" + simulation[getComponent('Contract')].cost)

}

function monthlyCosts() {


    console.log("Account total before Monthly Costs: £" + simulation[getComponent('Company Account')].companyAccount);
    updateCompanyAccount(0 - simulation[getComponent('Monthly Costs')].total);
    console.log("Account total after Monthly Costs: £" + simulation[getComponent('Company Account')].companyAccount)

}

function projectPlan() {
    let projectPlan = { component: 'Project Plan', specification: 'Project Specification', timeline: '1 Year' };
    simulation.push(projectPlan);
    console.log("Project Plan has been created");

}

function allocateResources() {
    let team = {
        component: 'Project Team', members: [{
            name: 'dev1', name: 'dev2', name: 'dev3', name: 'Testing', name: 'UI'
        }],
        cost: 4000
    }
    let server = { component: 'Project Server', cost: 10000, hostingType: 'physical' }
    let additionalSoftware = { component: 'Additional Software', cost: 5000 }
    let hostingFees = { component: 'Hosting Fees', cost: 2000 }
    simulation[getComponent('Monthly Costs')].total += team.cost + server.cost + additionalSoftware.cost + hostingFees.cost;
}

function customerRecommendations() {
    console.log("Customer Recommendations");
}

function startProject() {
    console.log("Start Project");
}

function developPrototype() {
    console.log("Develop Prototype");
}

function testPrototype() {
    console.log("Test Prototype");
}

function customerApproval() {
    console.log("Customer Approval");
}

function developFinalPrototype() {
    console.log("Develop Final Prototype");
}

function testFinalPrototype() {
    console.log("Test Final Prototype");
}

function productChanges() {
    console.log("Product Changes");
}

function productCreated() {
    console.log("Product Created");
}

function getComponent(companyComponent) {
    for (let i = 0; i < simulation.length; i++) {
        if (simulation[i].component === companyComponent) {
            return i;
        }
    }
}

function updateCompanyAccount(amount) {
    let pos = getComponent('Company Account');
    simulation[pos].companyAccount += amount;
}