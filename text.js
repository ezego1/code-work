



//  const firstString = `https://sfx-seamid-staging.s3.amazonaws.com/public/83a07ade-b024-4664-bc78-1c3452d6d3b1/templates/idCard_student_front.ftl`

//  const secondString = `https://sfx-seamid-staging.s3.amazonaws.com/public/83a07ade-b024-4664-bc78-1c3452d6d3b1/templates/idCard_student_front.ftl`

//  console.log(firstString.includes('templates'))


//  if(!secondString.includes('templates') && !firstString.includes('templates')) {
//      console.log("Yes")
//  }else {
//      console.log("No")
//  }

//  const time = new Date().toUTCString()
//  console.log(time)

// const Rnumber = ['6786383', '7878797792', 'g467338292', '687292gjhd92']

// function check(value) {
//    return  Rnumber.filter((num) => num.toLowerCase().includes(value.toLowerCase()))
// }

// console.log(check('6786383'))

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let found = 0
    for(let obj of contacts) {
        console.log(obj.hasOwnProperty(prop))
        
        if (obj.firstName === name){
            found++
        }    
        if (obj.firstName === name && obj.hasOwnProperty(prop)) {
        return obj[prop]
        } 
    }
    if (found > 0) {
        return "No such property"
    } else {
        return "No such contact"
    }
    
  
    // Only change code above this line
  }
  
//   console.log(lookUpProfile("Akira", "address"));

let nk = '';

function isNotEmpty(value) {
   let check = typeof(value) !== 'undefined' && value !== null 
   let isString = typeof(value) !== 'string' ? value : value.trim().length !== 0 


   if(check && isString) {
       return true
   }
   return false

}

console.log(isNotEmpty(nk))

const col = new AbortController()