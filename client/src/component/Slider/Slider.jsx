import React, { useContext } from "react";

// Component
import SliderCardList from "../Card/SliderCardList";
// Context
import MainContext from "../../context/MainContext";
import { SliderState } from "../../context/SliderContext";

function Slider() {
  const slide = SliderState();
  return (
    <div className="w-full overflow-x-auto pb-10">
      <SliderCardList data={slide} />
    </div>
  );
}

export default Slider;
