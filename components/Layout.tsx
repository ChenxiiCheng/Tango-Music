import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import AudioPlayer from 'react-h5-audio-player';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="leftmenu">
        <LeftMenu />
      </div>
      <div className="content">{children}</div>
      <div className="player">
        <AudioPlayer autoPlay src="" onPlay={(e) => console.log('onPlay')} />
      </div>
    </div>
  );
};

export default Layout;
