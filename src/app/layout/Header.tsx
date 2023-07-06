"use client";

import React, { useState } from "react";
import { ImageCover, Wedding } from "../constants";
import Image from "next/image";
import { UseCountdown } from "../hooks/useCooldown";

export type Couple = {
  name: string;
  gender: string;
};

function Header() {
  const [couple, setCouple] = useState<Couple[]>(Wedding);
  const { second } = UseCountdown(60)


  
  return (
    <div className="lg:flex sm:flex-col lg:flex-row h-screen gap-8">
      <div className="flex basis-5/6 justify-center items-center flex-col gap-5">
        <div className="h-1/2 flex justify-center items-center flex-col">
          <p className="text-2xl text-center font-sans font-light">
            Happy Wedding
          </p>
          <p className="text-4xl text-center font-sans font-light italic underline">
            Windah Silalahi & Basudara Ginting
          </p>
        </div>
        <p className="mt-[50px]">{second}</p>
      </div>
      {ImageCover.map((result) => {
        return (
          <div
            className="flex basis-1/4 justify-center items-center flex-col"
            key={result.key}
          >
            <div className="flex justify-center w-5/6 h-1/2 relative">
              <Image
                src={result.href}
                alt="cover"
                className="rounded-t-full rounded-b-full object-cover shadow-md"
                width={300}
                height={500}
              />
            </div>
            <p className="text-center text-[40px] antialiased font-sans font-light text-black-100 ">
              {result.date}
            </p>
            <p className="text-center text-[15px] antialiased font-sans font-light mt-10 italic">
              {result.dateStory}
            </p>
            <p className="text-center text-[20px] antialiased font-serif font-extralight mt-1">
              {result.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
