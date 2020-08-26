
export function Reviews({ bookReviews,deleteReview }) {



    if (!bookReviews) return <h4>No reviews for now!</h4>;
    return (<section className="reviews-container">
        {bookReviews.map((review, idx) => {
            const reviewStars = '⭐'.repeat(review.rate)
            const officialUser = review.fullName[0].toUpperCase() + review.fullName.substring(1, review.fullName.length)
            return <div className="review" key={idx}>
                {review.fullName && <h4>Review from: {officialUser}</h4>}
                {review.rate && <div className="stars">{reviewStars}</div>}
                {review.txt && <div className="review-txt">{officialUser} telling: "{review.txt}"</div>}
                {review.date && <div className="review-date">Posted on {review.date}</div>}
                <a className="delete-btn btn" onClick={()=>deleteReview(review.id)}>Delete Review</a>

            </div>

        })}


    </section>)

}