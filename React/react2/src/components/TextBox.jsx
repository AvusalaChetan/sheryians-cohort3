import React from "react";

const TextBox = ({text, charIndex, charLength}) => {
  return (
    <div className="top border h-[50%] w-full overflow-y-scroll overflow-x-hidden ">
      <p>
        <span>{text.substring(0, charIndex)}</span>
        <span className="bg-yellow-300">
          {text.substring(charIndex, charIndex + charLength)}
        </span>
        <span>{text.substring(charIndex + charLength)}</span>
      </p>
    </div>
  );
};

export default TextBox;
