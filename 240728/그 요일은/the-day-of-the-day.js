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
    const [m1,d1,m2,d2] = inputs.shift().split(' ').map(Number)
    const day = inputs.shift()
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    let cnt = 0

    let currentDay = new Date(2024,m1+1,d1)

    while(currentDay.getTime() <= new Date(2024,m2+1,d2).getTime()) {
        if(days[currentDay.getDay()] === day) {
            cnt += 1
        }

        currentDay.setDate(currentDay.getDate() + 1)
    }

    console.log(cnt)



})