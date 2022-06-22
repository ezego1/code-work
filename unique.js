const arrayObj = [{name: 'wale', id: 4}, {name: 'wale', id: 4}, {name: 'segun', id: 5}]


function uniqueObj(data, key) {
    
    return [
        ...new Map(data.map(item => [key(item), item])).values()
    ]
}

console.log(JSON.stringify(uniqueObj(arrayObj, cool)))
function cool(item) {
    return item.id
}
const date = new Date()
console.log(date)
const year = date.getMonth() < 11 ? date.getFullYear() : date.getFullYear + 1;
console.log(year)
const month = date.getMonth() < 11 ? date.getMonth() : 0;
console.log(month)

const tie = new Date(Date.UTC(year, month)).toUTCString()
console.log(tie)


new Map('wale', 9).values
