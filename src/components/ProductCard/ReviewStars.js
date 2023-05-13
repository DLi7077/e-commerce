import React from "react";
import FullStar from "@mui/icons-material/Star";
import PartStar from "@mui/icons-material/StarHalf";
import ZeroStar from "@mui/icons-material/StarOutline";
import classes from "./product-card.module.scss";

function ReviewStars({ rating, name }) {
  const MAX_STARS = 5;
  const fullStarCount = Math.floor(rating);
  const partStarCount = rating % 1 !== 0;
  const zeroStarCount = MAX_STARS - (fullStarCount + partStarCount);

  const ratingStars = [];
  for (let i = 0; i < fullStarCount; i++) {
    ratingStars.push(
      <FullStar className={classes["review-star"]} key={`${name}-full-${i}`} />
    );
  }
  for (let i = 0; i < partStarCount; i++) {
    ratingStars.push(
      <PartStar className={classes["review-star"]} key={`${name}-part-${i}`} />
    );
  }
  for (let i = 0; i < zeroStarCount; i++) {
    ratingStars.push(
      <ZeroStar className={classes["review-star"]} key={`${name}-zero-${i}`} />
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>{ratingStars}</div>
  );
}

export default ReviewStars;
