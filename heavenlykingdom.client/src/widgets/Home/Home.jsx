import { Button } from '../../shared/Button/Button';
import './Home.css';

export const Home = () => {
    return (
        <section id="Home" className="home section-npt">
            <div className="section-container">
                <div className="home__preview">
                    <div className="home__preview-title"><h1>ЦАРСТВИЕ НЕБЕСНОЕ</h1></div>
                    <div className="home__preview-subtitle"><h3>Здесь начинается путь к духовному обновлению</h3></div>
                    <Button title="Посетить Церковь"/>
                </div>

            </div>
        </section>
    );
};