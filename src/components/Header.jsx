import {NavLink} from "react-router-dom";
import {useState, useCallback, useMemo} from "react";
import {useScrollHandler} from "../hooks/useScrollHandler.js";
import {IoCall} from 'react-icons/io5';
import {BiPhoneCall} from 'react-icons/bi';
import logoDark from '../assets/Logo1.svg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    const navLinks = useMemo(() => [
        {to: "/products", label: "Продукты"},
        {to: "/tariffs", label: "Тарифы"},
        {to: "/blog", label: "Блог"},
        {to: "/contacts", label: "Контакты"},
        {to: "/about", label: "О нас"}
    ], []);

    const getLinkClass = useCallback((isActive) =>
        `text-gray-300 hover:text-white transition-colors duration-200 ${isActive ? 'text-white font-medium' : ''}`, []);

    const getMobileLinkClass = useCallback((isActive) =>
        `w-full text-center py-2 hover:bg-gray-800/50 ${getLinkClass(isActive)}`, [getLinkClass]);

    const burgerIcon = useMemo(() => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            )}
        </svg>
    ), [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                useScrollHandler()
                    ? 'bg-[#161c26]/80 backdrop-blur-md shadow-lg'
                    : 'bg-[#161c26]'
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <NavLink
                    to="/"
                    className="ml-5 text-white font-bold text-xl hover:text-gray-300 transition-colors"
                >
                    <img src={logoDark} alt="logoDark" className="h-18 w-auto"/>
                </NavLink>

                {/* Десктопное меню */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(({to, label}) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({isActive}) => getLinkClass(isActive)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Телефон и бургер */}
                <div className="flex items-center space-x-4">
                    <a
                        href="tel:+79999999999"
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                        aria-label="Позвонить нам"
                    >
                        <IoCall size={24} className="hidden sm:block text-gray-300"/>
                        <BiPhoneCall size={24} className="sm:hidden text-gray-300"/>
                    </a>

                    {/* Бургер-меню */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isOpen}
                    >
                        {burgerIcon}
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 animate-fadeIn">
                    <nav className="flex flex-col items-center py-2">
                        {navLinks.map(({to, label}) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={closeMenu}
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