// function that begins entire progression
// collects and stores user's birthday in local storage, begins variable manipulation and API calls 
function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    var birthdayString = birthdayInput.split('-');
    localStorage.setItem('userBirthday', birthdayInput);
    // stringify user birthday for the historical events API parameters
    localStorage.setItem('userBirthdayString', JSON.stringify(birthdayString));
    console.log(localStorage);

    // creates an array of objects from the string in local storage
    var birthdayData = JSON.parse(localStorage.getItem('userBirthdayString'));
    console.log(birthdayData);

    // historical events variables, taken from object array generated from local storage
    var month = birthdayData[1];
    var day = birthdayData[2];
    var year = birthdayData[0];
    var historicalURL = 'https://api.api-ninjas.com/v1/historicalevents?month='+month+'&day='+day;
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
            }); 

    // I moved this to the bottom so it can go after both API calls and we can input the display code above it   
    // This resulting display is a placeholder that can be replaced with our API results     
    document.getElementById('result').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Pharetra pharetra massa massa ultricies. Diam quam nulla porttitor massa id neque aliquam. Duis tristique sollicitudin nibh sit amet. Nisl pretium fusce id velit ut. Eget lorem dolor sed viverra ipsum nunc. Ac feugiat sed lectus vestibulum mattis. Proin fermentum leo vel orci porta non. Leo a diam sollicitudin tempor id eu nisl nunc. Neque gravida in fermentum et. Lacus vel facilisis volutpat est velit egestas. Nunc consequat interdum varius sit amet mattis vulputate enim';

}

//Billboard 100 API call
    fetch('https://billboard-api5.p.rapidapi.com/api/charts/hot-100', {
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

