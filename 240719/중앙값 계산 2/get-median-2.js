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

    function getMidValue(arr) {
        arr.sort((a,b) => a - b)
        const length = arr.length

        if(length === 1) return arr[0]

        const midIndex = Math.floor(length/2)

        return arr[midIndex]
    }

    const currentArr = []
    const result = []

    for(let i=0;i<arr.length;i++) {
        currentArr.push(arr[i])

        if(i%2 === 0) {
            result.push(getMidValue(currentArr))
        }
    }

    console.log(result.join(' '))
})