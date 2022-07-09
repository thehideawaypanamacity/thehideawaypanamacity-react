import React from 'react';
import { Carousel}  from 'react-responsive-carousel';
import styles from './MyCarousel.module.css';

export default function MyCarousel(props) {
  return (
      <Carousel 
        showThumbs={false} 
        showIndicators={false} 
        swipeable
        dynamicHeight>
        {props.children}
      </Carousel>
  );
}