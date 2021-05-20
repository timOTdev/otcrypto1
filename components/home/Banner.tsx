import globals from '../../data/index';

const Banner = () => {
  return (
    <iframe
      width='640'
      height='385'
      src={globals().videos.intro.embed}
      title='video'
      frameBorder='0'
      allowFullScreen
    />
  );
};

export default Banner;
