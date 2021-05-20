import styled from 'styled-components';
import globals from '../../data/index';

const Section = styled.section`
  padding: 2rem 0;
  text-align: center;
  background: rgb(128, 128, 233);
  background: linear-gradient(
    0deg,
    rgba(128, 128, 233, 1) 0%,
    rgba(73, 127, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Videos = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  width: 100%;
`;
const Target = styled.a`
  color: white;
`;
const Title = styled.p`
  font-weight: 600;
  text-decoration: underline;
`;
const Description = styled.p``;
const Expand = styled.div`
  text-align: center;
  margin: 2rem 0;
`;
const Button = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 10px;
  width: 120px;
  background: #555bfb;
  transition: ease all 0.5s;
  &:hover {
    cursor: pointer;
    background: white;
    color: #555bfb;
    border: 2px solid black;
    box-shadow: 0 0 20px #5454ff;
  }
`;

const Recent = (data) => {
  return (
    <Section>
      <h1>Recent Videos</h1>
      <Videos>
        {data.items.map((video) => (
          <div key={video.id.videoId}>
            <iframe
              width='400'
              height='225'
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title='video'
              frameBorder='0'
              allowFullScreen
            ></iframe>
            <Info>
              <Target
                href={`https://www.youtube.com/embed/${video.id.videoId}`}
                target='_blank'
              >
                <Title>{video.snippet.title}</Title>
              </Target>
              <Description>
                {video.snippet.description.substr(0, 300)}
              </Description>
            </Info>
          </div>
        ))}
      </Videos>
      <Expand>
        <a href={globals().socials.youtube.url} target='_blank'>
          <Button>More Videos</Button>
        </a>
      </Expand>
    </Section>
  );
};

export default Recent;
