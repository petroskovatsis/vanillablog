'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Look & Feel
import styles from './Navigation.module.css';

/*
* Component
*/
const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold"><Link href="/">Vanilla Blog</Link></h1>
      <ul className="list-none mt-5 lg:ml-10 lg:mt-0">
        <li className="inline-block">
          <Link className={`text-lg font-bold text-indigo-800 hover:text-indigo-600 transition-all duration-200 mr-5 ${pathname === '/about' ? styles.active : ''}`} href="/about">
            About
          </Link>
          <Link className={`text-lg font-bold text-indigo-800 hover:text-indigo-600 transition-all duration-200 mr-5 ${pathname === '/contact' ? styles.active : ''}`} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
