import React, { useEffect, useState } from 'react';

import * as cData from './carousel.data.json';
import './carousel.css';

const Carousel = (props) => {

  const [activeIndex, setActiveIndex] = useState(props.initialImageIndex ? props.initialImageIndex : 0);

  const [direction, setDirection] = useState(props.direction ? props.direction : cData.forward);
  const [duration, setDuration] = useState(props.duration ? props.duration : 2);

  const [config, setConfig] = useState({ direction: direction, duration: duration });

  useEffect(() => {
    let carouselInterval = window.setInterval(() => {
      setActiveIndex(activeIndex => {
        if (config.direction === cData.reverse) {
          if (activeIndex === 0) {
            return props.images.length - 1;
          }
          return activeIndex - 1;
        }
        if (activeIndex === props.images.length - 1) {
          return 0;
        }
        return activeIndex + 1
      });
    }, config.duration * 1000);

    return () => {
      window.clearInterval(carouselInterval);
    }
  }, [props.images.length, config.direction, config.duration]);

  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  const handleDirectionChange = (direction) => {
    setDirection(direction);
  };

  const handleSubmit = () => {
    if (direction === cData.forward) {
      setActiveIndex(0);
    } else {
      setActiveIndex(props.images.length - 1)
    }
    setConfig({
      direction: direction,
      duration: duration
    });
  };

  return (
    <div className="carousel-container">
      <header>{cData.title}</header>

      <div className="uv-centered-container carousel-duration">
        {cData.duration}{" "}
        <input type="number" value={duration}
          onChange={(event) => handleDurationChange(event.target.value)} />
      </div>

      <div className="uv-centered-container carousel-direction">
        {cData.direction}{" "}
        <input type="radio" value={cData.forward}
          onChange={(event) => handleDirectionChange(event.target.value)}
          checked={direction === cData.forward} />{" "}
        {cData.forward}
        <input type="radio" value={cData.reverse}
          onChange={(event) => handleDirectionChange(event.target.value)}
          checked={direction === cData.reverse} />{" "}
        {cData.reverse}
      </div>

      <div className="uv-centered-container">
        <button onClick={handleSubmit} className="carousel-submit">{cData.submit}</button>
      </div>

      <div className="uv-centered-container">
        {
          props.images.map((imagePath, index) => (
            <React.Fragment key={index}>
              {activeIndex === index &&
                <img src={imagePath}
                  height={props.height ? props.height : cData.height}
                  width={props.width ? props.width : cData.width}
                  alt={cData.image_alt} />
              }
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Carousel;
