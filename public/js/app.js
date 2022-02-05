const sendRequest = (method, url, data) => {
    return axios.request({
        method,
        url,
        data
    })
}

function getRestaurantByNameInURL() {

    const name = new URLSearchParams(window.location.search);
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

function loginUser() {

    sendRequest("POST", "http://localhost:8081/userlogin", { 
        fname: document.getElementById("fname").value, 
        lname: document.getElementById("lname").value, 
        password: document.getElementById("password").value
    })
        .then((response) => {
            localStorage.setItem("loggedIn", response.data.password == "valid password");
            if (response.data.password == "valid password") {
                window.open("index.html", "_self");
            } else {
                console.log("Invalid password");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function registerUser() {
    sendRequest("POST", "http://localhost:8081/user", {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        password: document.getElementById("password").value,
        display_picture: null,
        gender: document.getElementById("gender").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    })
    .then((response) => {
        window.open("index.html", "_self");
    })
    .catch((err) => {
        console.log(err);
    });
}

function getUserByID(id) {
    sendRequest("POST", `http://localhost:8081/user/id/${id}`, {
        id: id
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

function logOutUser() {
    localStorage.setItem("loggedIn", false);
    window.open("index.html", "_self");
}

function getReviewsWithID(id) {
    sendRequest("POST", `http://localhost:8081/reviews/restaurantid/${id}`, {
        id: id
    })
    .then((response) => {
        localStorage.setItem("reviews", JSON.stringify(response.data));
    })
    .catch((err) => {
        console.log(err);
    })
}