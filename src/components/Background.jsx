import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className="absolute w-full top-[5%] py-10  flex justify-center text-zinc-600 text-xl">
        Short Documents For Short Life...
      </div>
      <h1 className="text-[13rem] leading-none text-center tracking-lighter absolute left-1/2 font-semibold top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
