const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

// <h3 id="fullname"></h3>
// If the script tag were at the top of the HTML instead of the bottom,
// It would be undefined. 

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
