// TODO: Build an awesome garage!

// STEP 1 select all the html elements you wants to target for DOM manipulation or to pu an event listener on 
const carsList = document.querySelector(".cars-list");
const form = document.querySelector(".car-form");
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const plate = document.querySelector("#plate");
const owner = document.querySelector("#owner");

const url = "https://wagon-garage-api.herokuapp.com/danko/cars";

const refreshList = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((car) => {
            const html = `<div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
            </div>
    
            <div class="car-info">
              <h4>${car.brand}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
            
          </div>`
    
          carsList.insertAdjacentHTML("beforeend", html)
        });
    
    })
}

refreshList();// DOM manipulation // this function is defined on line 13

// STEP 2 add an event listener on desired html element and wait for user input 
form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    // STEP 3 do something after event fires. either DOM manipulation  or an API call
    fetch("https://wagon-garage-api.herokuapp.com/danko/cars", {
        method: "post", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            "brand": brand.value,
            "model": model.value,
            "owner": owner.value,
            "plate": plate.value
        })
    }).then(data => console.log(data))
    
    carsList.innerHTML = "";   // DOM manipulation
    form.reset();// DOM manipulation

    refreshList();// DOM manipulation // this function is defined on line 13
});

