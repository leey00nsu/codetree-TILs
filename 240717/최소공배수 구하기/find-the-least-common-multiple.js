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
    const [n,m] = inputs.pop().split(' ').map(Number)

    function getGCD(a,b) {
        if (b === 0) {
            return a
        }
        return getGCD(b,a%b)
    }

    const gcd = getGCD(n,m)
    
    const lcm = n*m/gcd

    console.log(lcm)
})