export default function Services() {
  const ServicesList = [
    {
      icon: "ai.svg",
      title: "AI-Powered",
      body: "Our bots are expertly equipped with the latest and most advanced AI technology, ensuring your investment earns maximum returns of 8-12% each month. With our bots, you can confidently relax knowing your investment is secure with us.",
    },
    {
      icon: "algo.svg",
      title: "SM Algorithm",
      body: "Our self-managing algorithm ensures that your investment is always optimized to generate the maximum possible returns. This means that you don't have to worry about making complex trading decisions, as our algorithm does it all for you.",
    },
    {
      icon: "expert.svg",
      title: "Expert Support",
      body: "We offer professional support to all our clients, whether you're new to trading or an experienced trader. Our team of expert traders is always available to provide personalized guidance and answer any questions you may have.",
    },
  ];
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-16 mt-5 text-alpha-800 font-alpha grid grid-cols-3 bg-white">
        {ServicesList.map((item, index) => {
          return (
            <div className="flex flex-col">
              <img className="w-8 h-auto mb-3" src={`/img/icon/${item.icon}`} alt="ai" />
              <h1 className="italic font-bold text-2xl">{item.title}</h1>
              <p className="mt-5 text-base">{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
