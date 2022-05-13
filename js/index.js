let cars = [
    {
        name: "Chevrolet Camaro",
        price: "$100,000",
        carImg: "white-chevy"
    },
    {
        name: "Dodge Challenger",
        price: "$80,000",
        carImg: "red-dodge"
    },
    {
        name: "Ford Mustang",
        price: "$120,000",
        carImg: "black-mustang"
    },
    {
        name: "Porsche Cayenne",
        price: "$90,000",
        carImg: "yellow-porsche"
    },
    {
        name: "Rangerover Sport",
        price: "$200,000",
        carImg: "navy-range"
    },
    {
        name: "Mercedes G-wagon",
        price: "$300,000",
        carImg: "grey-gwagon"
    },
    {
        name: "Nissan Skyline",
        price: "$150,000",
        carImg: "black-skyline"
    },
    {
        name: "Landrover defender",
        price: "$250,000",
        carImg: "grey-defender"
    }
];

let carsSection = document.getElementById('cars-wrapper');
let html = ""; 


cars.forEach(e => {
    html += `
    <div class="plan col-12 col-sm-3">
    <div class="plan__side plan__side--front">
        <div class="plan__image plan__image--1">
            <img src="images/${e.carImg}.png" class="img-fluid" />
        </div>
        <h4 class="plan__heading plan__heading--1">${e.name}</h4>
        <div class="plan__bullets">
           <p>${e.price}</p>
        </div> 
    </div>
    <div class="plan__side plan__side--back plan__side--back-1"> 
        <div class="plan__button">
            <div class="plan__cost-box">
                <p class="plan__cost-value">${e.price}</p>
            </div>
            <a href="#" class="btn">Shop with us</a>
        </div>
    </div>
</div>
    `

    carsSection.innerHTML = html
});