import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Epoh Irene",
    review:
      " Celestine consistently demonstrated a deep understanding of AWS and google platform infrastructures.  A true asset to any team! ",
  },
  {
    avatar: AVTR2,
    name: "Ayompe Peter",
    review:
      " As our Cloud Engineer, Celestine played a critical role in designing and deploying secured, highly available and scalable cloud infrastructures. He expertly managed our AWS infrastructure, ensuring cost efficiency and security. His ability to automate cloud processes significantly improved our system's reliability and performance. His contributions to cloud architecture were outstanding. ",
  },
  {
    avatar: AVTR3,
    name: "Eric Akime",
    review:
      " Celestine brought a wealth of knowledge in CI/CD automation and infrastructure as code. His expertise in tools like Jenkins, Docker, Kubernetes, and Terraform transformed our deployment processes, reducing release times and improving overall efficiency. His collaborative nature and problem-solving skills made him an indispensable part of our DevOps team. ",
  },
  {
    avatar: AVTR4,
    name: "Kingsley Esapa",
    review:
      " Celestine's work as a DevOps Engineer was exceptional. He automated and streamlined our entire deployment pipeline, making it faster and more reliable. His expertise in CI/CD, coupled with his deep knowledge of cloud infrastructure, played a key role in enhancing our software delivery. His innovative solutions and dedication to continuous improvement set him apart as a top performer on our team. ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Employers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="test" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
