import { Button } from '../../shared/Button/Button';
import './Home.css';
import { eventsBase } from '../../shared/CountdownTimer/holidays';
import { CountdownTimer } from '../../shared/CountdownTimer/CountdownTimer';
import { Space } from '../../shared/Space/Space';

// 1. Объявляем функцию ОДИН РАЗ вне компонента
const getNextEvent = (events) => {
    if (!events || events.length === 0) return null;
    const now = new Date();
    const futureEvents = events
        .filter(event => new Date(event.date) > now)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    return futureEvents[0];
};

export const Home = () => {
    // 2. ВЫЗЫВАЕМ функцию, чтобы получить ближайшее событие
    const activeEvent = getNextEvent(eventsBase);

    return (
        <section id="Home" className="home section-npt">
            <div className="section-container">
                <div className="home__preview">
                    <div className="home__preview-title">
                        <h1>ЦАРСТВИЕ НЕБЕСНОЕ</h1>
                    </div>
                    <div className="home__preview-subtitle">
                        <h3>Здесь начинается путь к духовному обновлению</h3>
                    </div>
                    <Space mt="30" />
                    
                    <button className="buttonh">Посетить Церковь</button>
                    
                    {activeEvent ? (
                        <CountdownTimer 
                            targetDate={activeEvent.date} 
                            title={activeEvent.title} 
                        />
                    ) : (
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                            Нет активных событий
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};