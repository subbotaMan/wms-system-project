import logo from "../assets/Logo1.svg";
import {FaWhatsapp, FaTelegramPlane, FaVk} from 'react-icons/fa';
import {Link, useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import {Modal} from "./Modal.jsx";

export const Footer = () => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="bg-black p-10 text-white min-h-[400px] flex flex-col justify-between">
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} header={"header"} mainText={"maintext"}/>

            <div className="flex justify-between items-start">
                {/* Левая часть с логотипом */}
                <div>
                    <Link to="/">
                        <img src={logo} className="" alt="logo" />
                    </Link>
                </div>

                {/* Правая часть с секцией связи */}
                <div className="text-right">
                    <h3 className="text-lg mb-1">Связь</h3>
                    <div className="flex gap-4 justify-end">
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="WhatsApp">
                            <FaWhatsapp size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Telegram">
                            <FaTelegramPlane size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="VK">
                            <FaVk size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Нижняя часть с контактами */}
            <div>
                <Link to="/contacts" onClick={() => {
                    if(location.pathname === '/contacts'){
                        setShowModal(true);
                    } else {
                        useLocation("/contacts")
                    }
                }}>
                    Контакты
                </Link>
            </div>
        </footer>
    )
}