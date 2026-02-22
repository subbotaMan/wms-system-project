import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useScrollHandler} from "../hooks/useScrollHandler.js";
import {IoCall} from 'react-icons/io5';
import logoDark from '../assets/Logo1.svg';

export const Header = ({navLinks}) => {
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = (isActive) =>
        `text-gray-300 hover:text-white transition-colors duration-200 ${isActive ? 'text-white font-medium' : ''}`;

    const getMobileLinkClass = (isActive) =>
        `w-full text-center py-2 hover:bg-gray-800/50 ${getLinkClass(isActive)}`;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                useScrollHandler()
                    ? 'bg-[#161c26]/80 backdrop-blur-md shadow-lg'
                    : 'bg-[#161c26]'
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <NavLink to="/" className="ml-5">
                    <img src={logoDark} alt="logoDark" className="h-18 w-auto"/>
                </NavLink>

                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(({to, label}) => (
                        <NavLink key={to} to={to} className={({isActive}) => getLinkClass(isActive)}>
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <a href="tel:79993568855" className="text-gray-300 hover:text-white" aria-label="Позвонить нам">
                        <IoCall size={24}/>
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg"
                        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 animate-fadeIn">
                    <nav className="flex flex-col items-center py-2">
                        {navLinks.map(({to, label}) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className={({isActive}) => getMobileLinkClass(isActive)}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};