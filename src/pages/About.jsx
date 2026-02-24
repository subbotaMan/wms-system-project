import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import TeamPhoto from "../assets/team.jpg"

const TABS = [
    { id: 'company', label: 'О компании' },
    { id: 'employees', label: 'Сотрудники' },
    { id: 'partners', label: 'Уже с нами' }
];

export const About = () => {
    const [activeTab, setActiveTab] = useState('company');
    const [currentSlide, setCurrentSlide] = useState(0);

    // Данные для слайдера сотрудников
    const employees = [
        { id: 1, name: 'Иван Иванов', position: 'CEO', photo: '' },
        { id: 2, name: 'Петр Петров', position: 'CTO', photo: '' },
        { id: 3, name: 'Анна Смирнова', position: 'COO', photo: '' },
        { id: 4, name: 'Мария Кузнецова', position: 'Lead Designer', photo: '' }
    ];

    // Данные для партнеров
    const partners = [
        { id: 1, name: 'Компания 1', logo: '' },
        { id: 2, name: 'Компания 2', logo: '' },
        { id: 3, name: 'Компания 3', logo: '' },
        { id: 4, name: 'Компания 4', logo: '' },
        { id: 5, name: 'Компания 5', logo: '' },
        { id: 6, name: 'Компания 6', logo: '' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % employees.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + employees.length) % employees.length);
    };

    return (
        <main className="min-h-screen bg-gray-900">
            <div className="font-primary bg-gray-900 min-h-screen">
                {/* Кнопки-табы */}
                <section className="flex flex-wrap justify-center items-center gap-3 pt-32 px-4">
                    {TABS.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 border shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base whitespace-nowrap font-medium tracking-wide
                                ${activeTab === id
                                ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700'
                                : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </section>

                {/* Контентная область */}
                <section className="max-w-4xl mx-auto px-4 mt-12 pb-20 animate-fadeIn">
                    {/* О компании */}
                    {activeTab === 'company' && (
                        <div className="space-y-8">
                            {/* Фото над текстом */}
                            <div className="w-full">
                                <img
                                    src={TeamPhoto}
                                    alt="Наша команда"
                                    className="w-full h-120 object-cover rounded-lg"
                                />
                            </div>

                            {/* Текст */}
                            <div className="space-y-6">
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    Наша команда состоит из единомышленников, которые имеют глубокие знания в области онлайн торговли, логистике, а также разработки программных продуктов и интеграций.
                                </p>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    Мы начали свой путь в 2019 году, когда группа предпринимателей, работавших в сфере международного e-commerce бизнеса, решила создать продукт, который поможет продавцам оптимизировать процесс доставки товаров.
                                </p>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    Мы понимаем, что логистика товара является одним из самых важных факторов в успешной онлайн торговле. Именно поэтому мы разрабатываем продукты, которые позволяют нашим клиентам быстро и эффективно оптимизировать процесс доставки товаров своим покупателям.
                                </p>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    Наши продукты и услуги ориентированы на решение трех основных критериев, которые являются ключевыми для успешной онлайн торговли: непрерывность, скорость и стоимость доставки. Мы работаем над тем, чтобы наша технология помогала нашим клиентам улучшать эти три аспекта.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Сотрудники - слайдер */}
                    {activeTab === 'employees' && (
                        <div className="max-w-3xl mx-auto">
                            <div className="relative">
                                <div className="overflow-hidden rounded-xl">
                                    <div className="relative aspect-[4/3] w-full">
                                        {/* Фото на весь блок */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
                                            style={{
                                                backgroundImage: `url(${employees[currentSlide].photo || 'https://via.placeholder.com/1200x900?text=Фото+сотрудника'})`,
                                            }}
                                        />
                                        {/* Затемнение для читаемости текста */}
                                        <div className="absolute inset-0 bg-black/40" />

                                        {/* Текст внизу по центру */}
                                        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end p-6 text-white">
                                            <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-center">
                                                {employees[currentSlide].name}
                                            </h3>
                                            <p className="text-lg sm:text-xl text-gray-200 text-center">
                                                {employees[currentSlide].position}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Стрелки навигации */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 backdrop-blur-sm"
                                    aria-label="Предыдущий сотрудник"
                                >
                                    <IoChevronBack size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 backdrop-blur-sm"
                                    aria-label="Следующий сотрудник"
                                >
                                    <IoChevronForward size={24} />
                                </button>
                            </div>

                            {/* Индикаторы */}
                            <div className="flex justify-center gap-2 mt-6">
                                {employees.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-600'
                                        }`}
                                        aria-label={`Перейти к слайду ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Уже с нами - партнеры */}
                    {activeTab === 'partners' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                                >
                                    <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                                        {/* Логотип компании */}
                                        <span>Логотип</span>
                                    </div>
                                    <h3 className="text-white text-center font-medium">
                                        {partner.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};
