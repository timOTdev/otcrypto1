import styled from 'styled-components';
import globals from '../../data/index';

const Section = styled.section`
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(
    0deg,
    var(--horses) 46%,
    var(--desert) 49%,
    var(--horses) 58%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: var(--desert);
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    &:hover {
      background: var(--almond);
      color: var(--almond);
      text-shadow: 0 0 10px var(--desert);
    }
  }
`;
const Videos = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const IFrame = styled.iframe`
  border-radius: 3px;
  &:hover {
    transform: scale(1.03);
    transition: all 1s ease;
  }
`;
const Info = styled.div`
  width: 100%;
`;
const Title = styled.p`
  font-weight: 600;
  text-decoration: underline;
`;
const Description = styled.p``;
const Expand = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const Recent = ({ data }) => {
  return (
    <Section>
      <h1>Recent Videos</h1>
      <Videos>
        {data.map((video) => (
          <div key={video.id.videoId}>
            <IFrame
              width='400'
              height='225'
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title='video'
              frameBorder='0'
              allowFullScreen
            ></IFrame>
            <Info>
              <a
                href={`https://www.youtube.com/embed/${video.id.videoId}`}
                target='_blank'
              >
                <Title>{video.snippet.title}</Title>
              </a>
              <Description>
                {video.snippet.description.substr(14, 300)}
              </Description>
            </Info>
          </div>
        ))}
      </Videos>
      <Expand>
        <a href={globals().socials.youtube.url} target='_blank'>
          <button>More Videos</button>
        </a>
      </Expand>
    </Section>
  );
};

export default Recent;
