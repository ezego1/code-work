// function add(a, b) {
//     const numA = BigInt(a)
//     console.log(numA)
//     const numB = BigInt(b)
//     console.log(typeof numB)
//     const strNum = numA + numB
//     return strNum.toString(); // Fix me!
//   }

  console.log(add('63829983432984289347293874', '90938498237058927340892374089'))



  function add(a, b){
    const re = /^\d+$/
    if (!re.test(a) || !re.test(b)) {
      throw new Error(`{a} and {b} must be positive integers`)
    }
  
    const result = []
    a = a
      .split('')
      .reverse()
      .join('')
      console.log(a)
    b = b
      .split('')
      .reverse()
      .join('')
      console.log(b)
    let carry = 0
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const a_ = a.length > i ? parseInt(a[i]) : 0
      const b_ = b.length > i ? parseInt(b[i]) : 0
      let sum = a_ + b_ + carry

      carry = Math.floor(sum / 10)
      console.log(carry)
      if (carry !== 0) {
          console.log(carry)
        sum = sum % 10
        
      }
      
      result.push(String(sum))
    }
    if (carry > 0) {
      result.push(carry)
    }
    return result.reverse().join('')
  }


//   function add (a, b) {
//     let res = '', c = 0
//     a = a.split('')
//     b = b.split('')
//     while (a.length || b.length || c) {
//       c += ~~a.pop() + ~~b.pop()
//       res = c % 10 + res
//       c = c > 9
//     }
    
//     return res
//   }

 const str = 'weokol'
 const sp = str.split('').reverse().join('')
 console.log(sp)