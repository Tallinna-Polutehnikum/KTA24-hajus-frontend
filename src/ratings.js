const BASE_URL = "http://hansupoiss.tplinkdns.com:3000";

/**
 * Fetches reviews for a specific product
 * @param {string} productId - UUID of the product
 * @returns {Promise<Array>} - Array of review objects
 */
async function fetchReviews(productId) {
  const response = await fetch(`${BASE_URL}/reviews/${productId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch reviews: ${response.status}`);
  }
  
  return response.json();
}

/**
 * Gets the average rating for a product
 * @param {string} productId - UUID of the product
 * @returns {Promise<number|null>} - Average rating or null if no reviews
 */
export async function getAverageRating(productId) {
  const reviews = await fetchReviews(productId);
  
  if (reviews.length === 0) {
    return null;
  }
  
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

/**
 * Gets the total number of ratings for a product
 * @param {string} productId - UUID of the product
 * @returns {Promise<number>} - Total number of ratings
 */
export async function getTotalRatings(productId) {
  const reviews = await fetchReviews(productId);
  return reviews.length;
}

/**
 * Posts a new rating/review for a product
 * @param {Object} reviewData - The review data
 * @param {string} reviewData.name - Reviewer's name
 * @param {string} reviewData.email - Reviewer's email
 * @param {string} reviewData.product_id - UUID of the product
 * @param {number} reviewData.rating - Rating value
 * @param {string} reviewData.comment - Review comment
 * @returns {Promise<Object>} - The created review object
 */
export async function postRating({ name, email, product_id, rating, comment }) {
  const response = await fetch(`${BASE_URL}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, product_id, rating, comment }),
  });

  if (!response.ok) {
    throw new Error(`Failed to post rating: ${response.status}`);
  }

  return response.json();
}

