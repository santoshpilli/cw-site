import Image from "next/image";
import React, { useState } from "react";
import { CrossIcon2 } from "../common/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState([]);

  const handleMenuClick = (menu) => {
    if (menu === activeMenu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
      const item = sidebarlinks.find((item) => item.title === menu);
      if (!item.subMenu) {
        router.push(item.url);
        setSidebarOpen(false);
      }
    }
  };

  const routeTohome = () => {
    router.push("/");
  };

  const sidebarlinks = [
    {
      title: "Apps",
      url: "/apps",
      subMenu: [
        {
          title: "Point of Sale",
          url: "/apps/point-of-sale",
        },
        {
          title: "Inventory",
          url: "/apps/inventory",
        },
        {
          title: "Sales",
          url: "/apps/sales",
        },
        {
          title: "Purchase",
          url: "/apps/purchase",
        },
        {
          title: "Finance",
          url: "/apps/finance",
        },
        {
          title: "HRMS",
          url: "/apps/hr",
        },
        {
          title: "Restaurant POS",
          url: "/apps/point-of-sale/restaurant",
        },
        {
          title: "Price Connect",
          url: "/apps/price-connect",
        },
        {
          title: "Composer",
          url: "/apps/composer",
        },
      ],
    },
    {
      title: "Solutions",
      // url: "/apps",
      subMenu: [
        {
          title: "Retail Connect",
          url: "/solutions/retail",
        },
        {
          title: "Restaurant Connect",
          url: "/solutions/restaurant",
        },
        {
          title: "RFID Connect",
          url: "/solutions/rfid-connect",
        }
      ],
    },
    
    // {
    //   title: "Pricing",
    //   url: "/pricing",
    // },
    {
      title: "Support",
      url: "/su",
      subMenu: [
        {
          title: "Help Center",
          url: "https://help.cwsuite.com/",
        },
        {
          title: "Professional Services",
          url: "/support/professional-services",
        },
      ],
    },
    {
      title: "Resources",
      url: "/re",
      subMenu: [
        {
          title: "Blog",
          url: "https://medium.com/@cwsuite",
        },
        {
          title: "Contact Us",
          url: "/resources/contact",
        },
        {
          title: "About CW Suite",
          url: "/resources/about-cw-suite",
        },
      ],
    },
  ];

  const handleSubMenuClick = (title) => {
    if (openMenus.includes(title)) {
      setOpenMenus(openMenus.filter((menu) => menu !== title));
    } else {
      setOpenMenus([...openMenus, title]);
    }
  };

  const [viewaccount, setViewAccount] = useState(null);
  const activeViewAccountHandler = (value) => {
    if (value === viewaccount) {
      setViewAccount(null);
    } else {
      setViewAccount(value);
    }
  };

  return (
    <>
      <aside
        className={`z-40 shadow-md fixed lg:hidden w-full h-screen top-0 flex xl:hidden flex-col items-center bg-white justify-between transition-all duration-300 ease-in ${
          isSidebarOpen ? "left-0" : "left-full"
        }`}
      >
        <div className="w-full lg:hidden">
          <div
            className="flex items-center justify-between w-full"
            style={{
              height: "65px",
              backgroundColor: "#fff",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
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

            <div className="flex">

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
                  className="ml-2 mr-4"
                  src="/images/mdi_rocket-launch.svg"
                  alt="Cart Symbol Image"
                  width={20}
                  height={20}
                />
              </Link> */}

              <span
                className="cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              >
                <CrossIcon2 />
              </span>
            </div>
          </div>

          <ul className="ff-Inter text-sm flex flex-col justify-between text-darkBlack overflow-auto max-h-[500px] scrollbar-w-0 w-full">
            {sidebarlinks.map((item, index) => (
              <div key={index}>
                <li>
                  <div
                    className="flex items-center justify-between w-full cursor-pointer py-4 px-4"
                    style={{ borderBottom: "1px solid #C2C2C2" }}
                    onClick={() =>
                      item.subMenu
                        ? handleSubMenuClick(item.title)
                        : handleMenuClick(item.title)
                    }
                  >
                    <span
                      style={{
                        color: "#101828",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </span>
                    {item.subMenu && (
                      <span className="cursor-pointer">
                        {openMenus.includes(item.title) ? (
                          <ChevronUpIcon style={{ width: "20px" }} />
                        ) : (
                          <ChevronDownIcon style={{ width: "20px" }} />
                        )}
                      </span>
                    )}
                  </div>
                  {item.subMenu && (
                    <ul
                      style={{
                        backgroundColor: "#F3F5FC",
                        fontSize: "16px",
                        color: "#101828",
                        fontStyle: "normal",
                        fontWeight: "400",
                      }}
                      className={
                        openMenus.includes(item.title) ? "show px-4" : "hidden"
                      }
                    >
                      {item.subMenu.map((child, index) => (
                        <li
                          className="py-3"
                          key={index}
                          onClick={() => {
                            if (child.url.startsWith("http")) {
                              window.open(child.url, "_blank");
                            } else {
                              router.push(child.url);
                              setSidebarOpen(false);
                            }
                          }}
                        >
                          {child.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
