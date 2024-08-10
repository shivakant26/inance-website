import React, { useRef } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Client1 from "../assets/images/client-1.jpg";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import StarRating from "./common/StarRating";
import { clinetSliderData } from "../utils/mockData";
const ClientSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {clinetSliderData.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="clients-card" key={index}>
                <div className="profile">
                  <img src={item.image} alt="profile-img" />
                  <div className="name-rating">
                    <p>{item.clientName}</p>
                    <div className="stars">
                      <StarRating count={5} />
                    </div>
                  </div>
                </div>
                <p>{item.aboutClient}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="custom-navigation">
        <button ref={prevRef} className="custom-prev">
          <FaAngleLeft />
        </button>
        <button ref={nextRef} className="custom-next">
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default ClientSlider;
