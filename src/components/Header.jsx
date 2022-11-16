import React from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import main2 from "../images/image-web-3-desktop.jpg";
import main1 from "../images/image-web-3-mobile.jpg";
import computer from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";
import hamburgerOpen from "../images/icon-menu.svg";
import hamburgerClose from "../images/icon-menu-close.svg";

const Header = () => {
   const [nav, setNav] = useState(true);

   const handleNav = () => {
      setNav(!nav);
   };

   return (
      <div>
         <div className="w-full max-w-[1500px] h-full mx-auto">
            {/* NAVBAR */}
            <div className="flex justify-between items-center p-5 mb-5">
               <img src={logo} alt="" />

               <ul className="hidden md:flex gap-5">
                  <li>
                     <a href="a">Home</a>
                  </li>
                  <li>
                     <a href="a">New</a>
                  </li>
                  <li>
                     <a href="a">Popular</a>
                  </li>
                  <li>
                     <a href="a">Trending</a>
                  </li>
                  <li>
                     <a href="a">Categories</a>
                  </li>
               </ul>
               <div className="block md:hidden" onClick={handleNav}>
                  <img src={hamburgerOpen} alt="" />
               </div>
               <div
                  className={
                     !nav
                        ? "fixed right-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500"
                        : "fixed right-[-100%]"
                  }
               >
                  <div onClick={handleNav}>
                     <img
                        className="m-8 float-right"
                        src={hamburgerClose}
                        alt=""
                     />
                  </div>
                  <ul className="pt-24">
                     <li className="p-4">
                        <a href="a">Home</a>
                     </li>
                     <li className="p-4">
                        <a href="a">New</a>
                     </li>
                     <li className="p-4">
                        <a href="a">Popular</a>
                     </li>
                     <li className="p-4">
                        <a href="a">Trending</a>
                     </li>
                     <li className="p-4">
                        <a href="a">Categories</a>
                     </li>
                  </ul>
               </div>
            </div>

            {/* HEADER SECTION */}
            <div className="flex flex-col gap-5 px-4 md:grid md:grid-cols-3 md:grid-rows-1">
               <div className="md:order-1 md:col-start-1 md:col-end-3">
                  <img className="block md:hidden" src={main1} alt="" />
                  <img className="hidden md:block" src={main2} alt="" />

                  <div className="flex flex-col md:flex-row justify-evenly items-center">
                     <div className="my-5 w-full max-w-[350px]">
                        <h1 className="text-4xl md:text-6xl font-Inter font-extrabold">
                           The Bright Future of Web 3.0?
                        </h1>
                     </div>
                     <div className="w-full max-w-[330px]">
                        <p className="mb-5">
                           We dive into the next evolution of the web that
                           claims to put the power of the platforms back into
                           the hands of the people. But is it really fulfilling
                           its promise?
                        </p>
                        <button className="bg-[#e9ab53] py-3 px-10 text-white font-Inter font-bold">
                           READ MORE
                        </button>
                     </div>
                  </div>
               </div>

               {/* RIGHT CARD INFO */}
               <div className="flex flex-col justify-evenly md:relative md:top-[-65px] w-full max-w-[400px] h-full max-h-[700px] p-4 my-16 md:mx-[90px] bg-[#00001a] text-white md:order-2 md:col-start-3 md:col-end-4 md:row-span-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#e9ab53]">
                     New
                  </h2>
                  {/* First  title*/}
                  <div className="py-7 border-b-[1px] border-white">
                     <h3 className="text-lg font-bold mb-2">
                        Hydrogen VS Electric Cars
                     </h3>
                     <p className="text-gray-500">
                        Will hydrogen-fueled cars ever catch up to EVs?
                     </p>
                  </div>
                  {/* Second  title*/}
                  <div className="py-7 border-b-[1px] border-white">
                     <h3 className="text-lg font-bold mb-2">
                        The Downsides of AI artistry
                     </h3>
                     <p className="text-gray-500">
                        What are the possible adverse effects of on-demand AI
                        image generation?
                     </p>
                  </div>
                  {/* Third  title*/}
                  <div className="pt-7">
                     <h3 className="text-lg font-bold mb-2">
                        Is VC Funding Drying Up?
                     </h3>
                     <p className="text-gray-500">
                        Private funding by VC firms is down 50% YOY. We take a
                        look at what that means.
                     </p>
                  </div>
               </div>

               {/* BOTTOM LITTLE CARDS */}
               <div className="flex flex-col justify-between md:flex-row h-full gap-10 mb-10 md:order-3 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-5">
                  <div className="flex gap-5  w-[330px] h-[150px]">
                     <img
                        className="w-[100px] h-[150px]"
                        src={computer}
                        alt=""
                     />
                     <div className="flex flex-col justify-evenly">
                        <h3 className="text-3xl text-gray-300 font-bold">01</h3>
                        <h4 className="font-extrabold">Reviving Retro PCs</h4>
                        <p className="text-gray-500">
                           What happens when old PCs are given modern upgrades?
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-5 w-[330px] h-[150px]">
                     <img className="w-[100px] h-[150px]" src={laptop} alt="" />
                     <div className="flex flex-col justify-evenly">
                        <h3 className="text-3xl text-gray-300 font-bold">02</h3>
                        <h4 className="font-extrabold">
                           Top 10 Laptops of 2022
                        </h4>
                        <p className="text-gray-500">
                           Our best picks for various needs and budgets.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-5 w-[330px] h-[150px]">
                     <img className="w-[100px] h-[150px]" src={gaming} alt="" />
                     <div className="flex flex-col justify-evenly">
                        <h3 className="text-3xl text-gray-300 font-bold">03</h3>
                        <h4 className="font-extrabold">The Growth of Gaming</h4>
                        <p className="text-gray-500">
                           How the pandemic has sparked fresh opportunities.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
