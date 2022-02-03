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

function getRestaurants() {
    sendRequest("GET", "http://localhost:8081/restaurants").then((response) => {
        localStorage.setItem("restaurantCount", response.data.length);
        localStorage.setItem("restaurantData", JSON.stringify(response.data));
        console.log(response.data[0].name);  
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

class Restaurant {
    Restaurant(name, description) {
        this.name = name;
        this.description = description;
    }
}