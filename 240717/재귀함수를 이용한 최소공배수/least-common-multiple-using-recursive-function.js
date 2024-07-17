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
    let arr = inputs.shift().split(' ').map(Number)

    function getGCD(a,b) {
        if(b === 0) {
            return a
        }

        return getGCD(b,a%b)
    }

    function getLCM(a,b) {
        const gcd = getGCD(a,b)

        return a*b/gcd
    }

    if(n === 1) {
        return arr.pop()
    }

    let a = arr.pop()
    let b = arr.pop()

    let lcm = getLCM(a,b)

    while(arr.length > 0) {
        let l = arr.pop()

        lcm = getLCM(l,lcm)
    }

    console.log(lcm)


})