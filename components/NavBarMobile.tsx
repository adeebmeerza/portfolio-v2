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
import { usePathname } from "next/navigation";
import { Routes } from "./Header";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const NavBarMobile = ({ routes }: Routes) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

          <nav className="py-4 mb-4 overflow-auto border-y">
            <ul className="flex flex-col gap-3">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    onClick={() => setOpen(false)}
                    className={`block px-2 py-1 text-lg ${
                      pathname == route.path
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button size="lg" className="w-full bg-primary">
            Get in touch
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarMobile;
