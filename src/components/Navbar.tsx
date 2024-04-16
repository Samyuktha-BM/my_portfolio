import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black p-20">
      <div>
        <h1 className="text-4xl font-bold text-white font-funky">
          Samyuktha.
        </h1>
      </div>
      <ul className="flex text-white space-x-20">

        <li className="ml-auto">
          <Link href="/projects" passHref>
            <span className="hover:underline font-bold font-funky">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/experience" passHref>
            <span className="hover:underline font-bold font-funky">Experience</span>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <span className="hover:underline font-bold font-funky">About</span>
          </Link>
        </li>
        <li>
          <a href="/your-resume.pdf" download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
