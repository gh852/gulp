
function CheckWeather(){
    var city = document.getElementById('city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${'8b88835a3715783f1fe598c800f424e8'}`
    var request = new XMLHttpRequest();
    
    request.open('GET', url, true);
    request.onload = function () {
        console.log("entrei");
        var weather = JSON.parse(this.response);
        console.log(weather);
        if (request.status >= 200 && request.status < 400) {
            let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            alert(weatherText);
            document.getElementById('resp').value = weatherText;
        } else {
            document.getElementById('resp').value = ('Oops something went wrong :(');
        }
    }
    request.send();
}

