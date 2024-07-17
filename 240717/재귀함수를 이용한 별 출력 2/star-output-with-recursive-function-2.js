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
    let n = Number(inputs.shift())

    function printStarDecrease(n,target) {
        const stars = Array(n).fill('*')
        console.log(stars.join(' '))

        if(n > target) printStarDecrease(n-1,target)
    }

    function printStarIncrease(n,target) {
        const stars = Array(n).fill('*')
        console.log(stars.join(' '))

        if(n < target) printStarIncrease(n+1,target)
    }

    printStarDecrease(n,1)
    printStarIncrease(1,n)
})