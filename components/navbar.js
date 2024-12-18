import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-grayPurple p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center text-darkPurple">
        <Link href="/" className="text-2xl font-mono">
          My Portfolio
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/about" className="text-2 font-mono">About</Link>
          <Link href="/projects" className="text-2 font-mono">Projects</Link>
          <Link href="/contact" className="text-2 font-mono">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
