import logo from "../assets/Logo1.svg";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import {Modal} from "./Modal.jsx";
import {SocialLinks} from "./SocialLinks.jsx";
import {IoCall} from "react-icons/io5";

export const Footer = ({navLinks}) => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    const titleForModal = "Упс..."
    const mainTextForModal = "Похоже, вы уже находитесь на этой странице"

    const linkClickHandler = (to) => {
        if (location.pathname === to) {
            setShowModal(true);
        }
    }

    return (
        <footer className="bg-black px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-white">
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} header={titleForModal} mainText={mainTextForModal} />

            {/* Основной контент футера */}
            <div className="max-w-7xl mx-auto">
                {/* Верхний ряд: компактная сетка */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-8">
                    {/* Левая часть с логотипом */}
                    <div className="flex justify-center md:justify-start">
                        <Link to="/">
                            <img src={logo} alt="logo" className="h-8 sm:h-10 w-auto"/>
                        </Link>
                    </div>

                    {/* Центральная часть с навигацией */}
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {navLinks.map(({to, label}) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => linkClickHandler(to)}
                                    className={({isActive}) =>
                                        `text-sm sm:text-base transition-colors ${
                                            isActive ? 'text-blue-400' : 'text-white hover:text-gray-300'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Правая часть с контактами */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <h3 className="text-sm sm:text-base">info@sklados.pro</h3>
                        <a href="tel:79993568855" className="text-gray-300 hover:text-white" aria-label="Позвонить нам">
                            +7 999-358-88-55
                        </a>
                        <SocialLinks variant="default" className="text-center" size={20}/>
                    </div>
                </div>

                {/* Разделитель */}
                <hr className="border-gray-700 mb-6"/>

                {/* Нижний блок со ссылками */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Дополнительные ссылки */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <NavLink to="/guide" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Руководство
                        </NavLink>
                        <NavLink to="/knowledge"
                                 className="text-sm text-gray-400 hover:text-white transition-colors">
                            База знаний
                        </NavLink>
                    </div>

                    {/* Юридические ссылки */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <NavLink to="/user-agreement"
                                 className="text-sm text-gray-400 hover:text-white transition-colors">
                            Пользовательское соглашение
                        </NavLink>
                        <NavLink to="/privacy-policy"
                                 className="text-sm text-gray-400 hover:text-white transition-colors">
                            Политика конфиденциальности
                        </NavLink>
                    </div>
                </div>

                {/* Копирайт внизу */}
                <div className="text-center mt-6">
                    <h3 className="text-xs sm:text-sm text-gray-500">© 2026 SkladOS</h3>
                </div>
            </div>
        </footer>
    )
}