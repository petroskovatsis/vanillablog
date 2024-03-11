import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

/*
* Component
*/
const StoryCollection = ({ stories }) => {
  return (
    <div className="px-0 lg:px-5">
      {
        stories.map((story, $k) =>
          <>
            <div key={`story_${$k}`}>
              <div className="flex flex-col">
                <div className="grow">
                  <h3 className="text-black text-lg font-black">
                    <Link href={`/blog/${story.metadata.staticTitle}`} className="hover:underline transition-all">{story.title}</Link>
                  </h3>
                  <h4 className="text-md font-normal text-gray-600 mt-1">{story.subtitle}</h4>
                </div>
                <div className="text-sm font-normal text-gray-600 mt-5">
                  {moment(story.metadata.publishDate).format("MMMM D, YYYY")}
                </div>
              </div>
            </div>
            <hr className="h-px lg:last:h-0 lg:last:my-0 w-full m-auto my-12 bg-slate-200 border-0" />
          </>
        )
      }
    </div>
  );
}

export default StoryCollection;
