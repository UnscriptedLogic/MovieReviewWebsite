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

    //what the fuck

    var card = document.createElement("div");
    card.classList.add("restaurant-card");

    card.onclick = function() {
        openRestaurant(title);
    }

    var icon_container = document.createElement("div");
    icon_container.classList.add("icon-container");

    var icon_img = document.createElement("img");
    icon_img.src = "./img/restaurant.png";
    icon_img.alt = "./img/placeholderImage.png"
    icon_img.classList.add("restaurant-icon");

    var card_contents = document.createElement("div");
    var card_title = document.createElement("h1");
    card_title.classList.add("card-title");
    card_title.innerHTML = title;

    var card_rating = document.createElement("div");
    card_rating.classList.add("card-rating");

    var card_description = document.createElement("p");
    card_description.classList.add("card-description");
    card_description.innerHTML = "This is the description of the restaurant";

    card.appendChild(icon_container);
    icon_container.appendChild(icon_img);

    card.appendChild(card_contents);

    `
    <div class="restaurant-card">
        <div class="icon-container">
            <img
                src="../images/restaurantIcon.jpg"
                alt=""
                class="restaurant-icon"
            />
        </div>
        <div class="card-contents">
            <div class="card-title">Restaurant Title</div>
            <div class="card-rating">Rating: 10/10</div>
            <div class="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                impedit sapiente asperiores reiciendis sit aut culpa quasi
                perspiciatis illum eos, quo id distinctio commodi nisi sed maiores
                similique iste mollitia?
            </div>
        </div>
    </div>
    `
}

function getRestaurants() {
    sendRequest("GET", "http://localhost:8081/restaurants").then((response) => {
        // for (const restaurant of response.data) {
        //     createCard(restaurant.name);
        // }

        localStorage.setItem("restaurants", response.data.length);
    });
}

function openRestaurant(name) {
    var url = new URL("restaurant.html", window.location.href);
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