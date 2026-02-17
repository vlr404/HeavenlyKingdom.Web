import { useState } from 'react';
import './Button.css';

export const Button = ({ title,variant = 'def', color = '#ef6c00', link }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Функция для определения: светлый цвет или темный
    const getContrastColor = (hexColor) => {
        if (!hexColor || hexColor.startsWith('var')) return 'white';

        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Формула яркости (YIQ)
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? 'black' : 'white';
    };

    const contrastColor = getContrastColor(color);

    // Динамические стили
    const buttonStyle = {
        color: isHovered ? contrastColor : color,
        borderColor: color,
        backgroundColor: isHovered ? color : 'transparent',
    };

    if (link) {
        return (
            <a href={link}
                target="_blank"             /* Открывает в новой вкладке */
                rel="noopener noreferrer"   /* Защита безопасности */
                className={`button ${variant === 'lg' ? 'button--lg' : ''}`}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {title}
           </a>            
        );
    }

   

    return (
        <button
            className={`button ${variant === 'lg' ? 'button--lg' : ''}`}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title}
        </button>
    );
};