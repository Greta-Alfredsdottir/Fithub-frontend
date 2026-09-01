import { useState } from "react";
import style from "./slider.module.scss";

export function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  // Billeder skal i et array
  // Back and forth knap
  const sliderImages = [sliderImage1, sliderImage2, sliderImage3];

  function forward() {
    if (sliderIndex >= sliderImages.length - 1) {
      setSliderIndex(0);
    } else setSliderIndex((prev) => prev + 1);
  }

  function back() {
    if (sliderIndex === 0) {
      setSliderIndex(sæiderImages.length - 1);
    } else setSliderIndex((prev) => prev - 1);
  }

  return (
    <figure className={style.sliderStyle}>
      <img src={sliderImages[sliderIndex]} />
      <figcaption>
        <button onClick={() => back()}>Previous</button>
        <button onClick={() => forward()}>Next</button>
      </figcaption>
    </figure>
  );
}
