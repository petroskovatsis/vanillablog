// Components
import Story from '../../../components/blog/Story';

/*
 *
 * Page
**/
const Page = async ({ params }) => {
  const story = await _getStory(params.title);

  return (
    <div>
      <div className="py-16">
        <Story story={story} />
      </div>
    </div>
  );
}

export default Page;

const _getStory = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories/${id}`, { cache: 'no-store' });
  return await res.json();
}
