"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import { Wedding } from "../constants";
import { UseCountdown } from "../hooks/useCooldown";

export type Couple = {
  name: string;
  gender: string;
};

function Header() {
  const [couple, setCouple] = useState<Couple[]>(Wedding);
  const { second } = UseCountdown(80);

  return (
    <div className="flex flex-col h-[920px] bg-slate-700">
      <Image
        src="/11.jpg"
        alt="cover"
        style={{ objectFit: "cover" }}
        width={450}
        height={500}
      />
      <div className="bg-slate-700 flex-1 relative flex flex-col items-center">
        <div className="bg-gradient-to-t from-slate-700 from-20% to-transparent w-full lg:w-[450px] top-[-300px] h-[300px] absolute" />
        <p className="text-white text-center font-sans font-light text-[13px] mb-3">
          THE WEDDING OF
        </p>
        <p className="text-white text-5xl text-center font-DancingScript font-light italic mt-1 mb-7 animate-waving-hand">
          Heri <span className="text-[25px]">&</span> Tiara
        </p>
        <Button name="Buka Undangan" className="text-white font-Chathura font-light text-[20px] border rounded-xl px-3 bg-cyan-700 hover:bg-cyan-900"/>
        <p className="text-white text-center font-sans font-light text-[10px] mt-7">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <p className="text-white text-center font-sans font-light text-[16px] mb-4">
          Sitejo Dan Patner
        </p>
        <Image
          src="/background2.png"
          alt="cover"
          style={{ objectFit: "fill", position: "absolute", bottom: 0 }}
          width={450}
          height={500}
        />
      </div>
    </div>
  );
}

export default Header;
