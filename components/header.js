import Link from 'next/link';

export default function Header() {
  return (
    <>
      <p>
        <Link href='/'>Home</Link>
      </p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
      <p>
        <Link href='/blog'>Blog</Link>
      </p>
      <p>
        <Link href='/meals'>Meals</Link>
      </p>
      <p>
        <Link href='/community'>Community</Link>
      </p>
    </>
  );
}
