const sendRequest = (method, url, data) => {
    return axios.request({
        method,     
        url,
        data
    })
}

function getRestaurantByNameInURL() {

    const name = new URLSearchParams();
    sendRequest("POST", `http://localhost:8081/restaurants/${name.get("name")}`, {
        name: name
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}

function createCard(title) {    
    const table = document.getElementById("card-container");

    var card_background = document.createElement("div");
    card_background.classList.add("card-background");

    card_background.onclick = function() { 
        openRestaurant(title); 
    }
    table.appendChild(card_background);

    var card_icon = document.createElement("div");
    card_icon.classList.add("card-icon");
    card_background.appendChild(card_icon);

    var card_title = document.createElement("h1");
    card_title.innerHTML = title;
    card_title.classList.add("card-title");
    card_icon.appendChild(card_title);
}

function getRestaurants() {
    sendRequest("GET", "http://localhost:8081/restaurants").then((response) => {
        for (const restaurant of response.data) {
            console.log(response);
            createCard(restaurant.name);
        }
    });
}

function openRestaurant(name) {
    var url = new URL("restaurantpage.html", window.location.href);
    url.searchParams.append("name", name);

    window.open(url, "_self");
}

function login() {
    sendRequest("POST", "http://localhost:8081/userlogin", {
        firstname: "test",
        lastname: "test", 
        password: "test"
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}