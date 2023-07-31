import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full">
          <source
            src="assets/home/Home-background-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="text-center items-center justify-center">
        <h1 className="text-black text-6xl font-bold mb-4">
          Welcome To Web-Blog
        </h1>
        <h2 className="text-black text-xl mb-6">
          Do you want to read news about movies, technology, or coding
        </h2>
        <p className="text-black text-lg mb-4">Click the button below</p>
        <div className="flex items-center justify-center">
          <Link href="/blog">
            <button className="text-black text-lg w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-transparent cursor-pointer border border-slate-950 hover:bg-black hover:border-transparent hover:text-white transition duration-300">
              Blog & News
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
