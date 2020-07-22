# MyWeatherDashBoard

Application about API Weather - Ajax Call

## Task at hand from my Coding Boot Camp

# Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
Use the OpenWeather API to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use localStorage to store any persistent data.

# User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

# Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast

## My Notes:

Very challenging task, is an Ajax API call needs to be setup and get data as presented on the prototype which included:

# 1. Search button for a City to look up weather conditions for the day and for the next 5 days.

# 2. List of buttons of Cities entered and stored in localStorage.

# 3. A Container with the current day for the city entered by user with the current date, an icon that describes the weather for that day, temperature, humitidy, wind speed and UV index.

# 4. A second containerwith the 5 day forecast containing dates, icon for the forecasted weather for that specific day, temperature and humidity.

The challenges were on the handling of the data and understanding where the data comes from. In my case I had to do a secon Ajax call to get the UV Index and the forecast for the next 5 days. Another challenge was validation of the names of the cities, with the tools we have until now I couldn't set it up in the way I wanted but I validate the name of the cities so whatever it goes in local storage is only valid city names.

Another big challenge was the responsiveness, still I need more work on this, I think I accomplished this goal but I need a lot more training on my side to get to an expert level, the challenge was great and gave me a lot of knowledge thought.

I tried to make it look as exact to the prototype picture as possble, I got close but not exactly, I need to investigate more about the icons, I worked with font-awesome and they don't have all the possibilities so I had to be a little creative, I also need to list all the possibilities and make sure they are covered with the corresponding icons.

I think I accomplished all the goals with this task.
