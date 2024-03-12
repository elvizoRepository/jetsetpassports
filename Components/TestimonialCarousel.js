import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialCarousel.css'; // You need to create this CSS file for custom styling

const testimonials = [
  {
    id: 1,
    name: 'David',
    text: 'I am really happy i finally got my passport after a 3 months wait. Now, I can effortlessly explore over 100 countries visa-free, completely bypassing the tedious visa application process.',
    imageUrl : '../Sclient1.webp'
},
  {
    id: 2,
    name: 'Samantha',
    text: 'I am truly grateful to Jetset Passports for their invaluable assistance! Faced with the challenging political situation and conflicts in our home country, I was determined to secure a better future for my son and me. After extensive research on various asylum routes, I was referred to Jetset Passports by friends who successfully used their services to leave the country. Following a patient wait, we finally received our passports and are now happily residing in Germany.',
    imageUrl : '../Sclient2.webp'
},
{
    id: 3,
    name: 'Abdoul',
    text: 'Thank you JetSet Passports I no longer get visa rejections because of my powerful new passport.',
    imageUrl : '../Sclient3.webp'
},
{
  id: 4,
  name: 'Gabriel',
  text: 'I was desperate to flee the war in Ukraine. As a Ukrainian male, traveling seemed impossible for me. That is when I learned about Jetset Passports. They assisted me in obtaining a passport, enabling me to leave the country effortlessly. Currently, I am in a refugee camp in Norway, where I have sought asylum.',
  imageUrl : '../Sclient5.webp'
},
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className='image-testi'>
                <img src={testimonial.imageUrl}/>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
      <div className="testimonial-indicator">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
