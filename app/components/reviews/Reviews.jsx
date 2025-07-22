import Link from 'next/link';
import Image from 'next/image';
import facebookLogo from '@img/icons/facebook-logo-icon.png';
import googleLogo from '@img/icons/google-logo-icon.png';
import xLogo from '@img/icons/x-logo-icon.png';
import ReviewsSlider from './ReviewsSlider';

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-card-header">
      {review.avatar && (
        <img
          src={review.avatar}
          alt={review.author}
          className="review-card-avatar"
        />
      )}
      <span className="review-card-author">{review.author}</span>
    </div>
    <div className="review-card-body my-2">
      <div className="review-card-text">{review.text}</div>
      <div className="d-flex align-items-center">
        <div className="review-card-source">
          <Link
            href={review.link}
            about="Google Review link or Facebook Recommendation link or X Post for Sinai Dental Practice clinic in Kampala, Uganda"
          >
            {review.source === "google" ? (
              <Image src={googleLogo} alt="Google logo" width={18} height={18} />
            ) : review.source === "twitter" ? (
              <Image src={xLogo} alt="X logo" width={18} height={18} />
            ) : (
              <Image src={facebookLogo} alt="Facebook logo" width={18} height={18} />
            )}
          </Link>
        </div>
        <div className="review-card-rating ms-3">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
      </div>
    </div>
  </div>
);

const Reviews = ({ reviews = [] }) => (
  <div className="reviews-pane">
    {(() => {
      const topReviewsCount = 4;
      const topReviews = reviews.slice(0, topReviewsCount);
      const rest = reviews.slice(topReviewsCount);

      // Fisher-Yates shuffle
      for (let i = rest.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rest[i], rest[j]] = [rest[j], rest[i]];
      }

      const finalReviews = [...topReviews, ...rest];
      return finalReviews.map((review, idx) => (
        <ReviewCard review={review} key={idx + review.author} />
      ));
    })()}
    <ReviewsSlider />
  </div>
);

export default Reviews;
