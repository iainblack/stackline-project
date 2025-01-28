import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav className={'min-h-[65px] bg-blue-950 flex items-center justify-between px-[1.5rem]'}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={65}
        />
      </nav>
    </header>
  );
};
