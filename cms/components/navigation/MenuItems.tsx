"use client";
import Link from "next/link";
import { useState } from "react";

export default function MenuItems() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Games",
      subMenuItems: [
        {
          name: "All Games",
          link: "/games"
        },
        {
          name: "Best Selling Games",
          link: "/games/best-selling"
        }
      ]
    },
    {
      name: "Deals",
      subMenuItems: [
        {
          name: "August",
          link: "/deals/august"
        },
        {
          name: "Upcoming",
          link: "/deals/upcoming"
        }
      ]
    },
    {
      name: "Orders",
      link: "/orders"
    },
    {
      name: "Users",
      link: "/users"
    }
  ];

  const handleMenuClick = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div className="w-64">
      {menuItems.map((item, index) => (
        <div key={index}>
          {item.subMenuItems ? (
            <div>
              <button
                onClick={() => handleMenuClick(item.name)}
                className="w-full text-left px-4 py-2 hover:bg-yellow-400 flex justify-between items-center rounded-lg"
              >
                {item.name}
                <svg
                  className={`w-4 h-4 transform ${openMenu === item.name ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === item.name && (
                <div className="pl-4">
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <Link href={subItem.link} key={subIndex} className="block px-4 py-2 hover:bg-yellow-400 rounded-lg">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.link} className="block px-4 py-2 hover:bg-yellow-400 rounded-lg">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
