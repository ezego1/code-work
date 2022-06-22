function generate(value) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwsyz'
    let randomStr = ''
    for (const key of value) {
        randomStr += str.charAt(Math.floor(Math.random() * str.length))
    }
    
    return randomStr
}

console.log(generate('PROMOCODE'))