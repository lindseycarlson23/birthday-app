// function to collect and store user's birthday in local storage
function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    localStorage.setItem('userBirthday', birthdayInput);
    // This resulting display is a placeholder that can be replaced with our API results
    document.getElementById('result').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Pharetra pharetra massa massa ultricies. Diam quam nulla porttitor massa id neque aliquam. Duis tristique sollicitudin nibh sit amet. Nisl pretium fusce id velit ut. Eget lorem dolor sed viverra ipsum nunc. Ac feugiat sed lectus vestibulum mattis. Proin fermentum leo vel orci porta non. Leo a diam sollicitudin tempor id eu nisl nunc. Neque gravida in fermentum et. Lacus vel facilisis volutpat est velit egestas. Nunc consequat interdum varius sit amet mattis vulputate enim';
}   
    
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
