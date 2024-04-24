import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LeftArrow, ToggleIcon } from "../common/Icons";
import { useRouter } from "next/router";
import menuData from "../../pages/menudata.json"

const Navbar = ({ setSidebarOpen }) => {
  const router = useRouter();

  const yOffsetValue = typeof window !== "undefined" && window.pageYOffset;
  const [yOffset, setYOffset] = useState(yOffsetValue);

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    setYOffset(currentYOffset);
  }

 
  const addToRoute = (data) =>{   
    router.push(data.slug)
  }

  return (
    <>
      <nav
        className={` transition-all duration-500 ease-linear px-3 xl:px-10  flex items-center bg-white py-[18px] justify-between ${
          yOffset > 70 ? " sticky-bar top-0 sticky z-30 shadow-sm" : ""
        }`}
      >
        <div className="max-w-[120px] sm:max-w-[170px]">
          <Link href="/">
            <Image
              src="/images/cwsuite-logo.png"
              width={160}
              height={31}
              alt="LOGO"
            />
          </Link>
        </div>

        <ul className="ff-Inter text-xs hidden lg:flex items-center justify-between text-darkBlack">
        {menuData.map((menuItem, index) => (

          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer"
              onMouseEnter={() => setActiveMenuItem(menuItem?.title)}
              onMouseLeave={() => setActiveMenuItem(null)}
              >
            {/* <Link href={menuItem.slug}> */}
            <span onClick={()=>addToRoute(menuItem)}>{menuItem.title}</span>
            {/* </Link> */}
          
              {activeMenuItem === menuItem?.title && menuItem.children && (
                <div className="absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded w-[240px]">
                  <ul className="flex flex-col items-start w-full">
                    {menuItem.children.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="footer-text text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer"
                      >
                        {/* <Link href={submenu.slug}> */}
                          <span onClick={()=>addToRoute(submenu)}>{submenu.title}</span>
                        {/* </Link> */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </li>
        ))}                  
        </ul>

        <div className="flex items-center ff-Inter">
          {/* <span
            onClick={onSignIn}
            style={{ cursor: "pointer" }}
            className="ff-Inter text-xs text-darkBlack mr-4 xl:mr-10 hover:opacity-70 transition-all duration-200 ease-in hidden sm:block"
          >
            {" "}
            Login
          </span> */}
          {/* <button
            onClick={onSignUp}
            className="hidden lg:flex bg-blue px-5 xl:px-5 py-3 xl:py-1.5 rounded-full text-white text-xs items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
          >
            Get Started
            <LeftArrow />
          </button> */}
          {/* <button
            onClick={onSignUp}
            className="hidden lg:flex bg-blue px-5 xl:px-5 py-3 xl:py-1.5 rounded-full text-white text-xs items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
          >
            Contact Sales
            <LeftArrow />
          </button> */}
          <div className="lg:hidden flex">
            {/* <Link href="https://auth.cwsuite.com/sign-in">
            <Image
              className="mr-3"
              src="/images/user.png"
              alt="User Image"
              width={20}
              height={20}
            />
            </Link>
            <Link href="/pricing">
            <Image
              src="/images/mdi_rocket-launch.svg"
              alt="Cart Symbol Image"
              width={20}
              height={20}
            />
            </Link> */}
           
          </div>

          <span
            className="lg:hidden  cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            {" "}
            <ToggleIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
