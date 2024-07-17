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
    let [n,m] = inputs.shift().split(' ').map(Number)
    let arr = inputs.shift().split(' ').map(Number)

    let cases = []

    for(let input of inputs) {
        cases.push(input.split(' ').map(Number))
    }

    cases.forEach(c => {
        const [start,end] = c
        let sum = 0

        for(let i=start-1;i<=end-1;i++) {
            sum += arr[i]
        }

        console.log(sum)
    })

})