"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NavBarMobile from "./NavBarMobile";

export type RouteProps = {
  path: string;
  label: string;
};

export const routes: RouteProps[] = [
  {
    path: "#recent-works",
    label: "Works",
  },
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#stacks",
    label: "Tech stacks",
  },
  {
    path: "#experiences",
    label: "Experiences",
  },
  {
    path: "#contact",
    label: "Contacts",
  },
];

export interface Routes {
  routes: RouteProps[];
}

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [logoSize, setLogoSize] = useState(30);
  // const [top, setTop] = useState("top-0");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;

      if (scrollCheck) {
        setIsScroll(scrollCheck);
        setLogoSize(28);
      } else {
        setIsScroll(scrollCheck);
        setLogoSize(30);
      }
    });
  }, [isScroll]);

  return (
    <>
      {/* {isScroll && <div className="h-20" />} */}
      <header
        className={cn(
          "wrapper h-20 flex justify-between items-center py-auto overflow-hidden transition-all duration-300 ",
          isScroll && "fixed top-0 w-full z-10 bg-primary/20 backdrop-blur-sm"
          // top
        )}
      >
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={logoSize}
            height={logoSize}
            alt="logo"
            className="transition-all duration-1000"
          />
        </Link>
        <NavigationMenu className="hidden sm:inline-block">
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <NavigationMenuLink
                  href={route.path}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-gray-50/10 font-mono tracking-tight"
                  )}
                >
                  {route.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="sm:hidden">
          {/* <ModeToggle></ModeToggle> */}
          <NavBarMobile routes={routes} />
        </div>
      </header>
    </>
  );
};

export default Header;
