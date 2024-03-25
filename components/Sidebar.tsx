import { TiArrowSortedDown } from 'react-icons/ti';
import SidebarItems from './SidebarItems';

interface SidebarProps {
  openSideBar: boolean;
  toggleSideBar: () => void;
  handleToggleSection: (section: string) => void;
  activeSection: string;
}

export default function Sidebar({ openSideBar, toggleSideBar, handleToggleSection, activeSection }: SidebarProps) {
  return (
    <div className={`${openSideBar ? 'w-[50%] sm:w-[400px] bg-blue-900' : 'w-0'} h-screen fixed text-center text-white transition-width duration-500 ease-in-out z-10`}>
      {openSideBar && <SidebarItems handleToggleSection={handleToggleSection} activeSection={activeSection} />}
      <button className={`absolute top-1/2 py-6 bg-blue-800 ${openSideBar ? 'sm:left-[400px] left-[100%]' : 'left-0'} transition-left duration-500 ease-in-out`} onClick={toggleSideBar}>
        <TiArrowSortedDown className={`${openSideBar ? 'rotate-90' : '-rotate-90'}`} />
      </button>
    </div>
  );
}
