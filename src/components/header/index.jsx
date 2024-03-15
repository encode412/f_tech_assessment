import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuX, LuShoppingCart } from 'react-icons/lu';
import { BsPersonFill } from 'react-icons/bs';
import { IoHelpCircleOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import Button from '../button';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();

  return (
    <div className="flex items-center justify-center h-12 md:h-24 bg-[#3767ce] text-primary">
      <Link to="/" className="text-white text-xl md:text-2xl">
        Encode<span className="text-[#192946]">Plug</span>
      </Link>
      <div className="px-6 xl:px-4 flex items-center justify-center space-x-8 ">
        <div className="w-40">{/* <Logo /> */}</div>
        <div className="md:space-x-6 hidden xl:flex items-center w-5/6">
          <div className="flex items-center gap-4 w-[40rem]"></div>
        </div>
      </div>

      <div className="items-center gap-8 hidden xl:flex mx-10">
        <Link to="/" className="text-white text-xl flex gap-2 items-center">
          <BsPersonFill color="#fff" size={20} />
          Account
        </Link>
        <Link to="/" className="text-white text-xl flex gap-2 items-center">
          <IoHelpCircleOutline color="#fff" size={20} />
          Help
        </Link>
        <Link to="/" className="text-white text-xl flex gap-2 items-center">
          <LuShoppingCart color="#fff" size={20} />
          Cart
        </Link>
      </div>

      <div className="xl:hidden block cursor-pointer">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      </div>
      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full bg-[#fff] transition-all duration-150 flex flex-col z-10 justify-center items-center animate-slideBottom overflow-none h-full">
          <LuX
            className="text-2xl absolute top-5 right-6 cursor-pointer hover:text-lightBlue"
            fontSize={27}
            onClick={() => setToggleMenu(false)}
          />
          <ul className="list-none w-full px-4">
            <Link
              to="/"
              className="text-black ml-6 text-[1.35rem] md:text-2xl font-medium"
            >
              Encode<span className="text-[#283c55] font-semibold">Plug</span>
            </Link>
            <hr className="z-20- h-6 my-8 text-[#395d88] w-[70%] mx-auto" />
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/" className="hover:text-lightBlue font-semibold">
                  Account
                </Link>
                <BsPersonFill color="#000" size={23} />
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/" className="hover:text-lightBlue font-semibold">
                  Help
                </Link>
                <IoHelpCircleOutline color="#000" size={23} />
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/" className="hover:text-lightBlue font-semibold">
                  Cart
                </Link>
                <LuShoppingCart color="#000" size={23} />
              </div>
            </li>
          </ul>
          <div className="flex items-center space-x-10 absolute bottom-0 my-6">
            <Link to="/">
              <Button
                className="hover:bg-lightBlue hover:scale-95 font-extrabold duration-300 center"
                children="Sign Up"
              />
            </Link>
            <Link to="/">Join EncodePlug today!</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
