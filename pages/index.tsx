import { GetServerSideProps } from 'next';
import Announcements from '../components/home/Announcements';
import Banner from '../components/home/Banner';
import Learn from '../components/home/Learn';
import Recent from '../components/home/Recent';
import Discord from '../components/home/Discord';
// import { data } from '../data/youtubeAPI';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const isTestEnvironment = process.env.IS_TEST_ENVIRONMENT;
  // console.log('isTestEnvironment', isTestEnvironment);
  // if (!isTestEnvironment) {
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=3`;
  const res = await fetch(URL);
  const data = await res.json();
  return { props: { data } };
  // }
  // return { props: { data } };
};

export default function home({ data }) {
  return (
    <main>
      <Announcements />
      <Banner />
      <Learn />
      <Recent {...data} />
      <Discord />
    </main>
  );
}
