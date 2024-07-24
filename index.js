const apikey = "7c3c1b56c13a6a63546609ec8104a46c";
const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";

// creating a asynchronus function
const getwatherdata = async (cityname) => {

    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)
    const data = await responce.json();
    console.log(data)
    if (data.cod == "404") {
        res = `<h6>Pleace Enter Correct city name</h6>`;
        document.querySelector("#display_weather_data").innerHTML = res;

    }
    else {
        res = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""  width="100px" height="100px"><br>
                        
            <table class="table table-success mt-1">
                <tbody>
                <tr>
            <th>City Name :</th>
            <th>${data.name}</th>
        </tr>
        <tr>
            <th>Temparature :</th>
            <th>${data.main.temp} &deg C</th>
        </tr>
        <tr>
            <th>humidity :</th>
            <th>${data.main.humidity} %</th>
        </tr>
        <tr>
            <th>wind speed :</th>
            <th>${data.wind.speed} Km/h</th>
        </tr>
        <tr>
            <th>weather reposrt:</th>
            <th>${data.weather[0].main}</th>
        </tr>`
        document.querySelector("#display_weather_data").innerHTML = res;
        document.getElementById('inputdata').classList.remove('green-border');

    }

}




// getwatherdata();

// get data from input box;
let form = document.getElementById("formdata");
form.addEventListener("submit", (e) => {

    e.preventDefault();
    if (!validation()) {
        return;

    }
    else {
       
        let inputdata = document.querySelector("#inputdata").value.trim();
        document.getElementById('card-data').classList.remove('card-data');
       

        getwatherdata(inputdata);
    }
    inputdata.value = "";


});

// validation
function validation() {
    let input_data = document.querySelector("#inputdata");
    let task = input_data.value.trim();
    let success=true;
    
    if (task === "") {
        document.getElementById('inputdata').classList.add('red-border');
        let data=document.getElementById("inputdata");
        data.setAttribute("placeholder", "Enter a city name");
        data.classList.add("red-placeholder");
        success=false
        
        
    } else {
        document.getElementById('inputdata').classList.add('green-border');
       
    }
    return success;

}
function closes()
{
    document.getElementById('card-data').classList.add('card-data');
    document.getElementById('inputdata').classList.remove('green-border');
    
}

