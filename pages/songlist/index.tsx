import AudioPlayer from 'react-h5-audio-player';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import SearchBar from '../../components/SearchBar/SearchBar';
import SongItem from '../../components/SongItem/SongItem';

import styles from './index.module.scss';

const SongList = () => {
  return (
    <div className={styles.song_list_section}>
      {/* 搜索框 */}
      <div className={styles.header}>
        <SearchBar />
      </div>

      {/* 左侧菜单栏 */}
      <div className={styles.left_menu}>
        <LeftMenu />
      </div>

      {/* 歌单头部 */}
      <div className={styles.content}>
        <div className={styles.content_header}>
          <img
            className={styles.song_img}
            src="http://p2.music.126.net/QjAknCiWB0iMGPaQNUeitg==/109951165164951985.jpg"
            alt=""
          />
          <div className={styles.header_body}>
            <h3>辗转心事 | 今夜你是否也被谁填满思绪</h3>
            <div className={styles.creator_info}>
              <img
                className={styles.creator_img}
                src="http://p1.music.126.net/KzdsPktwpIeFMrTS-ZdzyQ==/109951164432471491.jpg?param=25y25"
                alt=""
              />
              <span>夏天种花秋天晒太阳</span>
              <span>2020-01-20创建</span>
            </div>
            <div className={styles.right_bottom}>
              <p>标签: 夜晚 / 浪漫</p>
              <p>歌曲数: 31 | 播放数: 287万</p>
              <p>
                简介: TA的爱是否依然未变？ 这个问题一问出来，我们心中已有答案
                如果依赖于情话
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 歌单列表 */}
      <div className={styles.song_list}>
        TODO Song Item ...
        {/* <SongItem data={item} key={item.id} /> */}
      </div>

      {/* 底部播放器 */}
      <div className={styles.player}>
        <AudioPlayer autoPlay src="" onPlay={(e) => console.log('onPlay')} />
      </div>
    </div>
  );
};

export default SongList;
