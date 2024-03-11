import Link from 'next/link';

/*
* Component
*/
const Footer = () => {
  return (
    <div className="grid grid-flow-row lg:grid-cols-3 gap-5 py-10">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-xl font-bold"><Link href="/">Vanilla Blog</Link></h1>
      </div>
      <div className="flex flex-col items-center lg:items-start mt-5 lg:mt-0">
        <h3 className="text-md font-bold mb-2">Site & Support</h3>
        <ul className="list-none">
          <li><Link href="/about" className="text-indigo-800 hover:text-indigo-600 transition-all">About</Link></li>
          <li><Link href="/contact" className="text-indigo-800 hover:text-indigo-600 transition-all">Contact</Link></li>
        </ul>
      </div>
      <div className="flex flex-col items-center lg:items-start mt-5 lg:mt-0">
        <h3 className="text-md font-bold mb-2">Creator</h3>
        <ul className="list-none">
          <li><Link href="https://kindofbyte.com" className="text-indigo-800 hover:text-indigo-600 hover:underline transition-all">Kind of Byte</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
