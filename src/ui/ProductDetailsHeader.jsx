import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import priceFormater from "../helpers/priceFormater";
import { GrStatusGood, GrStatusWarning } from "react-icons/gr";
import { addItem } from "../utilities/cartSlice";
import { FaCartPlus } from "react-icons/fa6";
import Rating from "./Rating";

Modal.setAppElement("#root");

function ProductDetailsHeader({ product }) {
  const {
    name,
    price,
    inventory,
    images,
    category,
    reviews_number: reviewsNumber,
    avg_rating: avgRating,
    regular_price: regularPrice,
    discount,
    id,
  } = product;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currImage, setCurrImage] = useState(null);

  const dispatch = useDispatch();
  return (
    <header className="mx-auto w-9/12 lg:w-full">
      <div>
        {modalIsOpen && (
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                content: {
                  width: "50vw",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  transform: "translate(-50%, -50%)",
                  overflowY: "hidden",
                  overflowX: "hidden",
                  padding: "32px 0",
                },
                overlay: {
                  backgroundColor: "rgba(19, 23, 32, .9)",
                },
              }}
            >
              <div
                onClick={() => setModalIsOpen(false)}
                className="absolute z-[9999] text-black right-3 top-2 text-3xl cursor-pointer text-prima"
              >
                <FaRegWindowClose />
              </div>
              <Slider
                dots={true}
                slidesToShow={1}
                arrows={true}
                infinite={images.length > 1}
                initialSlide={currImage}
                focusOnSelect={false}
              >
                {images.map((image) => (
                  <div
                    className="relative h-[800px] w-[450px]"
                    key={image.cloudinary_image_id}
                  >
                    <img
                      src={image.image_url}
                      className="mx-auto absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-[450px] max-h-[800px]"
                    />
                  </div>
                ))}
              </Slider>
            </Modal>
          </div>
        )}
        <div className="py-2  text-fontPrimary-700">
          <NavLink
            to={"/"}
            className="text-sm px-1 capitalize transition-all hover:text-fontPrimary-500"
          >
            Home
          </NavLink>
          <span className="text-sm">{" > "}</span>
          <NavLink
            to={`/${
              category !== "multi effect" ? `${category}s` : "multieffects"
            } `}
            className="text-sm px-1 capitalize transition-all hover:text-fontPrimary-500"
          >{`${category}s`}</NavLink>
          <span className="text-sm">{" > "}</span>
          <NavLink
            to={``}
            className="text-sm px-1 capitalize transition-all hover:text-fontPrimary-500"
          >
            {name}
          </NavLink>
        </div>
        <div className="grid grid-cols-[500px_500px] pt-3 lg:block ">
          <div className="mx-auto hidden w-full md:block md:pt-10">
            <img
              src={images[0].image_url}
              className="flex justify-center max-w-[350px] max-h-[450px] mx-auto"
            />
          </div>
          <div className="h-[600px] w-[500px] bg-white px-4 lg:mx-auto md:hidden">
            <Slider
              dots={true}
              slidesToShow={1}
              arrows={false}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnDotsHover={true}
              pauseOnHover={true}
              draggable={false}
              infinite={images.length > 1}
              focusOnSelect={false}
            >
              {images.map((image, index) => (
                <div
                  onClick={() => {
                    setModalIsOpen(true);
                    setCurrImage(index);
                  }}
                  key={image.cloudinary_image_id}
                  className="relative h-[600px] w-[500px] cursor-pointer"
                >
                  <img
                    src={image.image_url}
                    className="mx-auto absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-[350px] max-h-[450px]"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="h-[600px] flex justify-center items-center font-bold w-[400px] mx-auto lg:h-fit lg:pt-5 lg:w-full">
            <div className="w-full lg:w-3/4 lg:mx-auto">
              <h1 className=" pt-5 pb-2 tracking-widest uppercase text-2xl">
                {name}
              </h1>
              <div className="mt-2 py-4 font-bold border-b border-primary-600">
                <div className="text-3xl">
                  ${priceFormater(price)}
                  {discount > 0 && (
                    <span className="ml-3 line-through font-normal text-red-600 text-2xl">
                      ${priceFormater(regularPrice)}
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`text-2xl font-bold my-3 tracking-widest py-2 uppercase flex items-center ${
                  inventory > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <span className="pr-3 text-2xl">
                  {inventory > 0 ? <GrStatusGood /> : <GrStatusWarning />}
                </span>
                {inventory > 0 ? "In Stock" : "Out Of Stock"}
              </div>
              <button
                onClick={() => dispatch(addItem(id))}
                disabled={inventory === 0}
                className="flex w-full text-slate-50 items-center justify-center outline-none cursor-pointer transition-all border-none bg-secondary-500 py-4 px-6 rounded-2xl hover:bg-secondary-600 disabled:opacity-50 disabled:bg-secondary-600 disabled:cursor-not-allowed"
              >
                <span className="pr-3 text-2xl">
                  <FaCartPlus />
                </span>
                ADD TO CART
              </button>
              <div className="border-t border-primary-600 mt-6 pt-2">
                <Rating
                  editable="false"
                  ratingAverage={avgRating}
                  numOfRatings={reviewsNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProductDetailsHeader;
