import './DonationBar.css';
import { Button } from '../Button/Button.jsx';
import { Quote } from '../Quote/Quote.jsx';

export const DonationBar = ({ current, goal, title, text }) => {
  const progressPercent = Math.min((current / goal) * 100, 100);

  return (
    <div className="donates">
      <div className="donation-wrapper">
        <h1 className="donation-title">{title}</h1>
        <Quote text={text} mb="no"/>

        <div className="donates-scale">
          {/* Блок с целью */}
          <div className="donates-scale__goal">
            <p className="donates-scale__goal__text">НАША ЦЕЛЬ:</p>
            <p className="donates-scale__goal__sum">{goal.toLocaleString()}</p>
          </div>

          {/* Контейнер самой полоски */}
          <div className="donation-bar-container">
            {/* 1. Слой с заливкой */}
            <div
              className="donation-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />

            {/* 2. Текст поверх полоски (статично в центре) */}
            <div className="donation-text-overlay">
              {current.toLocaleString()} 
            </div>
          </div>

          <Button title="Пожертвовать" variant="lg" />
        </div>
      </div>
    </div>
  );
};