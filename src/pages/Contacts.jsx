import {useState} from 'react';
import {FaWhatsapp, FaTelegramPlane, FaVk} from 'react-icons/fa';
import {Preloader} from "../components/Preloader.jsx";
import {SocialLinks} from "../components/SocialLinks.jsx";

export const Contacts = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <div className="min-h-screen pt-30 pb-20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Карта с прелоадером */}
                <div className="relative group">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div
                        className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                        {/* Прелоадер */}
                        {!mapLoaded && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-10">
                                <Preloader/>
                            </div>
                        )}

                        {/* iframe карты */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A920b24b1b30d7a8aad844988dbafd2dad91e2f1d64dbef14dd7c70506867f12f&amp;source=constructor"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            className={`w-full transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
                            title="Карта офиса"
                            onLoad={() => setMapLoaded(true)}
                        />
                    </div>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:bg-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                        <h3 className="text-white font-semibold mb-2">Адрес</h3>
                        <p className="text-gray-400">г. Орёл, ул. Наугорское шоссе, д. 5</p>
                    </div>

                    <div
                        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:bg-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                        <h3 className="text-white font-semibold mb-2">Телефон</h3>
                        <a className="text-gray-400 hover:text-white transition-colors" href="tel:+79993568855">
                            +7 (999) 356-88-55
                        </a>
                    </div>

                    <div
                        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:bg-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <a className="text-gray-400 hover:text-white transition-colors" href="mailto:info@sklados.pro">
                            info@sklados.pro
                        </a>
                    </div>
                </div>

                {/* Дополнительные контакты */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-8">Свяжитесь с нами в мессенджерах</h2>

                    <div className="flex justify-center items-center space-x-8">
                        <SocialLinks variant="card" size={48} showLabel={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};