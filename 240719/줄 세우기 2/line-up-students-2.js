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
    
    const students = inputs.map(input => input.split(' ').map(Number))
    
    function sortStudent(a,b) {
        const [aH,aW] = a
        const [bH,bW] = b

        if(aH < bH) return -1
        if(aH > bH) return 1
        if(aW < bW) return 1
        if(aW > bW) return -1

        return 0
    }

    const indexedStudents = students.map((el,idx) => [...el,idx+1])

    indexedStudents.sort(sortStudent)

    for(let student of indexedStudents) {
        console.log(student.join(' '))
    }

})