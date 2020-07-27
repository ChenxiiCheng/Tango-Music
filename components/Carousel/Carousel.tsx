import Flickity from 'react-flickity-component';

import styles from './Carousel.module.scss';

const flickityOptions = {
  initialIndex: 1,
};

const Carousel = () => {
  return (
    <Flickity
      className={styles.carousel} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="http://liangcang-material.alicdn.com/prod/upload/39cba3aec7944e9b8f929c779df62a5e.jpg?" />
      <img src="http://liangcang-material.alicdn.com/prod/upload/3b763d0a67014a1f950fcd97182d387d.jpg" />
      <img src="http://liangcang-material.alicdn.com/prod/upload/9239d513ea274d87b409d63739f41a3f.jpg" />
      <img src="http://liangcang-material.alicdn.com/prod/upload/c2b552f0cd254ae3a0513d201c75c824.jpg" />
    </Flickity>
  );
};

export default Carousel;
