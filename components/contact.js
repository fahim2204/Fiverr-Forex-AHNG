export default function Contact() {
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
      <div className=" bg-[#FAFAFA]">
        <div className="max-w-screen-lg mx-auto px-6 py-16 mt-5 text-alpha-800 font-alpha gap-6 grid md:grid-cols-3">
          {ServicesList.map((item, index) => {
            return (
              <div className="flex justify-center">
                <a
                  href={item.link}
                  key={index}
                  className="bg-gray-100 rounded-xl flex items-center gap-x-6 px-5 py-4 hover:bg-gray-200 transition duration-300 cursor-pointer"
                >
                  <img src={`/img/icon/${item.icon}`} alt="ai" />
                  <h1 className="font-bold">{item.title}</h1>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
