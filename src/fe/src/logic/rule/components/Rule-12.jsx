/**
 * @file Rule-12.js
 * @brief Implements Rule 12 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

import React, { useEffect, useState } from "react";
import axios from "axios";

var Captcha = "";

const Rule12Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password + Captcha;

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule12Validator = (password) => {
  let result = matchingAlgorithm(password, Captcha) !== -1;

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule12JSX = ({ difficulty, rule, password }) => {
  const [image, setImage] = useState();

  const fetchImages = async () => {
    try {
      const beforeCaptcha = Captcha;
      const response = await axios.get("http://localhost:3000/images", {
        params: {
          bucketName: "captcha-password",
          numberOfImages: 1,
        },
      });
      setImage(response.data[0]);
      Captcha = response.data[0].name;
      rule.correct = rule.check(password);

      if (beforeCaptcha === Captcha) {
        fetchImages();
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung CAPTCHA berikut</p>
      <div className="flex w-full justify-center">
        <div className="w-6"></div>
        {image && (
          <img
            key={0}
            src={`data:image/png;base64,${image.img}`}
            alt={`Image ${image.name}`}
            className="w-[8rem] h-[5.4rem] m-2"
          />
        )}
        <button
          className="text-4xl hover:rotate-refresh transition duration-500 ease-in-out"
          onClick={fetchImages}
        >
          ↻
        </button>
      </div>
    </RuleBox>
  );
};

export { Rule12Validator, Rule12JSX, Rule12Cheat };
