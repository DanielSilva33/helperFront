import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" text-gray-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* <img
            src="images/logo2.svg"
            alt="Logo da API"
            className="w-8 h-8 mr-2 sm:w-auto"
          /> */}
          <span className="text-lg font-bold">SimpleAPI</span>
        </Link>

        <div className="sm:hidden relative">
          <button className="hover:text-gray-400" onClick={toggleMenu}>
            <FaBars className="w-6 h-6 mr-2 sm:w-auto" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2  p-2 rounded ">
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="hover:text-gray-400">
                    Cotação
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Feriados
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <nav className={`sm:flex space-x-4 hidden text-gray-300`}>
          <Link href="/sobre" className="hover:text-gray-400 font-bold">
          Cotação
          </Link>
          <Link href="/" className="hover:text-gray-400 font-bold">
          Feriados
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
