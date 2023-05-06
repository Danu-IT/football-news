import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper } from "swiper/react";
import { FC, useRef } from "react";
import "swiper/css/navigation";
import "swiper/swiper.css";
import { Next, NextBlock, Prev, PrevBlock } from "./style";

interface CustomSliderProps {
  children: React.ReactNode;
  count: string;
  inf?: boolean;
}

const CustomSlider: FC<CustomSliderProps> = ({ children, count, inf }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={Number(count)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {children}
      </Swiper>
      <NextBlock ref={prevRef}>
        <Next
          size={30}
          color="white"></Next>
      </NextBlock>
      <PrevBlock ref={nextRef}>
        <Prev size={30}></Prev>
      </PrevBlock>
    </>
  );
};

export default CustomSlider;
