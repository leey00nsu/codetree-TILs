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
    
    const infos = inputs.map(input => input.split(' '))

    function compareDate(a,b) {
        const [aY,aM,aD] = a.split('-').map(Number)
        const [bY,bM,bD] = b.split('-').map(Number)

        if(aY < bY) return -1
        if(aY > bY) return 1
        if(aM < bM) return -1
        if(aM > bM) return 1
        if(aD < bD) return -1
        if(aD > bD) return 1

        return 0
    } 

    const rainInfos = infos.filter(el => el[2] === 'Rain')

    rainInfos.sort((a,b) => compareDate(a[0],b[0]))

    console.log(rainInfos[0].join(' '))
})