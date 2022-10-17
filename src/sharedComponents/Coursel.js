import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

function Coursel({
  data,
  centerMode,
  dynamicHeight,
  centerSlidePercentage,
  emulateTouch,
  infiniteLoop,
  onClick,
}) {
  return (
    <>
      <Carousel
        centerMode={centerMode}
        dynamicHeight={dynamicHeight}
        centerSlidePercentage={
          centerSlidePercentage ? centerSlidePercentage : "100"
        }
        emulateTouch={emulateTouch}
        infiniteLoop={infiniteLoop}
        onClick={onClick}
        onClickThumb={onClick}
      >
        {data.map((index) => {
          return (
            <>
              <div>
                <img src={index.src} />
                <p className="legend">{index.alt}</p>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default Coursel;
