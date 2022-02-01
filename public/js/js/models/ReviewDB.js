const db = require('../connectDB')

class ReviewDB{
    getAllReviews(callback){
        const sql = "SELECT * from review"
        db.query(sql, callback)
    }

    addReview(review, callback) {
		const sql =
			"INSERT INTO review (idreview, create_time, rating, content, user_id, restaurant_id) VALUES (?, ?, ?, ?, ?, ?)"
		db.query(
			sql,
			[
                review.getId(),
				review.getDatePosted(),
				review.getRating(),
                review.getReview(),
				review.getUserID(),
				review.getRestaurantID(),
			],
			callback
		)
	}
}

module.exports = ReviewDB