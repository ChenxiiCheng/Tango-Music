import { FaRegHeart } from 'react-icons/fa';
import { resultType, HotSongListType } from '../../pages/index';

import styles from './SongItem.module.scss';

interface IProps {
  data: resultType & HotSongListType;
  key: number;
}

export const SongItem = ({ data }: IProps) => {
  return (
    <div className={styles.song_item}>
      <div className={styles.cover}>
        <img src={data.picUrl} alt="" />
      </div>
      <p>{data.name}</p>
      <p>{data.song ? data.song.artists[0].name : data.type}</p>
      <p>{data.song ? data.song.album.company : data.company}</p>
      <span>
        <FaRegHeart />
      </span>
    </div>
  );
};
