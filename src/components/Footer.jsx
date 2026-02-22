import logo from "../assets/Logo1.svg";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import {Modal} from "./Modal.jsx";
import {SocialLinks} from "./SocialLinks.jsx";

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
        <footer className="bg-black p-10 text-white min-h-[300px] flex flex-col justify-between">
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} header={titleForModal} mainText={mainTextForModal} />

            <div className="flex justify-between items-start">
                {/* Левая часть с логотипом */}
                <div>
                    <Link to="/">
                        <img src={logo} className="" alt="logo"/>
                    </Link>
                    <hr />
                </div>

                {/* Правая часть с секцией связи */}
                <div className="text-right">
                    <h3 className="text-lg mb-1 text-center">Связь</h3>
                    <SocialLinks variant="default" size={24} />
                </div>
            </div>

            {/* Нижняя часть с контактами */}
            <div>
                {
                    navLinks.map(({to, label}) => {
                        return (
                            <div className="flex items-start">
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => linkClickHandler(to)}
                                >
                                    {label}
                                </NavLink>
                            </div>

                        )
                    })
                }
            </div>
        </footer>
    )
}