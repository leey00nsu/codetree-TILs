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
    let [a,b] =inputs.shift().split(' ').map(Number)
    let n = Number(inputs.shift())

    const nByA = parseInt(n,a)
    const nByB = nByA.toString(b)

    console.log(nByB)


})