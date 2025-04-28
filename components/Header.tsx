"use client";

import React, { RefObject, useEffect, useState } from "react";
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
import { RouteNameType, routes, SectionRefs } from "@/hooks/useScrollTo";

const Header = ({
  onScrollTo,
  sectionRefs,
}: {
  onScrollTo: (ref: RefObject<HTMLDivElement | null>, offset?: number) => void;
  sectionRefs: SectionRefs;
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [logoSize, setLogoSize] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 20;
      setIsScroll(scrollCheck);
      setLogoSize(scrollCheck ? 28 : 30);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (routeLabel: RouteNameType) => {
    onScrollTo(sectionRefs[routeLabel]);
  };

  return (
    <div>
      <header className={cn("fixed w-full h-20 top-0 z-10")}>
        {/* gradient */}
        <div
          className={cn(
            "absolute inset-0 z-[-2] bg-gradient-to-b from-primary/40 via-background to-background dark:from-primary/40 dark:via-background dark:via-90% dark:to-background transition-opacity duration-200",
            isScroll ? "opacity-0" : "opacity-100"
          )}
        />
        {/* blurred */}
        <div
          className={cn(
            "absolute inset-0 z-[-1] bg-primary/20 backdrop-blur-sm shadow-md transition-opacity duration-200",
            isScroll ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        />

        <div className="wrapper flex justify-between items-center h-full">
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
                <NavigationMenuItem key={route.label}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-50/10 font-mono tracking-tight capitalize"
                    )}
                    onClick={() => handleNavClick(route.label)}
                  >
                    {route.label.replace(/([A-Z])/g, " $1")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="sm:hidden">
            {/* <ModeToggle></ModeToggle> */}
            <NavBarMobile routes={routes} onNavClick={handleNavClick} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
