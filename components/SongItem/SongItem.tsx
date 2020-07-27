import { FaRegHeart } from 'react-icons/fa';
import { resultType, HotSongListType } from '../../pages/index';

import styles from './SongItem.module.scss';

interface IProps {
  data: resultType | HotSongListType;
  key: number;
}

const SongItem = ({ data }: IProps) => {
  return (
    <div className={styles.song_item}>
      <div className={styles.cover}>
        <img src={data.picUrl} alt="" />
      </div>
      <p>{data.name}</p>
      <p>
        {(data as resultType).song
          ? (data as resultType).song.artists[0].name
          : data.type}
      </p>
      <p>
        {(data as resultType).song
          ? (data as resultType).song.album.company
          : (data as HotSongListType).company}
      </p>
      <span>
        <FaRegHeart />
      </span>
    </div>
  );
};

export default SongItem;
