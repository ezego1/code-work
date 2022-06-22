function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }
  
  console.log(msToTime(55018))


  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  millisToMinutesAndSeconds(298999); // "4:59"
  millisToMinutesAndSeconds(60999);  // "1:01


  var myDate = new Date("2012-02-10T13:19:11+0000");
  var result = myDate.getTime();
  console.log(result);


  var myDate = new Date("2012-02-10T13:19:11+0000");
var offset = myDate.getTimezoneOffset() * 60 * 1000;

var withOffset = myDate.getTime();
var withoutOffset = withOffset - offset;
console.log(withOffset);
console.log(withoutOffset);


const dt = new Date()
console.log(dt.getMilliseconds())



const mili = new Date(1627030996261).getTime()
console.log(mili)

const N = new Date().getTime()
console.log(N)



function getSanitized(url) {
  if(url) {
    return "Yes"
  }
  return null
}

const me = null

const Test = getSanitized()
console.log(Test)


const yesterday = new Date().getTime()
const time = new Date()
console.log(time)
console.log(time.setHours(0,0,0,0))
console.log(yesterday)



// var up = document.getElementById('GFG_UP');
// var down = document.getElementById('GFG_DOWN');
        var tick = new Date().getTime();
        let up = "Milliseconds = " + time;

  
        function GFG_Fun() {
            var date = new Date(time);
            let down = date.toString();
        }


const word = 'geographical are you with me'

function wk(val) {
    const value = val.trim()
    const sent = value.split(' ')
    for(let i = 0; i < sent.length; i++) {
        console.log(sent[i][0].toUpperCase() + sent[i].slice(1))
    }
}

wk(word)










