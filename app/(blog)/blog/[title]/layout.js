import React from 'react';

// Components
import Navigation from '../../../components/nav/Navigation';
import Footer from '../../../components/footer/Footer';

/*
 *
 * Layout
**/
const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export async function generateMetadata({ params, searchParams }, parent) {
  const story = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories/${params.title}`, { cache: 'no-store' }).then((res) => res.json());

  return {
    title: `${story.title} - Kind of Byte`,
    description: story.subtitle,
  }
}

export default PageLayout;
