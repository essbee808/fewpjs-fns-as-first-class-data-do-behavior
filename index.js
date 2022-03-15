/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  const hour = parseInt(timeString, 10)
  if (hour < 12) {
    return `Good Morning`;
  }
  else if (hour > 17) {
    return `Good Evening`;
  }
  else
    return `Good Afternoon`;
}
  // if the time is earlier than 12 pm, return "Good Morning"
  // if later than 5 pm, return "Good Evening"

function displayMessage(msg) {
  document.getElementById('greeting').textContent = msg;
}