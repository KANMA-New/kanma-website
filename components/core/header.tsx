import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <section className="w-full absolute top-5 z-30">
      <main className="max-w-[1200px] mx-auto">
        <div className="py-2 px-2 w-full flex-between gap-5 border-2 border-black/5 rounded-2xl">
          <div className="flex-1 w-full flex">
            <Link href={'/'}>
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
            <Link href={"/managers"} className="text-xl font-sf-pro font-regular">
              Manager’s
            </Link>
            <Link href={"/"} className="text-xl font-sf-pro font-regular">
              Shops
            </Link>
            <Link href={"/"} className="text-xl font-sf-pro font-regular">
              FAQs
            </Link>
          </div>
          <div className="flex-1 w-full flex-end">
            <button className="bg-kanma-red text-white px-6 py-2.5 rounded-lg">
              Install App
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;
