const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const inputs = []

rl.on('line', line => {
    inputs.push(line.trim())
})

rl.on('close' , () => {
    const [Y,M,D] = inputs.pop().split(' ').map(Number)

    function getWeather(m) {
        const spring = [3,4,5]
        const summer = [6,7,8]
        const fall = [9,10,11]
        const winter = [12,1,2]

        if(spring.includes(m)) return 'Spring'
        if(summer.includes(m)) return 'Summer'
        if(fall.includes(m)) return 'Fall'
        if(winter.includes(m)) return 'Winter'
    }

    function isYoon(y) {
        if(y % 4 === 0 && y % 100 === 0 && y % 400 === 0) return true
        else if(y % 4 === 0 && y % 100 === 0) return false
        else if(y % 4 === 0) return true
        else return false
    }

    function isValidDay(y,m,d) {
        const has31 = [1,3,5,7,8,10,12]
        const has30 = [4,6,9,11]

        let currentMonthDay

        if(has31.includes(m)) currentMonthDay = 31
        else if(has30.includes(m)) currentMonthDay = 30
        else {
            if(isYoon(y)) currentMonthDay = 29
            else currentMonthDay = 28
        }

        return currentMonthDay >= d
    }

    if(isValidDay(Y,M,D)) {
        console.log(getWeather(M))
    } else {
        console.log(-1)
    }
})