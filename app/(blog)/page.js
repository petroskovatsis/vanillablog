// Components
import StoryCollection from '../components/blog/StoryCollection';

/*
 *
 * Page
**/
const Page = async () => {
  const stories = await _getStories();

  return (
    <div className="py-16">
      <StoryCollection stories={stories} />
    </div>
  );
}

export default Page;

const _getStories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories`, { cache: 'no-store' });
  return await res.json();
}
