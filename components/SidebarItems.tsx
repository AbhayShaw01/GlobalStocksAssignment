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
      <div className='flex py-2 items-center space-x-4 pl-[10px] sm:pl-[20px] pr-[20px]'>
        <div className='flex items-center'>
          <HiOutlineUserCircle className='text-2xl' />
          <div className='text-xl ml-2'>Hello, User</div>
        </div>
        <div><IoIosNotifications className='text-2xl' /></div>
      </div>
      <hr />
      <div>
        <div className={`flex pl-2 items-center py-2 gap-1 text-xl cursor-pointer ${activeSection === 'forum' ? 'bg-blue-950' : 'text-white'}`} onClick={() => handleToggleSection('forum')}>
          <MdOutlineMessage />
          <span>Discussion Forum</span>
        </div>
        <div className={`flex pl-2 items-center py-2 gap-1 text-xl cursor-pointer ${activeSection === 'market' ? 'bg-blue-950' : 'text-white'}`} onClick={() => handleToggleSection('market')}>
          <MdTimeline />
          <span>Market Stories</span>
        </div>
      </div>
    </div>
  );
}
