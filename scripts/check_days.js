module.exports = function(robot) {
    robot.respond(/check if weekday\s?\?/i, function(msg) {
        var today = new Date()
        msg.reply(today.getDay() !== 0 || today.getDay() !== 6 ? "Weekday":"Not Weekday")
    })
}
