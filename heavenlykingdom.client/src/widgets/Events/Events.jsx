import './Events.css';
import { Quote } from '../../shared/Quote/Quote.jsx';
import { Divider } from '../../shared/Divider/Divider.jsx';
import { Calendar } from '../../shared/Calendar/Calendar.jsx';
import { QuoteBlock } from '../../shared/QuoteBlock/QuoteBlock.jsx';

export const Events = () => {
    return (
        <section id="Events" className="Events">
            <Divider title="События" />
            <Quote text="Валера лох." />
            <Calendar />
            <QuoteBlock title="ОНЛАЙН-ПОЖЕРТВОВАНИE" quote="бла-бла-бла валера лох." backgr_img="./public/foto/pieta.png" buttonText = "Узнать больше"/>
        </section>
    );
};