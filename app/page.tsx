"use client"
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DiscussionForum from '@/components/DiscussionForum';
import MarketStories from '@/components/MarketStories';

export default function HomePage() {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [activeSection, setActiveSection] = useState('forum');

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleToggleSection = (section:string) => {
    setActiveSection(section);
  };

  return (
    <div className='w-screen h-screen flex relative'>
      <Sidebar openSideBar={openSideBar} toggleSideBar={toggleSideBar} handleToggleSection={handleToggleSection} activeSection={activeSection} />
      <div className={`flex-grow ${openSideBar ? 'sm:pl-[400px]' : ''}`}>
        <div className="flex flex-row justify-between sm:hidden">
          <h2
            className={`text-center text-xl font-bold p-4  bg-blue-900  text-white  w-full cursor-pointer ${activeSection === 'forum' ? 'bg-blue-950  border-b-4 border-orange-400' : 'text-blue-800'}`}
            onClick={() => handleToggleSection('forum')}
          >
            Discussion Forum
          </h2>
          <h2
            className={`text-center text-xl  p-4 w-full bg-blue-900 text-white font-semibold cursor-pointer ${activeSection === 'market' ? ' bg-blue-950 border-b-4 border-orange-400' : 'text-blue-800'}`}
            onClick={() => handleToggleSection('market')}
          >
            Market Stories
          </h2>
        </div>
        {activeSection === 'forum' && (
          <div className="sm:hidden">
            <DiscussionForum />
          </div>
        )}
        {activeSection === 'market' && (
          <div className="sm:hidden">
            <MarketStories />
          </div>
        )}
        <div className="hidden sm:flex flex-row flex-grow">
          <div className="flex flex-col flex-grow" style={{ flex: 7 }}>
            <div className='flex ml-4'>
            <h2 className="  text-left text-3xl  font-semibold sm:bg-slate-200 sm:text-red-600">DISCUSSION FORUM</h2>
            </div>
            <DiscussionForum />
          </div>
          <div className="flex flex-col flex-grow " style={{ flex: 3 }}>
            <div className='flex ml-8'>
            <h2 className="sm:bg-slate-200 text-left text-xl font-semibold p-4 sm:text-red-600 ">MARKET STORIES</h2>
            </div>
            <MarketStories />
          </div>
        </div>
      </div>
    </div>
  );
}

