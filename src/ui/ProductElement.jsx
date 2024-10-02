import { MdOutlineDiscount } from "react-icons/md";
import { NavLink } from "react-router-dom";
import priceFormater from "../helpers/priceFormater";
import Rating from "./Rating";

function ProductElement({ product }) {
  const {
    is_featured: featured,
    discount,
    name,
    avg_rating: avgRating,
    images,
    price,
    reviews_number: reviewsNumber,
    regular_price: regularPrice,
  } = product;
  return (
    <NavLink to={`/product/${name}`} className="mb-8">
      <li
        className={`grid grid-rows-[240px_1fr] border ${
          featured ? "border-secondary-600" : "border-primary-600"
        } w-[250px] pb-2 h-[500px] bg-accent-500 overflow-hidden mx-1 transition-all relative sm:min-w-full ${
          featured ? "hover:border-secondary-500" : "hover:border-primary-400"
        }`}
      >
        {discount > 0 && (
          <div className="absolute text-sm top-2 right-2 z-[1000] px-1 mt-2 bg-green-700 flex items-center text-white">
            <MdOutlineDiscount />
            <span className="ml-1">Save {discount} %</span>
          </div>
        )}
        <div className="flex justify-center items-center bg-white">
          <img
            src={images[0].image_url ? images[0].image_url : ""}
            className="flex w-auto h-auto max-w-28 max-h-52 object-cover"
          />
        </div>
        <div className="px-4 pt-5 pb-[18px] grid grid-rows-[2fr_1fr_1fr_20px]">
          <span className="text-left text-xl uppercase my-auto">{name}</span>
          <span className="text-left text-lg uppercase my-auto">
            {avgRating > 0 ? (
              <>
                <Rating
                  card={"true"}
                  numOfRatings={reviewsNumber}
                  ratingAverage={avgRating}
                />
              </>
            ) : (
              <>
                <Rating rate={0} card={"true"} />
              </>
            )}
          </span>
          <span className=" text-left text-lg tracking-widest my-auto mr-1 font-bold">
            ${priceFormater(price)}
          </span>
          {discount > 0 && (
            <span className=" text-left text-lg my-auto text-red-600 mr-1 line-through">
              ${priceFormater(regularPrice)}
            </span>
          )}
        </div>
      </li>
    </NavLink>
  );
}

export default ProductElement;
