import Link from 'next/link';
import styled from 'styled-components';
import {
  FcHome,
  FcStatistics,
  FcRating,
  FcConferenceCall,
  FcWorkflow,
} from 'react-icons/fc';

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  font-size: 1.6rem;
  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function SiteNav() {
  return (
    <Section>
      <Link href='/'>
        <span>
          <FcHome />
          &nbsp;Home
        </span>
      </Link>
      <Link href='/learn'>
        <span>
          <FcStatistics />
          &nbsp;Learn
        </span>
      </Link>
      <Link href='/deals'>
        <span>
          <FcRating />
          &nbsp;Deals
        </span>
      </Link>
      <Link href='/about'>
        <span>
          <FcConferenceCall />
          &nbsp;About
        </span>
      </Link>
      <Link href='/links'>
        <span>
          <FcWorkflow />
          &nbsp;Links
        </span>
      </Link>
    </Section>
  );
}
