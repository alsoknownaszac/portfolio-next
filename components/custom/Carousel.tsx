import React, { useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { ICarousel } from "../type/interface";

export default function Carousel(props: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!ref.current) throw Error("ref is not assigned");
    ref.current.scrollLeft += -props.scrollWidth;
  };

  const scrollRight = () => {
    if (!ref.current) throw Error("ref is not assigned");
    ref.current.scrollLeft += props.scrollWidth;
  };

  return (
    <div className="CardContainer relative">
      <div
        className={`absolute z-10 top-1/2 transform -translate-y-[45%] w-full md:flex items-center justify-between hidden px-8 ${props.contentStyles} `}
      >
        <button onClick={scrollLeft}>
          <BsArrowLeftSquare size={"35px"} color={"white"} />
        </button>
        <button onClick={scrollRight}>
          <BsArrowRightSquare size={"35px"} color={"white"} />
        </button>
      </div>
      <div
        ref={ref}
        className={`outer !scroll-smooth bg-[transparent] w-full flex items-center justify-between whitespace-nowrap relative overflow-scroll overflow-y-hidden ${props.contentStyles} `}
      >
        {props.children}
      </div>
    </div>
  );
}
