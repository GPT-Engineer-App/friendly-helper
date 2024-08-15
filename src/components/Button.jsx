import React from 'react';

const Button = ({ label, onClick }) => (
  <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onClick}>
    {label}
  </button>
);

export default Button;