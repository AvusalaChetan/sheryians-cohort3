import React from "react";

const Input = ({ value, setText,  className = '' }) => {
  return (
    <textarea
      value={value}
      onChange={(e)=>setText(e.target.value)}
      placeholder={'enter what u what to here '}
       className={`border border-gray-300 rounded p-2 w-full resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input;
