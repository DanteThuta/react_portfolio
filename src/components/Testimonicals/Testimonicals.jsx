import React from "react";
import "./testimonicals.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonicals = () => {
  const reviews = [
    {
      id: "1",
      avatar: Avatar1,
      name: "The Job Hunter",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit  amet consectetur adipisicing elitLorem ipsum",
    },
    {
      id: "2",
      avatar: Avatar2,
      name: "Mamacita",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "3",
      avatar: Avatar3,
      name: "Josh TheBush",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "4",
      avatar: Avatar4,
      name: "Osama Binladen",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section id="testimonicals">
      <h5>What I receive:</h5>
      <h2>Client's Reviews</h2>
      <Swiper
        className="container testimonicals__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonical">
              <div className="client__avatar">
                <img src={Avatar1} alt="" />
              </div>
              <div className="review__section">
                <h3 className="client__name">{name}</h3>
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonicals;
