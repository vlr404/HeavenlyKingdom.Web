import React, { useState } from 'react';
import './FatherGrid.css';

const fathersData = [
    { id: 1, name: "ГУСТАВО", san: "Протоиерей", img: "/foto/Gustavo_Fring.png" },
    { id: 2, name: "ДЖЕССИ", san: "Иерей", img: "/foto/Jesse_Pinkman.png" },
    { id: 3, name: "СОЛ", san: "Диакон", img: "/foto/Saul_Goodman.png" },
    { id: 4, name: "УОЛТЕР", san: "Монах", img: "/foto/Walter_White.png" },
    { id: 5, name: "СЕРГИЙ", san: "Настоятель", img: "/foto/Gustavo_Fring.png" }, // дубль
    { id: 6, name: "АНДРЕЙ", san: "Архимандрит", img: "/foto/Jesse_Pinkman.png" }, // дубль
];

export const FatherGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 4; 
    const cardWidth = 250; 
    const gap = 30; 
    const step = cardWidth + gap; 
    const cout = fathersData.length;
    const isCentered = cout < visibleCards;

    const nextSlide = () => {
        if (currentIndex < fathersData.length - visibleCards) {
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
                    {fathersData.map((father) => (
                        <div key={father.id} className="father-card">
                            <div className="father-grid__image">
                                <img src={father.img} alt={father.name} />
                            </div>
                            <div className="father-grid__name">ОТЕЦ <br />{father.name}</div>
                            <div className="father-grid__san">{father.san}</div>
                        </div>
                    ))}
                </div>
            </div>




            <button
                className={`slider-arrow right ${currentIndex >= fathersData.length - visibleCards ? 'hidden' : ''}`}
                onClick={nextSlide}
            >
                ›
            </button>


        </div>
    );
};