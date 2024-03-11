import Link from 'next/link';

/*
 *
 * Page
**/
const Page = async () => {
  return (
    <div className="py-16">
      <p>This is the <b>Vanilla Blog</b> project. It is a clean implementation of a blog application built with NextJS and MongoDB. You may fork or download this project, edit it, theme it and use it as you wish!</p>
      <p>If you use this piece of code for your own project, let me know if you would like to! I always love hearing about new new projects!</p>
      <p>For more info about this projects, please refer to <Link href="https://kindofbyte.com/blog/create-a-blog-application-with-Nextjs-and-mongodb" className="text-indigo-800" target="_blank">this article</Link>.</p>

      <p>This project was created by <b>Kind of Byte</b>. For more articles and tech talking, visit us on <Link href="https://kindofbyte.com" className="text-indigo-800">KindOfByte.com</Link>.</p>
      <p>Cheers!</p>
    </div>
  );
}

export default Page;
