'use strict'

const axios = require('axios')

process.env.STAR_WARS_PEOPLE = 'https://swapi.dev/api/people/'

const apiCall = async function(msg) {
    let peopleId = msg.match[1]
    let url = process.env.STAR_WARS_PEOPLE

    const resp = await axios.get(url + peopleId)
    // console.log(resp)
    return resp.data.name
}
 
module.exports = function(robot) {
    robot.respond(/Starwars who is number (\w+)/i, async function(msg) {
        let result = await apiCall(msg)
        msg.reply(result)
    })
}

