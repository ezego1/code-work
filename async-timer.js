const start = document.getElementById("start");
start.addEventListener("click", startHandler);

var todos = [
  { id: 1, task: "Finance", time: 0.1 },
  { id: 2, task: "Distribution", time: 0.2 },
  { id: 3, task: "Blah", time: 0.2 }
];

var interval;
var mySeconds;

function tick(task, resolve) {
  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - min * 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;

  console.log(message);

  if (mySeconds === 0) {
    alert("Done for " + task);
    clearInterval(interval);
    return resolve();
  }
  mySeconds--;
}

function resolveTimer(time, task) {
  return new Promise(resolve => {
    mySeconds = time;
    interval = setInterval(tick, 1000, task, resolve);
  });
}

async function startHandler() {
  for (let i = 0; i < todos.length; i++) {
    const time = todos[i].time;
    const task = todos[i].task;

    console.log("Starting for task:", task);
    await resolveTimer(time * 60, task);
    console.log(task, " awaited");
  }
}