'use client';
import Link from 'next/link';
import Image from 'next/image';

import LoginDropdown from './LoginDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faMagento } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function NavM() {


  return (
    <nav className="bg-[#06081d] bg-opacity-80 p-4 flex items-center justify-between w-screen">
      {/* Logo */}
      <div className="flex items-center space-x-2">

        <span className="text-white text-lg font-semibold"></span>
      </div>

      {/* Center Buttons */}
      <div className="space-x-6 flex">
      
      </div>

      <div className="p-4 ml-0">
        <LoginDropdown />
      </div>
    </nav>
  );
}

export default NavM;
