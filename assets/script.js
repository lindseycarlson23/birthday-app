   
    
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
