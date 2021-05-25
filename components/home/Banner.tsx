import styled from 'styled-components';
import globals from '../../data/index';

const Main = styled.main`
  margin: 5rem 0;
`;
const IFrame = styled.iframe`
  border-radius: 3px;
`;

const Banner = () => {
  return (
    <Main>
      <IFrame
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
