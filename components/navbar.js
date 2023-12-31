import React, { useState, useEffect } from "react";
import {Link} from "react-scroll";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
const Navbar = () => {
  const navigation = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/video",
    },
    {
      id: 3,
      title: "Service",
      link: "/service",
    },
    {
      id: 4,
      title: "Testimonial",
      link: "/testimonial",
    },
    
  ];

  const router = useRouter();
  const handleClick =() =>{
    router.push("/");
  };

  return (
    <div className="w-screen relative ">
      <nav className="container bg-black z-10 flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between fixed top-0 left-0 right-0">
       
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
                    <span>
                      <Image
                        src="/img/alphabet-icon.svg"
                        alt="W"
                        width="32"
                        height="32"
                        className="w-9 bg-indigo-500 pl-1.5 rounded-sm font-bold"
                      />
                    </span>
                    <span>Weld Metrix</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} to={item.link} smooth={true} offset={-100} duration={500} onClick={handleClick} className="w-full px-4 py-2 -ml-4  rounded-md text-gray-300 hover:text-indigo-500 focus:text-white focus:bg-indigo-500 focus:outline-none">
                          {item.title}
                      </Link>
                    ))}
                    {/* <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Get Started
                    </Link> */}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link to={menu.link} smooth={true} offset={-100} duration={500} onClick={handleClick} className="inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md hover:text-indigo-500 focus:text-white focus:outline-none focus:bg-indigo-500">
                    {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
          </Link> */}

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
