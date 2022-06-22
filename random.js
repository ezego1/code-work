
const eventDone = ["February",]

function randomEvent() {
    const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
return months[random];

}


function nextRandomEvent() {
    let event = randomEvent()
 
    for(let key of eventDone) {
        console.log(key)
        if (event === key) {
            this.nextRandomEvent()
            return
        }
    }
    eventDone.push(event)
    return event
 }

 console.log(nextRandomEvent())

 
