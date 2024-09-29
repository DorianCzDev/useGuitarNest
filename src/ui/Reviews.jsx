import { useSearchParams } from "react-router-dom";
import { useProductReviews } from "../services/useReviews";
import Spinner from "./Spinner";
import { TiStar } from "react-icons/ti";
import { useState } from "react";
import Rating from "./Rating";
import toast from "react-hot-toast";
import TextExpander from "./TextExpander";
import { useCreateReview } from "../services/useCreateReview";
import { reportReviewApi } from "../services/apiReviews";
import avgRatingFormater from "../helpers/avgRatingFormater";
import Review from "./Review";

function Reviews({ id: productId, avgRating }) {
  const { reviews, isLoading, ratingsCount } = useProductReviews(productId);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isWriting, setIsWriting] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [stars, setStars] = useState(null);

  const { createReview, isPending } = useCreateReview();

  if (isLoading) return <Spinner />;
  const review = {
    rating: stars,
    comment: newReview,
  };

  function handleFilter(name, value) {
    if (searchParams.get(name) === value || !value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
    setSearchParams(searchParams);
  }

  function handleCreateReview() {
    if (!newReview || !stars) {
      toast.error("Please provide review and rating");
    } else if (newReview.length > 1000) {
      toast.error("Review can not be more than 1000 characters");
    }

    createReview(
      { productId, review },
      {
        onSuccess: () => {
          setIsWriting(false);
          setStars(null);
          setNewReview("");
        },
      }
    );
  }

  return (
    <div className="pb-10 w-[1000px] mx-auto lg:w-full">
      <div className="mt-10 pt-7 px-6 pb-3 border border-primary-700 bg-accent-500 rounded-2xl md:px-0 md:pt-3">
        <div className="flex justify-between items-center">
          <div className="basis-1/2 grid grid-cols-[250px_100px] lg:grid-cols-[2fr_1fr]">
            <div>
              <div
                onClick={() => handleFilter("rating", "1")}
                className="flex text-3xl items-center gap-2 pl-4 py-1 pr-3 cursor-pointer transition-all rounded-xl hover:bg-primary-800"
              >
                <span className="pr-1">1</span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
              </div>
              <div
                onClick={() => handleFilter("rating", "2")}
                className="flex text-3xl items-center gap-2 pl-4 py-1 pr-3 cursor-pointer transition-all rounded-xl hover:bg-primary-800"
              >
                <span className="pr-1">2</span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
              </div>
              <div
                onClick={() => handleFilter("rating", "3")}
                className="flex text-3xl items-center gap-2 pl-4 py-1 pr-3 cursor-pointer transition-all rounded-xl hover:bg-primary-800"
              >
                <span className="pr-1">3</span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
              </div>
              <div
                onClick={() => handleFilter("rating", "4")}
                className="flex text-3xl items-center gap-2 pl-4 py-1 pr-3 cursor-pointer transition-all rounded-xl hover:bg-primary-800"
              >
                <span className="pr-1">4</span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
              </div>
              <div
                onClick={() => handleFilter("rating", "5")}
                className="flex text-3xl items-center gap-2 pl-4 py-1 pr-3 cursor-pointer transition-all rounded-xl hover:bg-primary-800"
              >
                <span className="pr-1">5</span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
                <span className="text-secondary-500">
                  <TiStar />
                </span>
              </div>
            </div>
            <div className="flex flex-col text-3xl items-center gap-2 basis-1/2 py-1 pr-3 text-primary-600">
              {ratingsCount.map((rating) => (
                <span key={rating[0]}>{rating[1]}</span>
              ))}
            </div>
          </div>
          <div className="w-1/2 text-right text-4xl font-bold tracking-widest flex items-center justify-end md:text-3xl">
            <span>{avgRatingFormater(avgRating)}/5</span>
            <span className="text-secondary-500 text-5xl md:text-4xl">
              <TiStar />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-7 px-6 pb-3 border border-primary-700 bg-accent-500 rounded-2xl">
        <div className="text-justify pb-2 text-lg font-light">
          {isWriting && (
            <div className="flex justify-center">
              <textarea
                onChange={(e) => setNewReview(e.target.value)}
                className="w-[100%] h-[200px] mx-auto resize-none mb-3 font-light bg-primary-900 border border-primary-700 p-4 focus:outline-primary-700 outline-none"
              ></textarea>
            </div>
          )}
          <div className="flex justify-between content-center pt-2 ">
            {!isWriting ? (
              <button
                disabled={isPending}
                onClick={() => setIsWriting(true)}
                className="mx-auto w-4/5 text-center outline-none cursor-pointer transition-all border-none bg-secondary-500 py-4 px-6 hover:bg-secondary-600 rounded-2xl"
              >
                Write review
              </button>
            ) : (
              <>
                <button
                  onClick={handleCreateReview}
                  className="text-center outline-none cursor-pointer transition-all border-none bg-secondary-500 py-4 px-6 hover:bg-secondary-600 rounded-2xl"
                >
                  Add review
                </button>
              </>
            )}
            {isWriting && (
              <Rating editable="true" setStars={setStars} isComment="true" />
            )}
          </div>
        </div>
      </div>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}

export default Reviews;
