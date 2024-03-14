// src/components/Input.jsx
import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const Input = ({ onChangeCallback }) => {
  // state to handle the input value
  const [value, setValue] = useState('');

  // new handler function that will update the state
  // when the input changes
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeCallback && onChangeCallback(inputValue);
  };

  return (
    <>
      <IoSearchSharp className="absolute md:left-[29.5%] left-[20%]" size={30} />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="md:text-[1rem] text-sm bg-transparent placeholder-black border-[#000] outline-none border w-3/4 md:w-1/2 mx-auto rounded-[10px] text-black pl-10 md:pl-14 px-10 md:px-4 py-2"
        placeholder="search for products"
      />
    </>
  );
};

export default Input;
