/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import './Calendar.css';

const EVENTS_DATA = [
    { date: '2026-05-03', title: "Bible ggggggggfdddddddddddddddddddddddddSchool 01", description: "Полное описание события для проверки тултипа. Оно должно быть длинным." },
    { date: '2026-05-08', title: "Church Picnic", description: "Общий пикник. Не забудьте пледы!" },
    { date: '2026-05-19', title: "Mission Bay", description: "Миссионерская поездка на залив." }
];

export const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [jumpData, setJumpData] = useState({ d: '', m: '', y: '' });

    const today = new Date();
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    const formattedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    // Функция перехода на конкретную дату
    const handleJump = () => {
        const d = parseInt(jumpData.d) || 1;
        const m = jumpData.m ? parseInt(jumpData.m) - 1 : date.getMonth();
        let y = parseInt(jumpData.y) || date.getFullYear();

        if (y > 0 && y < 100) y += 2000; // Адаптация 26 -> 2026

        const newDate = new Date(y, m, d);
        if (!isNaN(newDate.getTime())) {
            setDate(newDate);
            setIsPickerOpen(false);
            setJumpData({ d: '', m: '', y: '' });
        }
    };

    const changeMonth = (offset) => {
        setDate(new Date(date.getFullYear(), date.getMonth() + offset, 1));
    };

    const calendarDays = useMemo(() => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const offset = firstDay === 0 ? 6 : firstDay - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const grid = [];
        // 1. Хвост прошлого месяца
        for (let i = offset; i > 0; i--) {
            grid.push({ day: prevMonthDays - i + 1, current: false });
        }
        // 2. Текущий месяц
        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            grid.push({
                day: i,
                current: true,
                isToday: i === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
                event: EVENTS_DATA.find(e => e.date === dateStr) || null
            });
        }
        // 3. Хвост следующего месяца (до 42 ячеек)
        let nextD = 1;
        while (grid.length < 42) {
            grid.push({ day: nextD++, current: false });
        }
        return grid;
    }, [date]);

    return (
        <div className="heaven-cal-container">
            <header className="cal-header-top">
                <div className="cal-nav-btns">
                    <button onClick={() => changeMonth(-1)} type="button">
                        <svg className="arrow-icon left" width="9" height="17" viewBox="0 0 9 17" fill="none" >
                            <path d="M28.4375 0H24.0625V3.75H28.4375V0ZM32.8125 0H30.625V5.625H21.875V0H13.125V5.625H4.375V0H2.18604C0.978541 0 0 0.83875 0 1.87375V28.1262C0 29.1612 0.978541 30 2.18604 30H32.814C34.0215 30 35 29.1612 35 28.1262V1.87375C35 0.83875 34.02 0 32.8125 0ZM30.625 26.25H4.375V9.375H30.625V26.25ZM10.9375 0H6.5625V3.75H10.9375V0ZM19.6875 13.125H15.3125V16.875H19.6875V13.125ZM26.25 13.125H21.875V16.875H26.25V13.125ZM13.125 18.75H8.75V22.5H13.125V18.75ZM13.125 13.125H8.75V16.875H13.125V13.125ZM19.6875 18.75H15.3125V22.5H19.6875V18.75ZM26.25 18.75H21.875V22.5H26.25V18.75Z" fill="#EF6C00" />
                        </svg>
                    </button>

                    <div className="icon-wrapper">
                        <img
                            className="cal-icon-orange"
                            src="icons/Vector.png"
                            alt="Jump"
                            onClick={() => setIsPickerOpen(!isPickerOpen)}
                        />
                        {isPickerOpen && (
                            <div className="date-jump-panel">                     
                                <input placeholder="ММ" maxLength="2" value={jumpData.m} onChange={e => setJumpData({ ...jumpData, m: e.target.value })} />
                                <input placeholder="ГГГГ" maxLength="4" value={jumpData.y} onChange={e => setJumpData({ ...jumpData, y: e.target.value })} />
                                <button onClick={handleJump} className="jump-confirm-btn" type="button">OK</button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => changeMonth(1)} type="button">
                        <svg className= "arrow-icon" width="9" height="17" viewBox="0 0 9 17" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.65368 9.38538L1.88843 16.7628C0.0252936 17.3527 -0.289876 16.8798 0.215884 14.9229L6.14486 8.46544L0.290339 2.09278C-0.249399 0.0255254 0.155557 -0.332194 1.96289 0.252911L8.65368 7.54551C8.87543 7.78952 9 8.12042 9 8.46544C9 8.81047 8.87543 9.14137 8.65368 9.38538Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="cal-divider"></div>
                <h2 className="cal-month-label">{formattedMonth} {date.getFullYear()}</h2>
            </header>

            <main className="cal-grid-frame">
                {calendarDays.map((item, idx) => {
                    const isLastColumns = (idx % 7) >= 4; // Пт, Сб, Вс — тултип влево
                    return (
                        <div key={idx} className="cal-cell-unit">
                            <div className={`cell-sidebar ${item.isToday ? "today-highlight" : ""}`}>
                                <span className={item.current ? "day-num-active" : "day-num-off"}>
                                    {item.day < 10 ? `0${item.day}` : item.day}
                                </span>
                            </div>
                            <div className={`cell-body ${item.event ? 'body-has-event' : 'body-no-event'}`}>
                                {item.event && (
                                    <div className="event-item-container">
                                        <div className="event-mini-card">
                                            <span className="event-mini-title">{item.event.title}</span>
                                            <p className="event-mini-text">{item.event.description}</p>
                                        </div>
                                        <div className={`event-huge-tooltip ${isLastColumns ? 'align-right' : ''}`}>
                                            <strong className="tooltip-title">{item.event.title}</strong>                                        
                                            {item.event.description && <p className="tooltip-full-text">{item.event.description}</p>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};