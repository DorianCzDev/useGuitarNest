export default function avgRatingFormater(ratingAverage) {
  if (ratingAverage === undefined || ratingAverage === null) return;
  let avgRatingNumber = parseFloat(ratingAverage.split(".")[1]);
  if (!avgRatingNumber) {
    const avgRating = parseInt(ratingAverage);
    return avgRating;
  } else {
    const avgRating = parseFloat(ratingAverage);
    return avgRating.toFixed(2);
  }
}
