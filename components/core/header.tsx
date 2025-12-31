import Image from "next/image";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <section className="w-full absolute top-5 z-30">
      <main className="max-w-[1200px] mx-auto hidden md:block">
        <div className="py-2 px-2 w-full flex-between gap-5 border-2 border-black/5 rounded-2xl">
          <div className="flex-1 w-full flex">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt=""
                width={10920}
                height={1080}
                className="w-auto h-14 flex-center"
              />
            </Link>
          </div>
          <div className="flex-1 w-full flex-center gap-15">
            <Link
              href={"/managers"}
              className="text-xl font-sf-pro font-regular"
            >
              Manager’s
            </Link>
            <Link
              href={"/partner"}
              className="text-xl font-sf-pro font-regular"
            >
              Shops
            </Link>
            <Link href={"/faq"} className="text-xl font-sf-pro font-regular">
              FAQs
            </Link>
          </div>
          <div className="flex-1 w-full flex-end">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.app.kanma&hl=en"
              }
              className="bg-kanma-red text-white px-6 py-2.5 rounded-lg opacity-50 pointer-events-none cursor-not-allowed"
              aria-disabled="true"
              tabIndex={-1}
            >
              Install App
            </Link>
          </div>
        </div>
      </main>

      {/* Mobile Header */}
      <main className="max-w-[1200px] mx-auto md:hidden px-4">
        <div className="py-2 px-4 w-full flex justify-between items-center border-2 border-black/5 rounded-2xl bg-white/80 backdrop-blur-md">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Kanma Logo"
              width={100}
              height={40}
              className="w-auto h-10"
            />
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-black" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <Image
                    src={Logo}
                    alt="Kanma"
                    width={80}
                    height={32}
                    className="w-auto h-8"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-4">
                  <Link
                    href={"/"}
                    className="text-lg font-sf-pro font-medium hover:text-kanma-red transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/managers"}
                    className="text-lg font-sf-pro font-medium hover:text-kanma-red transition-colors"
                  >
                    Manager’s
                  </Link>
                  <Link
                    href={"/partner"}
                    className="text-lg font-sf-pro font-medium hover:text-kanma-red transition-colors"
                  >
                    Shops
                  </Link>
                  <Link
                    href={"/faq"}
                    className="text-lg font-sf-pro font-medium hover:text-kanma-red transition-colors"
                  >
                    FAQs
                  </Link>
                </div>
                <div className="h-px w-full bg-gray-100" />
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.app.kanma&hl=en"
                  }
                  className="bg-kanma-red text-white px-6 py-3 rounded-lg text-center font-medium opacity-50 pointer-events-none cursor-not-allowed"
                >
                  Install App
                </Link>
                <div className="flex gap-4 mt-4 justify-center">
                  {/* Socials can go here if needed */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </main>
    </section>
  );
};

export default Header;
