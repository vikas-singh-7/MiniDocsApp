import React, { useState } from "react";

const Form = ({ addData }) => {
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState("");
  const [size, setSize] = useState("");
  const necessary = {
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: color },
  };
  function handlequote(e) {
    setQuote(e.target.value);
  }
  function handleSize(e) {
    setSize(e.target.value);
  }
  function handleColor(e) {
    setColor(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addData({ desc: quote, fileSize: size, ...necessary });
    setColor("");
    setQuote("");
    setSize("");
  }
  return (
    <div className=" fixed w-[24rem] h-[35rem] rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 left-[70rem] flex justify-center flex-wrap flex-col">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 px-1 py-4">
          <h1 className="text-2xl">Want to add your quotes.. Go ahead</h1>
          <label htmlFor="docs" className="text-3xl">
            Docs
          </label>
          <input
            onChange={handlequote}
            value={quote}
            type="text"
            id="docs"
            placeholder="Hope is a dangerous thing"
            className="d-block rounded-md h-10  cursor-text p-3  text-zinc-700 text-md  "
          />
          <label htmlFor="size" className="text-3xl ">
            Size
          </label>
          <input
            onChange={handleSize}
            value={size}
            type="text"
            id="size"
            placeholder="1.6mb"
            className="d-block rounded-md h-10  cursor-text p-3 text-zinc-700 text-md  "
          />
          <label htmlFor="size" className="text-3xl ">
            Color
          </label>
          <input
            onChange={handleColor}
            value={color}
            type="text"
            id="size"
            placeholder="try red"
            className="d-block rounded-md h-10  cursor-text p-3 text-zinc-700 text-md  "
          />
          <button
            type="submit"
            className="rounded-md bg-green-600 p-3 font-semibold text-xl mt-2"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
