import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const Foreground = () => {
  const data = [
    {
      desc: "This is beyong saving , But I have to try",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "There's no place like home.",
      fileSize: "1.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Whatever you are, be a good one.",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "orange" },
    },
  ];
  const [Data, setData] = useState(data);

  const addData = (data) => {
    const updatedData = [...Data, { ...data }]; // Create the updated array first
    setData(updatedData); // Update the state
  };
  const ref = useRef();
  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 z-[3] m-1 flex flex-wrap gap-5 p-5">
        <div
          ref={ref}
          className="w-[70vw] h-full fixed top-0 left-0 z-[4] m-1 flex flex-wrap gap-5 p-5"
        >
          {" "}
          {Data.map((item) => {
            return <Card reference={ref} key={item.desc} data={item} />;
          })}
          <Form addData={addData} />
        </div>
      </div>
    </div>
  );
};

export default Foreground;
