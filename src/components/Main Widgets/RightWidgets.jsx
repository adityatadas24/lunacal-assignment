import React from "react";
import Info from "../RightInfo.jsx/Info";
import ImageGallery from "../RightInfo.jsx/ImageGallery";

const RightWidgets = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full h-2/4 rounded-2xl mb-4 bg-[#353c44] 
      shadow-[5px_3px_5px_black]">
        <Info />
      </div>
      <hr className="bg-[#3e4146] h-1 border-0 rounded-xl w-10/12 
      shadow-[0px_2px_8px_black]" />

      <div className="w-full h-2/4 rounded-2xl mt-4 bg-[#353c44] shadow-[5px_3px_5px_black]">
        <ImageGallery />
      </div>
    </div>
  );
};

export default RightWidgets;
