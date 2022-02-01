class Review {
    constructor(id, restaurantID, userID, content, rating, datePosted) {
        this.id = id;
        this.restID = restaurantID;
        this.content = content;
        this.userID = userID;
        this.rating = rating;
        this.datePosted = datePosted;
    }

    //getter methods
    getId() {
        return this.id;
    }
    getRestaurantID() {
        return this.restID;
    }
    getReview() {
        return this.content;
    }
    getUserID() {
        return this.userID;
    }
    getRating() {
        return this.rating;
    }  
    getDatePosted() {
        return this.datePosted;
    }


    //setter methods
    setRestaurantID(restID) {
        this.restID = restID;
    } 
    setReview(review) {
        this.content = review;
    }
    setUserID(username) {
        this.userID = username;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }
}


module.exports = Review;