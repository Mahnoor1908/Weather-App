const weather_element = document.getElementById("weather");
const temperature_main_element = document.getElementById("temperature-main");
const weather_description_element = document.getElementById("weather-description");
const weather_icon_element = document.getElementById("icon");
const temperature_element = document.getElementById("temperature");
const humidity_element = document.getElementById("humidity");
const wind_speed_element = document.getElementById("wind-speed");
const country_element = document.getElementById("country");
const town_element = document.getElementById("city");


const cityNameByid=(id)=>{
    if(id=='1')
    {
        return "karachi";
    }
    else if(id=='2')
    {
        return "Islamabad";
    }
    else if(id=='3')
    {
        return "Lahore"
    }
}

function getValue(){
    const selectElement=document.querySelector('#dropdown');
    let output = selectElement.value;
    var city=cityNameByid(output);
    console.log("value ",city)
    const apiKey = "b8ccdd1fdfff90aad2c6effb84a10369";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=${city}&units=metric`;

fetch(apiURL)
.then(async (response) =>{
    if (!response.ok){
        alert("An error occured");
        return
    } 

    return response.json();

})
.then(async (data) => {
    console.log("Weather Data:" , await data);
    const weather=data.weather[0].main;
    const weather_description= data.weather[0].description;
    const weather_icon =data.weather[0].icon;
    const temperature_main =data.main.temp;
    const humidity =data.main.humidity
    const wind_speed =data.wind.speed;
    const country = data.sys.country;
    const town =data.name;

    console.log("weather: ",weather)
    console.log("weather_description: ",weather_description)
    console.log("weather_icon: ",weather_icon)
    console.log("temperature_main: ",temperature_main)
    console.log("humidity: ",humidity)
    console.log("wind_speed: ",wind_speed)
    console.log("country: ",country)
    console.log("town: ",town)


    weather_element.innerText =await weather;
    country_element.innerText =await country;
    town_element.innerText =await town;
    temperature_main_element.innerText =await temperature;
    weather_description_element.innerText =await weather_description;
    document.getElementById('humidity').innerText = "arham";
    wind_speed_element =await `${wind_speed}m/s`;
    temperature_main_element.innerText = `${temperature_main}°C`;
}); 
}
   