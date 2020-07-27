import { FaRegBell, FaGithub, FaRegSun } from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';
import Carousel from '../Carousel/Carousel';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.search_section}>
          <SearchBar />
        </div>
        <div className={styles.right_section}>
          <div className={styles.notification}>
            <a href="https://github.com/ChenxiiCheng">
              <FaGithub />
            </a>
            <span>
              <FaRegSun />
            </span>
            <span>
              <FaRegBell />
            </span>
          </div>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img
                src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=60"
                alt="avatar"
              />
            </div>
            <span>username</span>
          </div>
        </div>
      </div>
      <Carousel />
      <div className={styles.fade}></div>
    </>
  );
};

export default Header;
