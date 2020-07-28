import { useDispatch } from 'react-redux';
import RecommendCard from '../components/RecommendCard';

import styles from './index.module.scss';
import SongItem from '../components/SongItem/SongItem';

export interface ArtistType {
  name: string;
  id: number;
}

interface AlbumType {
  company: string;
}

export interface SingleSongType {
  name: string;
  id: number;
  position: number;
  artists: ArtistType[];
  album: AlbumType;
}

export interface HotSongListType {
  name: string;
  id: number;
  type: string;
  size: number;
  picUrl: string;
  company: string;
}

export interface resultType {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
  song?: SingleSongType;
}

interface RecommentListType {
  hasTaste: boolean;
  code: number;
  category: number;
  result: resultType[];
}

interface IProps {
  recommendList: RecommentListType;
  newSongList: RecommentListType;
  hotSongList: {
    albums: HotSongListType[];
  };
}

const Home = ({ recommendList, newSongList, hotSongList }: IProps) => {
  const dispatch = useDispatch();

  dispatch({
    type: 'RECOMMEND_LIST',
    payload: recommendList,
  });

  return (
    <div className={styles.home_page}>
      <h4>Popular Albums</h4>
      <div className={styles.recommend_list}>
        {recommendList.result.length &&
          recommendList.result.map((item) => (
            <RecommendCard data={item} key={item.id} />
          ))}
      </div>
      <div className={styles.column_song_items}>
        <div className={styles.song_items}>
          <h5>Popular Music</h5>
          {newSongList.result.length &&
            newSongList.result
              .slice(0, 6)
              .map((item, index) => <SongItem data={item} key={index} />)}
        </div>
        <div className={styles.song_items}>
          <h5>New Music</h5>
          {hotSongList.albums.length &&
            hotSongList.albums
              .slice(0, 6)
              .map((item) => <SongItem data={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const recommendRes = await fetch(
    'http://172.81.242.65:5000/personalized?limit=10'
  );
  const recommendList = await recommendRes.json();
  const newSongListRes = await fetch(
    'http://172.81.242.65:5000/personalized/newsong'
  );
  const newSongList = await newSongListRes.json();
  const hotSongRes = await fetch('http://172.81.242.65:5000/album/newest');
  const hotSongList = await hotSongRes.json();

  return { props: { recommendList, newSongList, hotSongList } };
}

export default Home;
