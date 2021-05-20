import { GetServerSideProps } from 'next';
import Announcements from '../components/home/Announcements';
import Banner from '../components/home/Banner';
import Quote from '../components/home/Quote';
import Recent from '../components/home/Recent';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=3`;
  const res = await fetch(URL);
  const data = await res.json();
  return { props: { data } };
};

export default function home({ data }) {
  return (
    <div>
      <Announcements />
      <Banner />
      <Quote />
      <Recent {...data} />
    </div>
  );
}
