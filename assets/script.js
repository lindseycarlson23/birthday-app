// function to collect and store user's birthday in local storage
function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    localStorage.setItem('userBirthday', birthdayInput);
    // This resulting display is a placeholder that can be replaced with our API results
    document.getElementById('result').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Pharetra pharetra massa massa ultricies. Diam quam nulla porttitor massa id neque aliquam. Duis tristique sollicitudin nibh sit amet. Nisl pretium fusce id velit ut. Eget lorem dolor sed viverra ipsum nunc. Ac feugiat sed lectus vestibulum mattis. Proin fermentum leo vel orci porta non. Leo a diam sollicitudin tempor id eu nisl nunc. Neque gravida in fermentum et. Lacus vel facilisis volutpat est velit egestas. Nunc consequat interdum varius sit amet mattis vulputate enim';
}

//historical events API call
var month = 10;
var day = 10;
var year = 1992;
var historicalURL = 'https://api.api-ninjas.com/v1/historicalevents?month='+month+'&day='+day;
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
    });

 

//Billboard 100 API call
var week = localStorage.getItem(')

var billboardUrl = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week='+week;

fetch(billboardUrl, {
    headers: {
    'X-RapidAPI-Key': '7e8f3dc8bbmsh74725bf383a10d3p10ec8ejsn093b73e95f52',
    }
    
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});


// function billboardResults () {
//     var week = 
// }
//how to get user input into the api call
//loop through responses and limit to 5 with that

