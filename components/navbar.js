import Link from "next/link";

export default () => {
  return (
    <nav className="flex flex-wrap items-center justify-between mx-auto py-4">
      <Link href="/" className="flex items-center">
        <img src="/img/logo.png" className="h-8 mr-3" alt="Logo" />
      </Link>
      <ul className="flex gap-x-4">
        <li>
          <img src="/img/icon/telegram.png" alt="telegram" />
        </li>
        <li>
          <img src="/img/icon/discord.png" alt="discord" />
        </li>
        <li>
          <img src="/img/icon/twitter.png" alt="twitter" />
        </li>
      </ul>
    </nav>
  );
};
