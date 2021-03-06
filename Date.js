//add 30 minutes to date
var minutesToAdd = 30;
var currentDate = new Date();
var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);

function activityWatcher() {
	//The number of seconds that have passed
	//since the user was active.
	var secondsSinceLastActivity = 0;

	//Five minutes. 60 x 5 = 300 seconds.
	var maxInactivity = 60 * 5;

	//Setup the setInterval method to run
	//every second. 1000 milliseconds = 1 second.
	setInterval(function () {
		secondsSinceLastActivity++;
		console.log(
			secondsSinceLastActivity + ' seconds since the user was last active'
		);
		//if the user has been inactive or idle for longer
		//then the seconds specified in maxInactivity
		if (secondsSinceLastActivity > maxInactivity) {
			console.log(
				'User has been inactive for more than ' +
					maxInactivity +
					' seconds'
			);
			//Redirect them to your logout.php page.
			location.href = 'logout.php';
		}
	}, 1000);

	//The function that will be called whenever a user is active
	function activity() {
		//reset the secondsSinceLastActivity variable
		//back to 0
		secondsSinceLastActivity = 0;
	}

	//An array of DOM events that should be interpreted as
	//user activity.
	var activityEvents = [
		'mousedown',
		'mousemove',
		'keydown',
		'scroll',
		'touchstart',
	];

	//add these events to the document.
	//register the activity function as the listener parameter.
	activityEvents.forEach(function (eventName) {
		document.addEventListener(eventName, activity, true);
	});
}

// activityWatcher();

/**
 *   mousedown: Occurs when a key on the mouse is pressed.
 *   mousemove: Fires when the mouse is moved.
 *   keydown: This event fires whenever a key on the keyboard is pressed.
 *   scroll: Occurs when the document is scrolled.
 *   touchstart: Fires when the user touches a touch screen (mobile device, etc).
 */



let today = new Date('03-10-1977');

const covert = 'Thu Mar 03 2000 11:27:59 GMT+0100 (West Africa Standard Time)'
const n = new Date(covert).toDateString()

console.log(n)
// today = new Date(today).getTime()
console.log(today)

const endDay = new Date("2022-03-12").getTime();
console.log(endDay)


// if (endDay < today && endMonth <= todayMonth && todayYear <= todayYear) {
//     console.log(2)
// }

if (endDay < today) {
    console.log('Yes')
}else {
    console.log('No')
}