// for (const [key, value] of Object.entries(yourDictionary)) {
// 	console.log(`(${key}, ${value})`);
// }


        // let notUsed;

        // if (usedPromocode.length > 1) {
        //   notUsed = availablePromocode.filter(
        //     (promocode) => !usedPromocode.includes(promocode.id),
        //   );


const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"



function isValidTimestamp(_timestamp) {
    const newTimestamp = new Date(_timestamp).getTime();
    return isNumeric(newTimestamp);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
 //YYYY-MM-DD
  //2021-2-5

  //MM-DD-YYYY
  // 2-2-2021

const op = new Date('2022-2-3').getTime()
const lo = new Date('2022-3-29').getTime()
console.log(lo)
const k =  "1643193128500"
const nu = parseFloat(k)
console.log(k instanceof Date)
const m = new Date('2022-2-28')

console.log(m.getTime())
// console.log(m instanceof Date)
// console.log(isFinite(m))
// console.log(isNaN(parseFloat(m)))

const num = ['1']

if (num.length) {
    console.log(`Hello`)
}


// return string.charAt(0).toUpperCase() + string.slice(1);

function capitalizeFirstLetter(string) {
    string = string.trim();
    let stringArray = string.toLowerCase().split(' ');
    for (let i = 0; i < stringArray.length; i++) {
      stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
    stringArray = stringArray.join(' ');
    return stringArray;
  }



  const ar = '2029'

//   for (const [index, year]  of ar.entries()) {
//       console.log(year, index)
//       console.log(year.length)
//       if (year.length ) {
//           console.log(year.slice(-4))
//       }
//   }

// ar.forEach(item => {
//     item.forEach(item2 => {
//         console.log(item2.slice(-4))
//     })
// })

console.log(ar.slice(-4))

const arrayObj = [{name: 'wale', state: 'abia', date: '2020-3-3'}, {name: 'segun', state: 'ikenne', date: '2022-4-3'}]

for(let ob of arrayObj) {
    if ( new Date(ob.date) < new Date() ) {
        console.log(ob.name)
        ob.name = 'seye'
    }
}

console.log(arrayObj)
