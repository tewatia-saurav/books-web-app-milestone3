import React from "react";

interface Props {
  rating: number;
}

const Rating: React.FC<Props> = ({ rating }) => {
  return (
    <div className="rating">
      <span className="heading">Rating : </span>
      {[1,2,3,4,5].map((i)=>{
          return(
            <span className={i<=Math.round(rating) ? "fa fa-star checked-star": "fa fa-star"} key={i}></span>
          )
      })}
      <span>({rating})</span>
    </div>
  );
};

export default Rating;
