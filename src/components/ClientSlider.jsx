import React, { useRef } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Client1 from "../assets/images/client-1.jpg";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
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
        <SwiperSlide>
          <div className="clients-card">
            <div className="profile">
              <img src={Client1} alt="profile-img" />
              <div className="name-rating">
                <p>jorck morik</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clients-card">
            <div className="profile">
              <img src={Client1} alt="profile-img" />
              <div className="name-rating">
                <p>jorck morik</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clients-card">
            <div className="profile">
              <img src={Client1} alt="profile-img" />
              <div className="name-rating">
                <p>jorck morik</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clients-card">
            <div className="profile">
              <img src={Client1} alt="profile-img" />
              <div className="name-rating">
                <p>jorck morik</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </p>
          </div>
        </SwiperSlide>
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
