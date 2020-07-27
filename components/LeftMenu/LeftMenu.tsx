import {
  FaHome,
  FaSearch,
  FaRegBookmark,
  FaRegPlusSquare,
  FaRegHeart,
} from 'react-icons/fa';

import styles from './LeftMenu.module.scss';

const LeftMenu = () => {
  return (
    <section className={styles.left_menu}>
      <div className={styles.logo}>
        <img src="https://img.icons8.com/nolan/96/spotify.png" />
        <span>Spotify</span>
      </div>
      <nav className={styles.left_menu_body}>
        <ul className={styles.link_page}>
          <li className={styles.active}>
            <span>
              <FaHome />
            </span>
            Home
          </li>
          <li>
            <span>
              <FaSearch />
            </span>
            Search
          </li>
          <li>
            <span>
              <FaRegBookmark />
            </span>
            Your Library
          </li>
        </ul>
        <ul>
          <h4>PLAYLISTS</h4>
          <li>
            <span>
              <FaRegPlusSquare />
            </span>
            Create Playlist
          </li>
          <li>
            <span>
              <FaRegHeart />
            </span>
            Liked Songs
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default LeftMenu;
