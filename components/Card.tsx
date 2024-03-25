import { DiscussionItem } from "@/constants/data";
import React from "react";
import { BiComment } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";

export default function Card({ ...discussionData }: DiscussionItem) {
  return (
    <div className="w-full shadow-[5px_5px_0px_0px_rgba(128,128,128)] rounded-lg flex sm:mb-10 mb-4 mt-4">
      <div className="py-2 px-4">
        <HiOutlineUserCircle className="text-4xl" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 my-2 mx-2">
          <p>{discussionData.title}</p>
          <p className="px-4 py-1 bg-blue-950 text-white rounded-2xl">{discussionData.Section}</p>
        </div>
        <p className="mx-2 my-2 line-clamp-2">
          {discussionData.description}
        </p>
        <div className="w-full my-2 flex justify-between text-sm">
          <p className="flex items-center px-2">
            <CiHeart />
            <span className="ml-1">{discussionData.likes}</span>
          </p>
          <p className="flex items-center px-2">
            <IoEyeOutline />
            <span className="ml-1">{discussionData.views}</span>
          </p>
          <p className="flex items-center px-2 ">
            <BiComment />
            <span className="ml-1">{discussionData.comments} Comments</span>
          </p>
          <p className="flex items-center px-2">
            <GoShareAndroid />
            <span className="ml-1">{discussionData.ShareColumn}</span>
          </p>
        </div>
      </div>
      <div className="py-2 px-3 text-sm text-blue-500">{discussionData.time}</div>
    </div>
  );
}
