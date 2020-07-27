import Flickity from 'react-flickity-component';

import styles from './Carousel.module.scss';

const flickityOptions = {
  initialIndex: 1,
};

const Carousel = () => {
  return (
    <>
      <Flickity
        className={styles.carousel} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src="/images/carousel_6.jpg" />
        <img src="/images/carousel_2.jpg" />
        <img src="/images/carousel_1.jpg" />
        <img src="/images/carousel_4.jpg" />
        <img src="/images/carousel_5.jpg" />
        <img src="/images/carousel_3.jpg" />
      </Flickity>
    </>
  );
};

export default Carousel;
