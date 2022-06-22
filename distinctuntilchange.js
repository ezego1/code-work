// getStatus() {
//     return  this.http.get(this.config.apiEndpoint + this.fileName)
//       .map(() => { return '1'; })
//       .timeout(500)
//       .catch(() => {return '0';})
//       .retry()
//       .delay(1500)
//       .repeat();
//   }


  //distinctUntilChanged


//   Time
//   document.getElementById('timer').innerHTML =
//   06 + ":" + 11;
// startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}



setInterval(function () {
    var d = new Date(); //get current time
    var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
    var fiveMin = 60 * 5; //five minutes is 300 seconds!
    var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    document.getElementById('test').innerHTML = result;

}, 500) 

const our = new Date().toLocaleTimeString('en-US')
console.log(our)
const other = new Date().toLocaleDateString('en-US', {weekday: "long", day: 'numeric', month: 'numeric', year: 'numeric'})

console.log(other )




function getDateInEpochTime(date) {
    // return new Date(year, Number(month) - 1, date).getTime();
    console.log(date)
    return new Date(date).getTime()
  }


  
function parseNimcDate(dateString) {
    const [date, month, year] = dateString.split('-');
    // return getDateInEpochTime({ year, month, date });
    return getDateInEpochTime(dateString)
}

  const me = parseNimcDate('03/10/1960')
  console.log(typeof me)

  function timeStampConverter(timestamp) {
    const d = new Date(timestamp);
    return d.getFullYear() +
      '-' +
      ('00' + (d.getMonth() + 1)).slice(-2) +
      '-' +
      ('00' + d.getDate()).slice(-2) +
      ' ' +
      ('00' + d.getHours()).slice(-2) +
      ':' +
      ('00' + d.getMinutes()).slice(-2) +
      ':' +
      ('00' + d.getSeconds()).slice(-2);


  }

  console.log(String(me).includes(' '))

  console.log(timeStampConverter(me).split(' '))

  console.log(("03-10-1960").includes('_'))


 function dateFormatConverter(dateString){
     console.log(dateString)
    // let dateParts = dateString.split("-");
    // let dateObj = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    let dateObj = new Date(dateString)
    const num = dateObj.getFullYear() + '-' +
    ('00' + (dateObj.getMonth() + 1)).slice(-2) +
    '-' +
    ('00' + dateObj.getDate()).slice(-2) +
    ' ' +
    ('00' + dateObj.getHours()).slice(-2) +
    ':' +
    ('00' + dateObj.getMinutes()).slice(-2) +
    ':' +
    ('00' + dateObj.getSeconds()).slice(-2);

    return num.split(' ')[0]
  }

//   const [year, month, date] = dateString.split('-');
  function formart(value) {

    if(typeof value === 'string') {
        const [year, month, date] = value.split('-')
        const num = new Date(value).getTime();
        console.log(num)
        const str = new Date(num)
        console.log(str)
        return str
    }
  }

  console.log(dateFormatConverter(formart('1970/10/03')))

  const you = new Date(23756400000)
  const u = new Date('03-10-1960').getTime()
  console.log(you)
  console.log(u)
  const ml = new Date(u)
  console.log(ml)



  const nk = null;

  console.log(`I am the first`);

  setImmediate(() => { 
      console.log(`I am the second`)
  })

  console.log(`I am the third`)


  var a = [3, 4, 6, 7];
  var b = ['3', '4', '6', '7'];
  var c = '3,4,6,7'

  console.log(a == b)
  console.log(a == c)
  console.log(b == c)