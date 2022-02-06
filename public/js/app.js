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
    localStorage.setItem("CurrRestaurant", name);
    
    var url = new URL("restaurant.html", window.location.href);
    url.searchParams.append("name", name);
    window.open(url, "_self");
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
                localStorage.setItem("userID", response.data.id);
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

function addReview() {
    sendRequest("POST", "http://localhost:8081/reviews", {
        restID: localStorage.getItem("CurrRestaurant"),
        userID: localStorage.getItem("userID"),
        rating: document.getElementById("rating").value,
        review: document.getElementById("content").value,
        title: document.getElementById("title").value
    })
    .then((response) => {
        console.log(response);
        location.reload();
    })
    .catch((err) => {   
        console.log(err);
    });
}

function deleteReview(reviewID) {
    sendRequest("POST", `http://localhost:8081/reviews/delete/${reviewID}`, {
        reviewID,
    })
    .then((response) => {
        console.log(response);
        location.reload();
    })
    .catch((err) => {
        console.log(err);
    });
}

async function updateRating(id, rating) {
    response = await sendRequest("POST", `http://localhost:8081/restaurants/update`, {
        id,
        rating
    });
    console.log(response);
}

function updateReview(id) {
    sendRequest("POST", `http://localhost:8081/review/update`, {
        idreview: id,
        title: document.getElementById("title").value,
        rating: document.getElementById("rating").value,
        content: document.getElementById("content").value
    });
    console.log(id);
}