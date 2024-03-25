import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoIosNotifications } from 'react-icons/io';
import { MdOutlineMessage, MdTimeline } from 'react-icons/md';

interface SidebarItemsProps {
  handleToggleSection: (section: string) => void;
  activeSection: string;
}

export default function SidebarItems({ handleToggleSection, activeSection }:SidebarItemsProps) {
  return (
    <div>
      <div className='flex py-4 items-center pl-[20px] space-x-5 sm:space-x-10 pr-[20px]'>
        <div className='flex items-center'>
          <HiOutlineUserCircle className='text-4xl' />
          <div className='text-2xl ml-2'>Hello, User</div>
        </div>
        <div><IoIosNotifications className='text-4xl' /></div>
      </div>
      <hr />
      <div>
        <div className={`flex pl-2 items-center py-2 gap-1 text-2xl cursor-pointer ${activeSection === 'forum' ? 'bg-blue-950' : 'text-white'}`} onClick={() => handleToggleSection('forum')}>
          <MdOutlineMessage />
          <span>Discussion Forum</span>
        </div>
        <div className={`flex pl-2 items-center py-2 gap-1 text-2xl cursor-pointer ${activeSection === 'market' ? 'bg-blue-950' : 'text-white'}`} onClick={() => handleToggleSection('market')}>
          <MdTimeline />
          <span>Market Stories</span>
        </div>
      </div>
    </div>
  );
}
