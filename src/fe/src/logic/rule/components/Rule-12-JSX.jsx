import React, { useEffect, useState } from "react";
import axios from "axios";

import { Captcha } from "../validator/Rule-12";

const Rule12Image = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/images", {
        params: {
          bucketName: "captcha-password",
          numberOfImages: 1,
        },
      });
      setImages(response.data);

      Captcha.length = 0;
      for (let i = 0; i < response.data.length; i++) {
        Captcha.push(response.data[i].name);
        // console.log(Captcha);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (images.length === 0) {
    return <div>Fetching data..</div>;
  }
  return (
    <div className="flex w-full justify-center">
      <div className="w-6"></div>
      {images.map((image, index) => (
        <img
          key={index}
          src={`data:image/png;base64,${image.img}`}
          alt={`Image ${image.name}`}
          className="w-[8rem] h-[5.4rem] m-2"
        />
      ))}
      <button
        className="text-4xl hover:rotate-refresh transition duration-500 ease-in-out"
        onClick={fetchImages}
      >
        ↻
      </button>
    </div>
  );
};

export default Rule12Image;
