import { FaArrowUp } from "react-icons/fa";
import { useScrollHandler } from "../hooks/useScrollHandler.js";

export const ButtonToTopAnchor = () => {
    const isScrolled = useScrollHandler(100);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isScrolled) return null;

    return (
        <button
            className="fixed bottom-4 right-4 p-2 cursor-pointer bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full hover:bg-gray-700/70 hover:text-white transition-all duration-300 border border-gray-600/30"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
    );
};