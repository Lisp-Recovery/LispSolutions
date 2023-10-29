import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className='bg-primary h-16 w-full'>
      <Link href="/" scroll={false}>
        <Image src={'/logo.svg'} alt='Lisp Solutions' width={256} height={64} priority />
      </Link>
    </header>
  );
};