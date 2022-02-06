const db = require('../connectDB')

class ReviewDB{
    getAllReviews(callback){
        const sql = "SELECT * from review"
        db.query(sql, callback)
    }

    addReview(review, callback) {
		const sql =
			"INSERT INTO review (idreview, create_time, title, rating, content, user_id, restaurant_id) VALUES (?, ?, ?, ?, ?, ?, ?)"
		db.query(
			sql,
			[
                review.getId(),
				review.getDatePosted(),
				review.getTitle(),
				review.getRating(),
                review.getReview(),
				review.getUserID(),
				review.getRestaurantID()
			],
			callback
		)
	}

	getReviewsByRestaurantID(id, callback) {
		const sql = "SELECT * FROM review WHERE restaurant_id = ?"
		db.query(sql, [id], callback)
	}

	getReviewsByUserID(id, callback) {
		const sql = "SELECT * FROM review WHERE user_id = ?"
		db.query(sql, [id], callback)
	}

	deleteReviewByID(id, callback) {
		const sql = "DELETE FROM review WHERE idreview = ?"
		db.query(sql, [id], callback)
	}
}

module.exports = ReviewDB