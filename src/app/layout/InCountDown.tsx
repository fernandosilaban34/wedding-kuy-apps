"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import { Wedding } from "../constants";
import { UseCountdown } from "../hooks/useCooldown";
import BorderText from "../components/BorderText";

export type Couple = {
  name: string;
  gender: string;
};

function InCountDown() {
  const [couple, setCouple] = useState<Couple[]>(Wedding);
  const { second } = UseCountdown(80);

  return (
    <div className="flex flex-col h-[920px] bg-slate-700 justify-center bg-[url('/12.jpg')] bg-center items-center">
      <div className="brightness-100 text-center">
        <p className="text-white font-sans font-semibold text-[25px] mb-4">
          WEDDING OF
        </p>
        <p className="text-white font-DancingScript font-light text-[50px] mb-4">
          Rizieq & Naomi
        </p>
        <p className="text-white font-sans font-light text-[14px] mb-4">
          We invite you to celebrate our wedding
        </p>
        <p className="text-white font-sans font-bold text-[20px] mb-4">
          Minggu, 10 Oktober 2022
        </p>
      </div>

      <Button
        name="Save the date"
        className="text-white font-Chathura font-light text-[20px] border rounded-xl px-3 bg-amber-800 hover:bg-amber-900 w-40 mt-32 mb-3"
      />
      <div className="flex py-5 flex-row space-x-4">
        <BorderText queue={12} detail="Hari"/>
        <BorderText queue={3} detail="Jam"/>
        <BorderText queue={1} detail="Menit"/>
        <BorderText queue={second} detail="Detik"/>
      </div>
    </div>
  );
}

export default InCountDown;
