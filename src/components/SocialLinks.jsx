import {SocialIcon} from './SocialIcon';

const socialLinks = [
    {type: 'whatsapp', href: 'https://wa.me/79993568855'},
    {type: 'telegram', href: 'https://t.me/skladoswms'},
    {type: 'vk', href: 'https://vk.com/sklados'}
];

export const SocialLinks = ({variant = 'default', size = 24, showLabel = false}) => (
    <div className={variant === 'card' ? 'flex justify-center items-center space-x-8' : 'flex gap-4 justify-end'}>
        {socialLinks.map(({type, href}) => (
            <SocialIcon key={type} type={type} href={href} size={size} variant={variant} showLabel={showLabel}/>
        ))}
    </div>
);