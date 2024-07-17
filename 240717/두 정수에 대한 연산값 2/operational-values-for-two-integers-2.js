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
    let [a,b] = inputs.pop().split(' ').map(Number)

    let smaller = Math.min(a,b)

    a = a === smaller ? a+10 : a*2
    b = b === smaller ? b+10 : b*2

    console.log(a, b)
})