import Head from 'next/head';
import RecommendCard from '../components/RecommendCard';

import styles from './index.module.scss';
import { SongItem } from '../components/SongItem/SongItem';

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
  return (
    <div className={styles.home_page}>
      <Head>
        <title>Home</title>
      </Head>
      <h4>Popular Albumn</h4>
      <div className={styles.recommend_list}>
        {recommendList.result.length &&
          recommendList.result.map((item) => (
            <RecommendCard data={item} key={item.id} />
          ))}
      </div>
      <div className={styles.column_song_items}>
        <div className={styles.song_items}>
          <h5>Recent History</h5>
          {newSongList.result.length &&
            newSongList.result.map((item, index) => (
              <SongItem data={item} key={index} />
            ))}
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
    'http://localhost:4000/personalized?limit=10'
  );
  const recommendList = await recommendRes.json();
  const newSongListRes = await fetch(
    'http://localhost:4000/personalized/newsong'
  );
  const newSongList = await newSongListRes.json();
  const hotSongRes = await fetch('http://localhost:4000/album/newest');
  const hotSongList = await hotSongRes.json();

  return { props: { recommendList, newSongList, hotSongList } };
}

export default Home;
