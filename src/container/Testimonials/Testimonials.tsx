import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './Testimonials.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface TestimonialsProps {
  name: string;
  company: string;
  imgUrl: string;
  feedback: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch Certificates
  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data: TestimonialsProps[]) => {
      setTestimonials(data);
    });
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex];

  console.log('[test]', test);
  console.log('[testimonials]', testimonials);
  return (
    <div className="testimonials">
      <h2 className="head-text">Testimonials</h2>
      {testimonials?.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test?.imgUrl).url()} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test?.feedback}</p>
              <div>
                <h4 className="bold-text">{test?.name}</h4>
                <h5 className="p-text">{test?.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Testimonials), 'testimonials', 'app__darkbg');
