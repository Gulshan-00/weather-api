# Weather App 🌦️

A simple weather application that allows users to check real-time weather information for any city. Just enter a city name, and the app retrieves and displays the current weather, including temperature, humidity, and general conditions (e.g., cloudy, rainy). 

## Features
- **Real-Time Weather Data**: Fetches current weather data using a reliable weather API.
- **Search Functionality**: Search for any city worldwide to view its weather conditions.
- **Simple, User-Friendly Interface**: Presents weather information in a clean, accessible design.
- **Responsive also**: Only for the laptop and the mobile phone.

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application and making it responsive.
- **Weather API**: For retrieving live weather data.

## Getting Started

1. Clone this repository:
    ```bash
    git clone https://github.com/Gulshan-00/weather-app.git
    cd weather-app
    ```
   
2. Install dependencies:
    ```bash
    npm install
    ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) (or your preferred weather API provider) and add it to your `.env` file:
    ```env
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

4. Start the application:
    ```bash
    npm start
    ```

## Usage
1. Enter the city name in the search bar.
2. Press Enter or click the Go button to view the weather.
3. The app displays temperature, humidity, and a weather icon corresponding to the current conditions.

## Folder Structure

