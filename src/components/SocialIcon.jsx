import {FaTelegramPlane, FaVk, FaWhatsapp} from 'react-icons/fa';

const icons = {whatsapp: FaWhatsapp, telegram: FaTelegramPlane, vk: FaVk};

const themeColors = {
    whatsapp: {
        border: 'group-hover:border-green-500/50',
        shadow: 'group-hover:shadow-green-500/20',
        text: 'group-hover:text-green-500'
    },
    telegram: {
        border: 'group-hover:border-blue-500/50',
        shadow: 'group-hover:shadow-blue-500/20',
        text: 'group-hover:text-blue-500'
    },
    vk: {
        border: 'group-hover:border-blue-500/50',
        shadow: 'group-hover:shadow-blue-500/20',
        text: 'group-hover:text-blue-600'
    }
};

export const SocialIcon = ({type, href, size = 24, showLabel = false, variant = 'default'}) => {
    const Icon = icons[type];
    const colors = themeColors[type];

    if (variant === 'card') {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer"
               className="group flex flex-col items-center space-y-3"
               aria-label={`Написать в ${type}`}>
                <div className={`p-5 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 
                    transition-all duration-300 group-hover:scale-110 ${colors.border} ${colors.shadow}`}>
                    <Icon size={size}
                          className={`text-gray-400 transition-all duration-300 group-hover:rotate-6 ${colors.text}`}/>
                </div>
                {showLabel &&
                    <span className={`text-gray-400 transition-colors text-sm font-medium ${colors.label}`}>
                        {type[0].toUpperCase() + type.slice(1)}
                    </span>
                }
            </a>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
           className="hover:text-gray-400 transition-colors" aria-label={type}>
            <Icon size={size}/>
        </a>
    );
};