import axios from 'axios'

let API_KEY = '2c0f6a46ae150983ebf41b0d931ae5d4'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`



// ASYNC AXIOS EXAMPLE
async function getWeather() {
  try {
    const response = await axios.get(apiUrl)
    console.log('data: ', response.data)
  } catch (error) {
    console.log('error: ', error)
  }
}



// .THEN AXIOS EXAMPLE
// function getWeather() {
//   axios.get(apiUrl)
//     .then(response => console.log('data: ', response.data))
//     .catch(error => {
//       console.log('error: ', error)
//     })
// }



// ASYNC FETCH EXAMPLE
// async function getWeather() {
//   try {
//     const response = await fetch(apiUrl) 
//     const data = await response.json()
//     console.log('data: ', data)
//   } catch (error) {
//     console.log('error: ', error)
//   }



// .THEN FETCH EXAMPLE
// function getWeather() {
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       console.log('data: ', data)
//     })
//     .catch(error => {
//       console.log('error: ', error)
//     })
// }



getWeather()