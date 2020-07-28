import Head from 'next/head';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import AudioPlayer from 'react-h5-audio-player';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tango 🔥 Music</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
  );
};

export default Layout;
