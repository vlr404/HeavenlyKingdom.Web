import React, { useState } from 'react';
import './FatherGrid.css';
import { SocialMediaIcon } from '../../shared/SocialMediaIcon/SocialMediaIcon';

const fathers = [
        { 
            id: 1, 
            name: "УОЛТЕР", 
            san: "Монах", 
            img: "/foto/Walter_White.png",
            socials: { instagram: "link", telegram: "link", youtube: "link" } 
        },
        { 
            id: 2, 
            name: "ДЖЕССИ", 
            san: "Иерей", 
            img: "/foto/Jesse_Pinkman.png",
            socials: { telegram: "link", facebook: "link" } 
        },
        { 
            id: 3, 
            name: "СОЛ", 
            san: "Диакон", 
            img: "/foto/Saul_Goodman.png",
            socials: { gmail: "mailto:saul@gmail.com" } 
        },
        { 
            id: 4, 
            name: "ГУСТАВО", 
            san: "Протоиерей", 
            img: "/foto/Gustavo_Fring.png",
            socials: { instagram: "link", facebook: "link", youtube: "link", telegram: "link" } 
        },
        { 
            id: 5, 
            name: "СЕРГИЙ", 
            san: "Настоятель", 
            img: "/foto/Gustavo_Fring.png",
            // Пример на 5 иконок для проверки твоей сетки 3+2
            socials: { instagram: "l", facebook: "l", gmail: "l", youtube: "l", telegram: "l" } 
        },
        { 
            id: 6, 
            name: "АНДРЕЙ", 
            san: "Архимандрит", 
            img: "/foto/Jesse_Pinkman.png",
            socials: {} // Соцсетей нет
        }
    ];


export const FatherGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 4; 
    const cardWidth = 250; 
    const gap = 30; 
    const step = cardWidth + gap; 
    const cout = fathers.length;
    const isCentered = cout < visibleCards;

    const nextSlide = () => {
        if (currentIndex < fathers.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="father-slider-layout">

            <button
                className={`slider-arrow left ${currentIndex === 0 ? 'hidden' : ''}`}
                onClick={prevSlide}
            >
                ‹
            </button>



            <div className="father-slider-viewport">
                <div
                    className={`father-slider-track ${isCentered ? 'father-slider-track-cent' : ''}`}
                    style={{ transform: `translateX(-${currentIndex * step}px)` }}
                >
                    {fathers.map((father) => (
                        <div key={father.id} className="father-card">
                            <div className="father-grid__image">
                                <img src={father.img} alt={father.name} />
                                <SocialMediaIcon links={father.socials} wrap="y" />
                            </div>
                            <div className="father-grid__name">ОТЕЦ <br />{father.name}</div>
                            <div className="father-grid__san">{father.san}</div>
                        </div>
                    ))}
                </div>
            </div>




            <button
                className={`slider-arrow right ${currentIndex >= fathers.length - visibleCards ? 'hidden' : ''}`}
                onClick={nextSlide}
            >
                ›
            </button>


        </div>
    );
};