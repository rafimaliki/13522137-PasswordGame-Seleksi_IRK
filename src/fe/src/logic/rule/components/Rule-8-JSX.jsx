import React, { useEffect, useState } from "react";
import axios from "axios";

import { Negara } from "../validator/Rule-8";

const Rule8Image = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/images", {
          params: {
            bucketName: "bendera",
            numberOfImages: 3,
          },
        });
        setImages(response.data);
        // console.log(response.data)

        Negara.length = 0;
        for (let i = 0; i < response.data.length; i++) {
          Negara.push(response.data[i].name);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  if (images.length === 0) {
    return <div>Fetching data..</div>;
  }
  return (
    <div className="flex w-full justify-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={`data:image/png;base64,${image.img}`}
          alt={`Image ${image.name}`}
          className="w-[8rem] h-[5.4rem] m-2"
        />
      ))}
    </div>
  );
};

export default Rule8Image;
