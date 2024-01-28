import { Review } from "../../pages/Property/Property.types";
import { UserLogo } from "../../assets/svgs/user";
import Star from "../../assets/svgs/star.svg";
import StarEmpty from "../../assets/svgs/starEmpty.svg";

interface IReview {
  review: Review;
}

const Review: React.FC<IReview> = ({ review }) => {
  return (
    <div className="flex rounded-[20px] shadow-[0_0_60px_-30px_#2E4E6E] p-4 gap-x-4">
      <UserLogo className="stroke-blue min-w-8 max-w-8 h-8 border-2 border-blue rounded-full" />
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between md:flex-col">
          <div className="flex flex-col">
            <div className="text-m">{review.user.nick}</div>
            <div className="text-xs text-blue/80">{new Date(review.submitted).toLocaleDateString("pl-PL")} r.</div>
          </div>
          <div className="flex items-start">
            {Array.from({ length: review.rating }).map((_, index) => (
              <img
                key={index}
                src={Star}
                alt="star"
                className="w-6"
              />
            ))}
            {Array.from({ length: 5 - review.rating }).map((_, index) => (
              <img
                key={index}
                src={StarEmpty}
                alt="fill"
                className="w-6"
              />
            ))}
          </div>
        </div>
        <div>{review.content}</div>
      </div>
    </div>
  );
};

export default Review;
