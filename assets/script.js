// This is where our results will append
var birthdayFactsEl = document.getElementById('result-historical');

// function that begins entire progression
// collects and stores user's birthday in local storage, begins variable manipulation and API calls 
function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    var birthdayString = birthdayInput.split('-');
    localStorage.setItem('userBirthday', birthdayInput);
    // stringify user birthday for the historical events API parameters
    localStorage.setItem('userBirthdayString', JSON.stringify(birthdayString));
    // console.log(localStorage);

    // creates an array of objects from the string in local storage
    var birthdayData = JSON.parse(localStorage.getItem('userBirthdayString'));
    // console.log(birthdayData);

    // historical events variables, taken from object array generated from local storage
    var userMonth = birthdayData[1];
    var userDay = birthdayData[2];
    var userYear = birthdayData[0];
    var historicalURL = 'https://api.api-ninjas.com/v1/historicalevents?month='+userMonth+'&day='+userDay;
    // historical events API call
    fetch(historicalURL, {
            headers: {
                'X-Api-Key': 'UZuAR7HH0S/GS/O1TchjtQ==L3SDkjodS9UYO5M6'
        }
        })
            .then(function(results) {
               return results.json();
            })
            .then(function(data) {
             console.log(data);
             // messing around
             for (var i = 0; i < data.length; i++) {
                var birthdayEvent = document.createElement('li');

                birthdayEvent.innerText = 'On '+data[i].month+'-'+data[i].day+'-'+data[i].year+', '+data[i].event;
             }
                birthdayFactsEl.append(birthdayEvent);
                
             // end messing around
            }); 


    // billboard 100 variables
    var week = birthdayData; 
    var bbContainer = document.getElementById("result-billboard");
    var bbUrl = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week='+week;

    // billboard 100 API call
    fetch(bbUrl, {
        headers: {
        'X-RapidAPI-Key': '7e8f3dc8bbmsh74725bf383a10d3p10ec8ejsn093b73e95f52',
        }
        })
        .then(function(response) {
        return response.json();
        })

        // publish to the web page
        .then(function(data){
            var title1 = data.chart.entries[0].title;
            var artist1 = data.chart.entries[0].artist;
          
            bbContainer.innerHTML = "Number 1 on Billboard 100 was "+"'"+title1+","+"'"+" by "+artist1+"."
        
        })    
    
};

