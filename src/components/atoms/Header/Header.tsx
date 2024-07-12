import Image from 'next/image';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex">
          <a className="flex items-center space-x-2 mr-6" href="/">
            <Image src="/vercel.svg" alt="logo" width={100} height={24} priority />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
