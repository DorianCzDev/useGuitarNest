import React, { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import avgRatingFormater from "../helpers/avgRatingFormater";

function Rating({
  editable,
  ratingAverage,
  setStars,
  card,
  rate,
  numOfRatings,
  isComment,
}) {
  const ratingAverageFloor = !isNaN(ratingAverage)
    ? Math.round(ratingAverage)
    : null;

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const totalStars = 5;

  useEffect(() => {
    setRating(rate || ratingAverageFloor);
  }, [rate, ratingAverageFloor]);
  return (
    <div className="h-8 flex">
      {[...Array(totalStars)].map((star, index) => {
        const currentrating = index + 1;

        return (
          <React.Fragment key={index}>
            <label key={index}>
              {editable === "true" ? (
                <>
                  {" "}
                  <input
                    className="hidden"
                    key={star}
                    type="radio"
                    name="rating"
                    value={currentrating}
                    onChange={() => {
                      setRating(currentrating);
                      setStars(currentrating);
                    }}
                  />{" "}
                  <span
                    className={`-mr-1 text-4xl ${
                      currentrating <= (hover || rating)
                        ? "text-secondary-500"
                        : "text-neutral-600"
                    }`}
                    onMouseEnter={() => setHover(currentrating)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {" "}
                    <TiStar />
                  </span>
                </>
              ) : (
                <>
                  {" "}
                  <input
                    className="hidden"
                    key={star}
                    type="radio"
                    name="rating"
                    value={currentrating}
                  />
                  <span
                    className={`-mr-1 text-[26px] ${
                      currentrating <= (hover || rating)
                        ? "text-secondary-500"
                        : "text-neutral-600"
                    }`}
                  >
                    {" "}
                    <TiStar />
                  </span>
                </>
              )}
            </label>
          </React.Fragment>
        );
      })}
      {ratingAverage && card === "true" ? (
        <span className="text-base mt-1 pl-1 font-bold text-fontPrimary-600">
          {avgRatingFormater(ratingAverage) || 0}
        </span>
      ) : (
        <span className="text-base mt-1 pl-1 font-bold text-fontPrimary-600">
          {avgRatingFormater(ratingAverage) || 0}
        </span>
      )}
      {!isComment && (
        <span className="pl-2 text-sm mt-2 text-primary-300">
          {numOfRatings ? `(${numOfRatings})` : "(0)"}
        </span>
      )}
    </div>
  );
}

export default Rating;
