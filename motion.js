// Find appropriate api for fetching weather and

// generate api key

// city and country as input for query

document.querySelector("button").addEventListener("click", temp);

function temp() {
  let variable = document.querySelector("input").value;

  console.log(variable);
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=1176a3ec01f848c18ac180935262209&q=${variable}`,
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {

      const icon = data.current.condition.icon.slice(2)

      console.log(data);
  
      document.querySelector("img").src = `https://${icon}`
      document.querySelector("h4").innerText = data.location.name;
      document.querySelector("h2").innerHTML = data.current.temp_f;
      document.querySelector("h3").innerText = data.location.country;
    })

    .catch(error => {
      console.log(`error ${error}`)
    }); 
}























    // console.log(data.current);
      // console.log(data.current.temp_f);
      
      // console.log(data);
      // console.log(data.current);
      // console.log(data.current.condition.icon); 

      // console.log(data);
      // console.log(data.location);
      // console.log(data.location.name);

      // console.log(data);
      // console.log(data.location);
      // console.log(data.location.country); 




// We have two objects from the console -- Current and Location -- We would need to know how to get to temp_f from here

// https://api.weatherapi.com/v1/current.json?key=c70affc92a6843af915152410262209&q=${variable}

// console.log(weather.temp_f)

// const city =document.getElementById('cityName')
// const temperature = document.getElementById('temperature')

//   function searchWeather(){
// fetch (`$(url)`)
//     .then(response => response.json())
//     .then(json => console.log(json.current.temp_f))
//   }

//   searchWeather()
