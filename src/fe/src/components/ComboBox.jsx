import React, { useState } from "react";

const ComboBox = ({ title, options, setter }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setter(event.target.value);
  };

  return (
    <div className="text-black flex mb-2">
      <p className="mr-2 text-white text-shadow">{title}:</p>
      <select
        id={title}
        value={selectedOption}
        onChange={handleChange}
        className="rounded-md w-32 px-2 py-1 border border-gray-300 focus:outline-none focus:border-blue-500 box-shadow"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
