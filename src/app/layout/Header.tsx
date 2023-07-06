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
  const { second } = UseCountdown(80);

  return (
    <div className="lg:flex sm:flex-col lg:flex-row h-screen gap-8">
      <div className="bg-slate-800 h-3/4 absolute w-auto bg-opacity-50" />
      <div className="flex basis-auto justify-center items-center flex-col">
        
        <div className="flex justify-center relative">
          <Image
            src="/1.jpeg"
            alt="cover"
            className="object-cover shadow-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
