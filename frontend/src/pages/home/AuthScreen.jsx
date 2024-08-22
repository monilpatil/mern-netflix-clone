import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };

  return (
    <div className=" hero-bg relative ">
      <header className=" max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        {" "}
        <img src="/netflix-logo.png" alt="logo" className="w-52 md:min-w-2.5" />
        <Link
          to={"/login"}
          className=" text-white bg-red-600 py-1 px-2 rounded"
        >
          Sign In
        </Link>
      </header>
      <div className=" flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {" "}
          Unlimited movies, Tv shows , and more
        </h1>
        <p className="text-lg mb-4"> Watch anywhere. Cancle anytime.</p>
        <p className="mb-4">
          {" "}
          Ready to Watch? Enter your email to create or restart your membership
        </p>
        <form
          className=" flex flex-col md:flex-row gap-4 w-1/2"
          onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            className=" w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className=" bg-red-600 w-full text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 flex justify-center items-center rounded hover:bg-red-700">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      {/* first section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs,Playstation, Xbox, chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="flex-1 relative">
            <img src="/tv.png" alt="Tv image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 h-1/2  -translate-y-1/2  -translate-x-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>{" "}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      {/* second section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          <div className="flex-1 ">
            <div className=" relative">
              <img
                src="/stranger-things-lg.png"
                alt="stranger things image"
                className="mt-4  "
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 border h-24   border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="image"
                  className="h-full"
                />
                <div className="flex justify-center items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className=" text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className=" text-sm text-blue-500 ">
                      Downloading...
                    </span>
                  </div>
                  <img src="/download-icon.gif" alt="" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      {/* third section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/device-pile.png"
              alt="Device image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 h-4/6 -translate-x-1/2 z-10 max-w-[63%] "
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>{" "}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      {/* fourth section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          <div className="flex-1 ">
            <div className=" relative">
              <img
                src="/kids.png"
                alt="stranger things image"
                className="mt-4  "
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AuthScreen;
