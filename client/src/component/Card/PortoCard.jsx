import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
// Component
import PortoCardContent from "./PortoCardContent";
// Context
import PortoCardContext from "../../context/PortoCardContext";
import GreenStars from "../Profile/defaultProfile/GreenStars";
// hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function PortoCard({ animation = false }) {
  const { background, bgPadding, image } = useContext(PortoCardContext);
  const [imageOnLoad, setImageOnLoad] = useState(true);
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.005,
    once: true,
  });

  const onLoad = () => {
    setImageOnLoad(!imageOnLoad);
  };

  if (animation) {
    return (
      <motion.div
        className={`relative w-full text-white overflow-hidden cursor-pointer ${
          bgPadding && "pb-[50%]"
        } ${!background && !image ? "bg-custome-green-800" : null}
       ${image && "bg-[#1c201c]"}`}
        initial={{ opacity: 0, translateY: "40px" }}
        ref={ref}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "40px" }
        }
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 0.95 }}
      >
        <PortoCardContent hover profile={!image} />{" "}
        {/* pada image true sudah ada image secara default !!lihat bawah!! */}
        {background && (
          <>
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/50"></div>
            <img
              className={`absolute top-0 left-0 w-full h-full object-cover -z-20 ${
                imageOnLoad && "bg-slate-300 animate-pulse"
              }`}
              src={background}
              onLoad={onLoad}
              alt="google"
            />
          </>
        )}
        {image && (
          <>
            <div className="relative w-full h-auto">
              <div className="absolute -top-[6%] left-[5%] z-[2]">
                <GreenStars />
              </div>
              <img
                className={`relative h-fit w-full object-cover object-center ${
                  imageOnLoad && "bg-slate-300 animate-pulse"
                }`}
                src={image}
                onLoad={onLoad}
                alt="google"
              />
            </div>
          </>
        )}
      </motion.div>
    );
  }

  return (
    <div
      className={`relative w-full text-white overflow-hidden cursor-pointer ${
        bgPadding && "pb-[50%]"
      } ${!background && !image ? "bg-custome-green-800" : null}
       ${image && "bg-[#1c201c]"}`}
    >
      <PortoCardContent hover profile={!image} />{" "}
      {/* pada image true sudah ada image secara default !!lihat bawah!! */}
      {background && (
        <>
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/50"></div>
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover -z-20 ${
              imageOnLoad && "bg-slate-300 animate-pulse"
            }`}
            src={background}
            onLoad={onLoad}
            alt="google"
          />
        </>
      )}
      {image && (
        <>
          <div className="relative w-full h-auto">
            <div className="absolute -top-[6%] left-[5%] z-[2]">
              <GreenStars />
            </div>
            <img
              className={`relative h-fit w-full object-cover object-center ${
                imageOnLoad && "bg-slate-300 animate-pulse"
              }`}
              src={image}
              onLoad={onLoad}
              alt="google"
            />
          </div>
        </>
      )}
    </div>
  );
}

PortoCard.propTypes = {
  animation: PropTypes.bool,
};

export default PortoCard;