import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";
const Card = ({
  reference,
  data: {
    desc,
    fileSize,
    close,
    tag: { isOpen, tagTitle, tagColor },
  },
}) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="overflow-hidden relative w-[15rem] h-[20rem] rounded-[45px] bg-zinc-900/90 text-white py-10 px-8"
    >
      <FaRegFileAlt />
      <p className="text-md mt-5 leading-tight font-semibold">{desc}</p>
      <div className="footer absolute bottom-0 left-0    w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5> {fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {close ? (
              <ImCancelCircle size=".7em" />
            ) : (
              <LuDownload size=".7em" />
            )}
          </span>
        </div>
        {
          isOpen ? (
            <div
              className={`tag w-full flex items-center justify-center bg-${tagColor}-600 py-4`}
            >
              <h3 className="text-md font-semibold">{tagTitle}</h3>
            </div>
          ) : null
          //   <div
          //     className={`tag w-full flex items-center justify-center bg-${tagColor}-600 py-4`}
          //   >
          //     <h3 className="text-md font-semibold text-zinc-800">
          //       downloaded succesfully
          //     </h3>
          //   </div>
        }
      </div>
    </motion.div>
  );
};

export default Card;
