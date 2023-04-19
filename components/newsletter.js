export default function Newsletter() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-6 text-alpha-800 font-alpha">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl">
          Forex Trading with Innovation
        </h1>
        <p className="max-w-2xl mx-auto text-center mt-5">
          Introducing our innovative forex trading bots and self-managing
          algorithm that use advanced AI technology to analyze market trends and
          generate<b> 8-12% returns per month</b>.
        </p>
        <form method="post" action="">
          <div className="flex justify-center mt-10 gap-x-3">
            <div className="relative">
              <input
                className="bg-gray-100 pl-10 pr-6 py-3 rounded-lg w-full"
                type="text"
                name="search"
                id="search"
                placeholder="Your Email Address"
              />
              <img
                className="absolute top-1/2 left-3 -translate-y-1/2"
                src="/img/icon/mail.svg"
                alt="mail"
              />
            </div>
            <input
              className="bg-beta-500 text-white px-3 md:px-6 py-0 md:py-3 rounded-lg cursor-pointer hover:bg-beta-700 transition duration-300"
              type="submit"
              value="Get Started"
            />
          </div>
        </form>
        <p className="text-center mt-4 text-sm">
          *Sign up to our newsletter and receive daily updates
        </p>
      </div>
    </>
  );
}
