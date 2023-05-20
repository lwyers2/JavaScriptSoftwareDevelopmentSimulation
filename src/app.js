let state = new Array();
let monthlyState = new Array();



function run(days) {




    let projectStatus = simulation['Project Status']['title'];

    if (projectStatus == 'simulationComplete') {
        days = 0;

    }

    for (let i = 0; i < days; i++) {



        projectStatus = simulation['Project Status']['title'];


        if (simulation['Project Status']['complete'] == true) {
            progressStatusTimeLine(projectStatus);
            projectStatus = simulation['Project Status']['title'];
        }

        runEvent(projectStatus);
        updateProjectStatusDay();
        completeProjectStatus();
        addDays(1);

        if (projectStatus == 'simulationComplete') {
            days = 0;

        }




        printTickets();
        printUserStories();
        printEmployees();

        state.push(JSON.stringify(simulation));
        // let printSimulation = document.getElementById('simulation');
        // printSimulation.innerHTML = JSON.stringify(simulation)

    }






}
console.log(simulation);


function monthlyFunctions() {


    monthlyInstallmentPay();
    softwareSubscriptions();

    monthlySupportContracts();
    monthlyHostingFees();
    monthlyWebsiteInvoices();
    deductCosts(calculateMonthlyCosts());
    let date = new Date(simulation['Date']);
    monthlyState.push(JSON.stringify(simulation));
    renderGraph(monthlyState);
}


function printEmployees() {
    let employeeDiv = document.getElementById('employees');
    let table = "";

    table += `<table class="table">
    <caption style="font-weight: bold">
        Employees
    </caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Tenure</th>
            <th><abbr title="Satisfaction Matrix"></abbr>Qual</th>
            <th><abbr title="Performance Review"></abbr>Eff</th>
        </tr>
    </thead>`;





    let teams = Object.keys(simulation['Employees']);

    teams.forEach((team) => {

        let employees = Object.keys(simulation['Employees'][team]);
        employees.forEach((employee) => {

            table += `<tbody>`;
            table += `<tr>`
            table += ` <td>${employee}</td>`
            table += `<td>${simulation['Employees'][team][employee]['role']}</td>`;
            table += `<td>£${simulation['Employees'][team][employee]['salary'] * 12} p/m</td>`;
            table += `<td>${simulation['Employees'][team][employee]['experience']}</td>`;
            table += `<td>${simulation['Employees'][team][employee]['tenure']}</td>`;
            table += `<td>${simulation['Employees'][team][employee]['workQuality']}</td>`;
            table += `<td>${simulation['Employees'][team][employee]['workEffeciency']}</td>`
            table += `</tr></tbody>`

        })
    })
    table += '</tbody></table>';

    employeeDiv.innerHTML = table;
}

function printUserStories() {

    let userStoriesDiv = document.getElementById('user-stories');

    table = `  </br>
    <table class="table">
    <caption style="font-weight: bold">
        User Stories
    </caption>
    <thead>
        <tr>
            <th>Title</th>
            <th><abbr title="Ticket Amount"></abbr>Tcks</th>
            <th><abbr title="Proposed Work Hours">PWH</abbr></th>
            <th><abbr title="Actual Work Hours">AWH</abbr></th>
            <th><abbr title="Proposed Testing Time">PTT</abbr></th>
            <th><abbr title="Actual Testing Time">ATT</abbr></th>
            <th><abbr title="Average Quality">Qua</abbr></th>
        </tr>
    </thead>`;

    let userStories = Object.keys(simulation['User Stories']);

    userStories.forEach((userStory) => {
        let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
        let count = 0;
        let actualWH = 0;
        let proposedWH = 0;
        let actualTT = 0;
        let proposedTT = 0;
        let totalQual = 0;
        tickets.forEach((ticket) => {
            count++;
            proposedWH += simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours']
            actualWH += simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours']
            actualTT += simulation['User Stories'][userStory]['tickets'][ticket]['actualTestingTime']
            totalQual += simulation['User Stories'][userStory]['tickets'][ticket]['avgQual']
            proposedTT += simulation['User Stories'][userStory]['tickets'][ticket]['proposedTestingTime']
        })
        totalQual /= count;
        actualWH = actualWH.toFixed(2);
        proposedWH = proposedWH.toFixed(2);
        actualTT = actualTT.toFixed(2);
        proposedTT = proposedTT.toFixed(2);
        totalQual = totalQual.toFixed(2);


        table += `<tbody>`;
        table += `<tr>`
        table += ` <td>${userStory}</td>`
        table += `<td>${count}</td>`;
        table += `<td>${proposedWH}</td>`;
        table += `<td>${actualWH}</td>`;
        table += `<td>${actualTT}</td>`;
        table += `<td>${proposedTT}</td>`;
        table += `<td>${totalQual}</td>`;
        table += `</tr></tbody>`
    })

    table += '</tbody></table>';

    userStoriesDiv.innerHTML = table;



}



function printTickets() {
    let ticketsDiv = document.getElementById('tickets');
    let table = "";

    table = `  </br>
    <table class="table">
    <caption style="font-weight: bold">
        Tickets
    </caption>
    <thead>
        <tr><th><abbr title="User Story"></abbr>UsrStr</th>
            <th>Title</th>
            <th><abbr title="Proposed Work Hours">PWH</abbr></th>
            <th><abbr title="Actual Work Hours">AWH</abbr></th>
            <th><abbr title="Proposed Testing Time">PTT</abbr></th>
            <th><abbr title="Actual Testing Time">ATT</abbr></th>
            <th><abbr title="Average Quality">Qua</abbr></th>
            <th><abbr title="Rework Given">RG</abbr></th>
            <th><abbr title="Is Complete">CMPL</abbr></th>


        </tr>
    </thead>`;


    let userStories = Object.keys(simulation['User Stories']);

    userStories.forEach((userStory) => {
        let tickets = Object.keys(simulation['User Stories'][userStory]['tickets']);
        tickets.forEach((ticket) => {

            table += `<tbody>`;
            table += `<tr>`
            table += ` <td>${userStory}</td>`
            table += ` <td>${ticket}</td>`
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['proposedWorkInHours'].toFixed(2)}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['actualWorkInHours'].toFixed(2)}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['proposedTestingTime'].toFixed(2)}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['actualTestingTime'].toFixed(2)}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['avgQual'].toFixed(2)}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['reworkGiven']}</td>`;
            table += `<td>${simulation['User Stories'][userStory]['tickets'][ticket]['isComplete']}</td>`;
            table += `</tr></tbody>`

        })


    });

    table += '</tbody></table>';

    ticketsDiv.innerHTML = table;

}

function renderGraph(state) {



    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Revenue"
        },
        data: [
            {
                type: "line",
                dataPoints: [

                ]
            },
            {
                type: "line",
                dataPoints: [


                ]
            },
            {
                type: "line",
                dataPoints: [


                ]
            }
        ]
    });


    for (let i = 0; i < state.length; i++) {

        let data = JSON.parse(state[i]);
        let date = new Date(data["Date"]);
        let year = date.getFullYear();
        let month = date.getMonth();
        month += 1
        year -= 2023;
        month -= 3;
        year *= 12
        month += year;

        chart.options.data[0].dataPoints.push({ x: month, y: data['Company Account']['companyAccount'] });

    }
    chart.render();

}


// function printMonthlyRevenue() {


//     let monthlyRevenue = document.getElementById("monthly-revenue");
//     monthlyRevenue.
//     monthlyRevenue.innerHTML += `<p>${simulation['Date']}</p></br>`
//     monthlyRevenue.innerHTML += `<p>************************************</p></br>`
//     monthlyRevenue.innerHTML += `<p>Monthly Income and Expenditure</p></br>`
//     monthlyRevenue.innerHTML += `<p>************************************</p></br>`
//     monthlyRevenue.innerHTML += `<p><u>EXPENDITURE:</u></p></br>`
//     let salaryTotal = calculateSalaries();
//     monthlyRevenue.innerHTML += `<p><u>SALARIES</u></p></br>`
//     monthlyRevenue.innerHTML += `<p>Salaries: £${salaryTotal}</p></br>`
//     monthlyRevenue.innerHTML += `<p><u>AD HOC COSTS</u></p></br>`
//     printMonthlyCosts();




// }

// function printMonthlyCosts() {
//     let monthlyRevenue = document.getElementById("monthly-revenue");
//     let costs = Object.keys(simulation['Ad Hoc Costs']);
//     costs.forEach((cost) => {
//         monthlyRevenue.innerHTML += `<p>${cost}: ${simulation['Ad Hoc Costs'][cost]}</p></br>`;
//     });
// }

