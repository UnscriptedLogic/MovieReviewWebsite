const ReviewDB = require('../models/ReviewDB')
const Review = require('../classes/Review')

let revDB = new ReviewDB()

function getAllReviews(req, res){
    revDB.getAllReviews((err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function getReviewsByRestaurantID(req, res) {
    revDB.getReviewsByRestaurantID(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function getReviewsByUserID(req, res) {
    revDB.getReviewsByUserID(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function addReview(req, res) {

    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const review = new Review(
        null,
        req.body.restID,
        req.body.userID,
        req.body.review,
        req.body.rating,
        now.toString(),
        req.body.title
    )

    revDB.addReview(review, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function deleteReview(req, res) {
    revDB.deleteReviewByID(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function editReview(req, res) {
    revDB.editReviewDB([req.body.idreview, req.body.title, req.body.rating, req.body.content], (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = { getAllReviews, addReview, getReviewsByRestaurantID, getReviewsByUserID, deleteReview, editReview }