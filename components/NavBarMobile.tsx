"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";
import { RouteNameType, RouteProps } from "@/hooks/useScrollTo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBarMobile = ({
  routes,
  onNavClick,
}: {
  routes: RouteProps[];
  onNavClick: (routeLabel: RouteNameType) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="sm:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent className="w-3/4 [&>button:first-of-type]:hidden">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetClose asChild>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900">
            <X />
            <span className="sr-only">Close</span>
          </button>
        </SheetClose>

        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between py-4 ">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                width={25}
                height={25}
                alt="logo"
                className="align-baseline mb-2"
              />
              <span className="font-bold text-xl">AdeebMeerza.</span>
            </Link>
          </div>

          <NavigationMenu
            orientation="vertical"
            className="pb-4 mb-4 border-b max-w-full flex-none"
          >
            <div className="relative w-full">
              <NavigationMenuList className="flex flex-col w-full space-y-1">
                {routes.map((route) => (
                  <NavigationMenuItem key={route.label} className="w-full">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-50/10 font-mono tracking-tight capitalize",
                        "h-12 w-full items-start"
                      )}
                      onClick={() => {
                        onNavClick(route.label);
                        setOpen(false);
                      }}
                    >
                      {route.label.replace(/([A-Z])/g, " $1")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
          </NavigationMenu>

          <div className="space-x-3 mb-4">
            <Button asChild variant="ghost" size="lg" className="">
              <Link
                href="https://www.linkedin.com/in/adibmirza"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="https://github.com/adeebmeerza" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
          </div>

          <Drawer>
            <DrawerTrigger>
              <Button
                size="lg"
                className="w-full bg-primary/80 dark:text-foreground/70"
              >
                Get in touch
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="pb-0">
                <DrawerTitle>Get in touch.</DrawerTitle>
                <DrawerDescription>
                  Hey there! Let&apos;s have a quick chat. <br /> Drop me a
                  message.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <ContactForm />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarMobile;
