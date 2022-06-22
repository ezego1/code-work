const obj = {
    name: 'Aewale',
    age: 80,
    state: 'Lagos',
};

const newObj = Object.assign(obj);
console.log(newObj)

const mySet = new Set();

mySet.add(90)
mySet.add(99)
mySet.add(59)
mySet.add(89)
mySet.add(97)
console.log(mySet)
const newArray = Array.from(mySet)
console.log(newArray)

const newMap = new Map()

newMap.set('age', 90)
const element = newMap.get('age');
console.log(element)

newMap.set('go', 100);
console.log(newMap);


function *kill() {
    yield 199;
    yield 900;
    yield 933;
    console.log(`from generator`)
}

const you = kill()
console.log(you.next())
console.log(you.next())
console.log(you.next())
console.log(you.next())


const my = [
    'serialkey',
    'userimage',
    'firstname',
    'lastname',
    'deal',
    'phonenumber',
    'datereceived',
    'status',
    'action'
  ];

  console.log(my[0])

  const text = 'I will like to se the % president.'
  let code = escape(text)
  console.log(code)
  let decode = unescape('I%20will%20like%20to%20se%20the%20%25%20president.')
  console.log(decode)

  // const me = []
  // const t = [8, 0, 9,6]

  // const us = t && me;
  // console.log(us)

  // t.map(function(element, index, t) {
  //   console.log(element);
  //   console.log(index);
  //   console.log(t);
  //   console.log(this)
  //   // return t
  // }, 90)

  // const file = new FileReader();

    // nullish coalescing ??
   const yo = function(ev) {
     return {
       dem: ev.dem ?? 500,
       kill: ev.kill ?? 'die'
     }
   }

   console.log(yo({dem: 0, kill: ''}))

  //  const online = navigator.onLine()
  


 