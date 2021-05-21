import styled from 'styled-components';
import globals from '../../data/index';

const Main = styled.main`
  margin: 5rem 0;
`;

const Banner = () => {
  return (
    <Main>
      <iframe
        width='640'
        height='385'
        src={globals().videos.intro.embed}
        title='video'
        frameBorder='0'
        allowFullScreen
      />
    </Main>
  );
};

export default Banner;
