import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-110 transition ${styles}`}>
      {text}
    </button>
  );
};

export default Button;
