const n = '19/05/1965'

const nu = n.split('/').reverse().join('-');
console.log(nu)

const num = new Date(nu)
console.log(num)

const now = new Date(num).getTime()
console.log(now)


const isValidDate = function(date) {
    const num = new Date(date)
    return ( num !== "Invalid Date") && !isNaN(num);
}

console.log(isValidDate('1965-05-19'))
// d m y

function isDate(dateStr) {
    return !isNaN(new Date(dateStr).getDate());
  }

console.log(isDate('19-05-1965'))

const y = new Date('1965-30-12')
console.log(y)

// mm/day/yyyy

// yyyy/mm/dd

// dd/mm/yyyy invalid

// yyyy/dd/mm invalid