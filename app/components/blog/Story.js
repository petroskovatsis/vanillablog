import moment from 'moment';

/*
* Component
*/
const Story = ({ story, showHeader = true }) => {
  return (
    <div className="px-0 lg:px-5">
      <h1 className="text-black text-2xl lg:text-4xl font-black leading-normal">{story.title}</h1>
      <h2 className="text-xl font-bold text-gray-600 leading-normal">{story.subtitle}</h2>

      <div className="text-sm font-normal text-gray-600 mt-5 mb-10">
        Published on <u>{moment(story.metadata.publishDate).format("MMMM D, YYYY")}</u>
      </div>

      <div className="story" dangerouslySetInnerHTML={{ __html: story.body }}></div>
    </div>
  );
}

export default Story;
