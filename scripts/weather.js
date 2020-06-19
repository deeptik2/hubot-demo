'use strict'

// const axios = require('axios')

// process.env.HUBOT_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather'
// process.env.HUBOT_WEATHER_UNITS = 'imperial'

// const apiCall = async function() {
//     let city = msg.match[1]
//     let query = {unit: process.env.HUBOT_WEATHER_UNITS, q: city}
//     let url = process.env.HUBOT_WEATHER_API

//     const resp = await axios(url )
//     return resp.json()
// }
 
// module.exports = function(robot) {
//     robot.respond(/weather in (\w+)/i, function(msg) {
//         let result = await apiCall()
//         msg.reply(result)
//     })
// }
