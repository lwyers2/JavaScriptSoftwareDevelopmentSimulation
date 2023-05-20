let allDates = new Array();


var request = new XMLHttpRequest();

request.open('GET', 'https://www.gov.uk/bank-holidays.json', true);



request.onload = function () {
    //Begin accessing JSON data here
    const dates = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        let events = dates['northern-ireland']['events'];
        events.forEach((event) => {
            let year = event['date'].slice(0, 4);
            simulation['bankHolidays'][year] = {};
        })
        events.forEach((event) => {
            let title = event['title'];
            let date = event['date'];
            let year = event['date'].slice(0, 4);
            simulation['bankHolidays'][year][title] = { 'date': date }
            //simulation['bankHolidays'][title]['date'] = date;
        });

    } else {
        console.log("gov.uk status error: " + request.status);
    }
}





//Send Request
request.send();





