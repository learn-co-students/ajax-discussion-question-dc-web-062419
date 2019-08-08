const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");


  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then( res => {
      generateUser(res)
    
  }

  )

 function generateUser(res){
    
    document.querySelector('#email').innerText = res['results'][0].email
    document.querySelector('#phone').innerText = res['results'][0].phone
    document.querySelector('#cell').innerText = res['results'][0].cell
    document.querySelector('#fullname').innerText = `${res['results'][0].name.title}. ${res['results'][0].name.first} ${res['results'][0].name.last}`
    document.querySelector('#date_of_birth').innerText = res['results'][0].dob.date
    document.querySelector('#street').innerText = res['results'][0].location.street
    document.querySelector('#city').innerText = res['results'][0].location.city
    document.querySelector('#state').innerText = res['results'][0].location.state
    document.querySelector('#postcode').innerText = res['results'][0].location.postcode
 }

  button = document.getElementsByClassName('btn btn-primary')
    button.addEventListener('click', generateUser)


});














