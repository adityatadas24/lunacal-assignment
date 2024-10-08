import React, { useState } from "react";
import images from "../../Assests/Rectangle 5160.png";
const ImageGallery = () => {
  const img = [
    {
      id: 1,
      imgs: images,
    },
    {
      id: 2,
      imgs: images,
    },
  ];

  const [image, setIamage] = useState(img);
  const [imageIndex, setImageIndex] = useState(0);

  function handleNext() {
    setImageIndex((prev) =>
      prev === image.length - 2 ? image.length - 2 : prev + 1
    );
  }

  function handlePrevious() {
    setImageIndex((prev) => (prev === 0 ? 0 : prev - 1));
  }

  const addimages = () => {
    setIamage([...image, { id: image.length + 1, imgs: images }]);
  };

  return (
    <div
      className="w-11/12 flex flex-col justify-center items-center 
    overflow-hidden p-3 m-1 ml-auto mr-auto"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <div className="w-20 bg-black text-center p-2 rounded-xl text-sm">Gallery</div>
        <div className="flex justify-center items-center">
          <button
            className="w-30 pl-10 pr-3 bg-[#42474d] text-center p-2 rounded-3xl 
            shadow-[-3px_-3px_8px_gray,4px_5px_10px_#000] font-semibold text-[15px] cursor-pointer 
            hover:shadow-[-3px_-3px_8px_#000,4px_5px_10px_gray]"
            onClick={addimages}
          >
            ADD IMAGE
          </button>
          <div className="ml-10 ">
            <button
              className="w-10 h-10 bg-[#2a2d32] rounded-full mr-1
               hover:bg-slate-600 hover:border"
              onClick={handlePrevious}
            >
              🡰
            </button>

            <button
              className="w-10 h-10 bg-[#2a2d32] rounded-full ml-1
               hover:bg-slate-600 hover:border"
              onClick={handleNext}
            >
              🡲
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full "
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${imageIndex * (100 / 3)}%)`,
        }}
      >
        <div className="flex justify-start items-center">
          {image.map((item) => (
            <div style={{ flex: "0 0 auto" , marginRight:"15px"}}>
              <img
                key={item.id}
                src={item.imgs}
                alt="image"
                style={{ width: "138px", height:'133px' }}
                className="hover:scale-110 hover:-rotate-6 hover:transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
