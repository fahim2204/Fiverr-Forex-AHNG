export default function Footer() {
  const ServicesList = [
    {
      icon: "discord.svg",
      title: "Join Discord",
      link: "#",
    },
    {
      icon: "telegram.svg",
      title: "Join Telegram",
      link: "#",
    },
    {
      icon: "twitter.svg",
      title: "Follow Twitter",
      link: "#",
    },
  ];
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 pt-16 text-alpha-800 font-alpha">
        <h1 className="font-bold italic text-2xl mb-6">Not Convinced?</h1>
        <p className="text-justify text-base">
          Try Us Out Risk-Free: We understand that choosing the right Forex
          trading service can be a daunting task. That's why we offer a
          risk-free trial period for all new clients. Sign up now, and you'll
          have access to all our features for a limited time. Take our bots for
          a spin, subscribe to our newsletter, and join our communities. We're
          confident that once you see what we have to offer, you'll be convinced
          that we're the right choice for you. With our risk-free trial, you
          have nothing to lose and everything to gain. Sign up today and
          experience the difference our Forex trading service can make.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 pb-8 gap-x-3">
          <p className="text-sm">
            Copyright © 2023 AHNG. All Rights Reserved. Unauthorized
            reproduction or distribution of any content on this site is
            prohibited.
          </p>
          <ul className="flex gap-x-10 md:gap-x-4 flex-shrink-0 mt-5 md:mt-0">
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
        </div>
      </div>
    </>
  );
}
