import { useReportReview } from "../services/useReportReview";
import Rating from "./Rating";
import TextExpander from "./TextExpander";

function Review({ review }) {
  const { reportReview, isPending } = useReportReview();
  return (
    <div
      className="mt-10 pt-7 px-6 pb-2 border border-primary-700 bg-accent-500 rounded-2xl transition-all group "
      key={review.id}
    >
      <header className="flex justify-between items-center text-2xl font-bold h-10 px-3 pb-6 tracking-widest border-b border-primary-700">
        <span>
          <Rating rate={review.rating} isComment="true" />
        </span>
        <span className="text-sm font-light text-neutral-700">
          {review.created_at.split("T")[0]}
        </span>
      </header>
      <div className="text-justify pb-2 pt-2 font-light md:font-normal md:text-lg">
        <TextExpander collapsedNumWords={50}>{review.comment}</TextExpander>
        <div className="w-full flex justify-end ">
          <button
            onClick={() => reportReview(review.id)}
            className="cursor-pointer border-none text-sm tracking-wider text-red-700 font-bold opacity-0 group-hover:opacity-100 transition-all "
          >
            report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
