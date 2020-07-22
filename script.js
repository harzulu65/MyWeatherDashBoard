var numberCities = 0;
var cityChosen = "";
var citiesArray = "";
var names = [];
// This is our API key. Add your own API key between the ""
var APIKey = "1d250c9a4efc209d44380c1ff16e0b9f";

// Function City Diplay Info - First Ajax Call ===================>
function displayCityInfo(city) {
  var citySrch = city;
  var longitud = "";
  var latitude = "";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySrch +
    "&apikey=1d250c9a4efc209d44380c1ff16e0b9f";

  // // Creates AJAX call for the specific movie button being clicked

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var dateDay = response.dt;
    var calcDt = dateDay * 1000;
    var dateOut = new Date(calcDt);
    var timestamp = parseInt(calcDt, 10);
    var date1 = new Date(timestamp);
    var date2 = date1.toISOString().substr(0, 10);
    let cityTitle = $("#srchCity");
    var weatherDay = response.weather[0].main;
    if (weatherDay === "Clear") {
      cityTitle.attr("class", "fa fa-sun-o");
    } else if (weatherDay === "Clouds") {
      cityTitle.attr("class", "fa fa-cloud");
    } else if (weatherDay === "Rain") {
      cityTitle.attr("class", "fa fa-tint");
    } else if (weatherDay === "Haze") {
      cityTitle.attr("class", "fa fa-tint");
    } else if (weatherDay === "Mist") {
      cityTitle.attr("class", "fa fa-shower");
    }
    cityTitle.text("    " + citySrch + " " + date2);
    let tempData = $("#temp");
    let humidData = $("#humid");
    let windData = $("#wind");
    let tempCalc = (response.main.temp - 273.15) * 1.8 + 32;
    let temp = JSON.stringify(tempCalc.toFixed(0) + " F");
    let humed = JSON.stringify(response.main.humidity + " %");
    let windSpeed = JSON.stringify(response.wind.speed);
    let longitud = JSON.stringify(response.coord.lon);
    let latitude = JSON.stringify(response.coord.lat);
    tempData.text(temp);
    humidData.text(humed);
    windData.text(windSpeed);
    uvFunction(longitud, latitude);
  });
}

// Secon Ajax call to look at UV info and forecast info  ---------->
function uvFunction(long, lat) {
  let queryURL2 =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&exclude=minutely,hourly&appid=1d250c9a4efc209d44380c1ff16e0b9f";

  $.ajax({
    url: queryURL2,
    method: "GET",
    success: function (response2) {
      for (i = 0; i < 5; i++) {
        // console.log("estoy aqui UV:", response2, response2.daily[i].weather[0].main);
        var dateDay = response2.daily[i].dt;
        var calcDt = dateDay * 1000;
        var dateOut = new Date(calcDt);
        var timestamp = parseInt(calcDt, 10);
        var date1 = new Date(timestamp);
        var date2 = date1.toISOString().substr(0, 10);
        var j = i + 1;
        var dateBox = $("#boxDate0" + j);
        dateBox.text(date2);
        // console.log("dateDay : ", date2);
        // Forecast - For
        var weatherDay = response2.daily[i].weather[0].main;
        var weatherBox = $("#weatherMain0" + j);
        if (weatherDay === "Clear") {
          weatherBox.attr("class", "fa fa-sun-o");
        } else if (weatherDay === "Clouds") {
          weatherBox.attr("class", "fa fa-cloud");
        } else if (weatherDay === "Rain") {
          weatherBox.attr("class", "fa fa-tint");
        } else if (weatherDay === "Haze") {
          weatherBox.attr("class", "fa fa-tint");
        }
        // console.log(weatherDay);

        // let tempCalc = (response.main.temp - 273.15) * 1.8 + 32;
        var tempDay = (response2.daily[i].feels_like.day - 273.5) * 1.8 + 32;
        var tempBox = $("#tempDay0" + j);
        tempBox.text("Temp : " + tempDay.toFixed(0));
        // Humidity
        var humidDay = response2.daily[i].humidity;
        var humidBox = $("#humidDay0" + j);
        humidBox.text("Humidity : " + humidDay + "%");
      }
      let uvData = $("#uvIndx");
      uvData.text(response2.current.uvi);
    },
    error: function (xhr, status, error) {
      console.log("error1 : ", error);
    },
  });
}

// Function when a City needs to be added ---------->
function addCity(city) {
  citiesArray = localStorage.getItem("citiesData");
  // var namesCities = JSON.parse(citiesArray);
  // console.log("names : ", names);
  if (names != null) {
    // numberCities = namesCities.length;
    names.push(city);
    // console.log("aqui2 :", city);
  } else {
    names = city;
    // console.log("aqui 3 : ", names);
  }
  localStorage.setItem("citiesData", JSON.stringify(names));
}

// Function App starts and buttons need to be rendered---------->
function renderButtons() {
  citiesArray = JSON.parse(localStorage.getItem("citiesData"));
  // console.log("entre render : ", citiesArray, names);
  if (citiesArray != null) {
    for (var i = 0; i < citiesArray.length; i++) {
      var cityAdd = $(".citiesList");
      let cityBtn = $("<button>");
      cityBtn.attr("id", "citiesBtn");
      cityBtn.attr("type", "submit");
      cityBtn.text(citiesArray[i]);
      cityBtn.val(i);
      cityAdd.append(cityBtn);
    }
    names = citiesArray;
    var cityToShow = names.length - 1;
    console.log("citht : ", cityToShow, names[cityToShow]);
    displayCityInfo(names[cityToShow]);
  }
}

// Click Event when button search is clicked ---------->
$("#btnSearch").on("click", function (event) {
  event.preventDefault();
  cityChosen = $(".usrInput").val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityChosen +
    "&apikey=1d250c9a4efc209d44380c1ff16e0b9f";
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (response) {
      if (response != null) {
        // citiesArray = localStorage.getItem("citiesData");
        // names[numberCities] = cityChosen;
        var cityAdd = $(".citiesList");
        let cityBtn = $("<button>");
        cityBtn.attr("id", "citiesBtn");
        cityBtn.attr("type", "submit");
        cityBtn.text(cityChosen);
        cityBtn.val(numberCities);
        cityAdd.append(cityBtn);
        if (cityChosen != "") {
          displayCityInfo(cityChosen);
          addCity(cityChosen);
        } else return;
        numberCities++;
      }
      console.log("second : ");
    },
    error: function (xhr, status, error) {
      console.log("error2 : ", error);
    },
  });
});

// Click Event when button city is clicked ---------->
$(".citiesList").on("click", "#citiesBtn", function () {
  var buttonChosen = $(this).text();
  displayCityInfo(buttonChosen);
});

function startApp() {
  citiesArray = JSON.parse(localStorage.getItem("citiesData"));
  console.log(citiesArray);
  if (citiesArray != null) {
    renderButtons();
  }
}

startApp();
