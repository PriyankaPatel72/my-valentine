"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Envelope() {
  const [clickStatus, setClickStatus] = useState("/images/envelope-closed.png");

  const EnvelopeSwitch = () => {
    if (clickStatus === "/images/envelope-closed.png") {
      setClickStatus("/images/envelope-open.png");
    } else {
      setClickStatus("/images/envelope-closed.png");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div onClick={EnvelopeSwitch} className="mt-2 cursor-pointer outline-none">
        <Image src={clickStatus} alt="Envelope" width={500} height={500} className="transition-transform transform hover:scale-110" />
      </div>
      {clickStatus === "/images/envelope-open.png" && (
        <Link href="/Game-home">
          <div className="mt-2 px-6 py-3 text-2xl font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-110 outline-none">
            Start Game
          </div>
        </Link>
      )}
    </div>
  );
}