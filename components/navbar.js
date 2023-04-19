import Link from "next/link";

export default () => {
  return (
    <nav className="max-w-screen-xl mx-auto px-6 flex flex-wrap items-center justify-between py-4">
      <Link href="/" className="flex items-center">
        <img src="/img/logo.svg" className="h-8 mr-3" alt="Logo" />
      </Link>
      <ul className="flex gap-x-4">
        <li>
          <img src="/img/icon/telegram.svg" alt="telegram" />
        </li>
        <li>
          <img src="/img/icon/discord.svg" alt="discord" />
        </li>
        <li>
          <img src="/img/icon/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </nav>
  );
};
