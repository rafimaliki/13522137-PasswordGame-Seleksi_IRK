/**
 * @file Rule-8.js
 * @brief Implements Rule 8 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

import React, { useEffect, useState } from "react";
import axios from "axios";

var Negara = [];

const Rule8Cheat = (password, setPassword, difficulty, wrongData) => {
  const randomNegara = Negara[Math.floor(Math.random() * Negara.length)];
  const newPassword = password + randomNegara;
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule8Validator = (password) => {
  // if (Negara.length === 0) return true;
  let result = false;
  for (let i = 0; i < Negara.length; i++) {
    if (matchingAlgorithm(password.toLowerCase(), Negara[i]) !== -1) {
      result = true;
      break;
    }
  }
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule8JSX = ({ difficulty, rule }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://13522137-password-game-seleksi-irk-be.vercel.app/images",
          {
            params: {
              bucketName: "bendera",
              numberOfImages: 3,
            },
          }
        );
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
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung nama dari salah satu negara berikut</p>
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
    </RuleBox>
  );
};

export { Rule8Validator, Rule8JSX, Rule8Cheat };
