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

    function getArrLCM(arr,lcm) {
        if(arr.length === 0) return lcm

        if(lcm === 0) {
            const a = arr.pop()
            const b = arr.pop()
            const newLcm = getLCM(a,b)

            return getArrLCM(arr,newLcm)
        } else {
            const a = arr.pop()
            const newLcm = getLCM(a,lcm)

            return getArrLCM(arr,newLcm)
        }
    }

    console.log(getArrLCM(arr,0))


})