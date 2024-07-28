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
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]

    let currentMonth = m1
    let currentDay = d1
    let diff = 0
    let cnt = 0

    while(true) {
        const currentDays = days[diff % 7]

        if(currentDays === day) {
            cnt += 1
        }

        if(currentMonth === m2 && currentDay === d2) break

        diff += 1
        currentDay += 1

        const maxDay = monthDay[currentMonth - 1]

        if(currentDay > maxDay) {
            currentMonth += 1
            currentDay = 1
        }
    }

    console.log(cnt)


})