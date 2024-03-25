import React from "react";
import Image from "next/image";
import { MarketItem } from "@/constants/data";

export default function MarketCard({ ...items }: MarketItem) {
  return (
    <div className="w-full h-46 sm:h-52  sm:mb-8 mt-4 mb-2 overflow-hidden shadow border-gray-400  ">
      <div className="w-full bg-green h-24  relative">
        <Image src={items.image} alt="img" fill />
      </div>
      <div className="text-xl sm:p-1 font-semibold p-1">{items.title}</div>

      <div className="text-sm pl-2 pb-2 sm:pl-2 sm:pb-1  font-light ">
      {items.desc}
      </div>
    </div>
  );
}
