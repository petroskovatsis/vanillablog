import Link from 'next/link';

/*
 *
 * Page
**/
const Page = async () => {
  return (
    <div className="py-16">
      <p>For more info or any kind of questions, you may find me on the social media or contact me at <b>petros@kindofbyte.com</b></p>

      <p>This project was created by <b>Kind of Byte</b>. For more articles and tech talking visit us on <Link href="https://kindofbyte.com" className="text-indigo-800">KindOfByte.com</Link>.</p>
    </div>
  );
}

export default Page;
