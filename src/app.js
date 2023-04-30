// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


setAllDailyAvailableHours(7.5);
setAllDaysToWorkPerWeek(5);
updateEmployeesHoursPerWeek();
setAllAssignedWorkHours(0);


console.log(simulation)
createOngoingProjectTickets()
assignAllOngoingProjectTickets();
generateEmployeeScores();
generateEmployeeWorkRate();


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
    //console.log("Time Period Ended");
    //console.log("******************");
}


function setAdditionalCost(costName, cost) {

    simulation['Additional Costs']['Costs'][costName] = cost;

}




function monthTwo() {
    //console.log("Month 2");
    //console.log("******************");
    projectPlan();
    sprint('User Story 1', 'User Story Description 1', 'User Story 2', 'User Story Description 2');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");
}

function monthThree() {
    //console.log("Month 3");
    //console.log("******************");
    sprint('User Story 3', 'User Story Description 3', 'User Story 4', 'User Story Description 4');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthFour() {
    //console.log("Month 4");
    //console.log("******************");
    sprint('User Story 5', 'User Story Description 5', 'User Story 6', 'User Story Description 6');
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthFive() {
    //console.log("Month 5");
    //console.log("******************");
    sprint('User Story 7', 'User Story Description 7', 'User Story 8', 'User Story Description 8');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthSix() {
    //console.log("Month 6");
    //console.log("******************");
    sprint('User Story 9', 'User Story Description 9', 'User Story 10', 'User Story Description 10');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthSeven() {
    //console.log("Month 7");
    //console.log("******************");
    sprint('User Story 11', 'User Story Description 11', 'User Story 12', 'User Story Description 12');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthEight() {
    //console.log("Month 8");
    //console.log("******************");
    sprint('User Story 13', 'User Story Description 13', 'User Story 14', 'User Story Description 14');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthNine() {
    //console.log("Month 9");
    //console.log("******************");
    sprint('User Story 15', 'User Story Description 15', 'User Story 16', 'User Story Description 16');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthTen() {
    //console.log("Month 10");
    //console.log("******************");
    sprint('User Story 17', 'User Story Description 17', 'User Story 18', 'User Story Description 18');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthEleven() {

    //console.log("Month 11");
    //console.log("******************");
    sprint('User Story 19', 'User Story Description 19', 'User Story 20', 'User Story Description 20');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthTwelve() {
    //console.log("Month 12");
    //console.log("******************");
    sprint('User Story 21', 'User Story Description 21', 'User Story 22', 'User Story Description 22');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}

function monthThirteen() {
    //console.log("Month 13");
    //console.log("******************");
    sprint('User Story 23', 'User Story Description 23', 'User Story 24', 'User Story Description 24');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");

}


function monthFourteen() {
    //console.log("Month 14");
    //console.log("******************");
    sprint('User Story 25', 'User Story Description 26', 'User Story 27', 'User Story Description 27');
    deductCosts(calculateMonthlyCosts());
    monthlyInstallmentPay();
    softwareSubscriptions();
    monthlySupportContracts();
    monthlyHostingFees();
    //console.log("Time Period Ended");
    //console.log("******************");
}



