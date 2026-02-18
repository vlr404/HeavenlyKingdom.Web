import './Events.css';
import { Quote } from '../../shared/Quote/Quote.jsx';
import { Divider } from '../../shared/Divider/Divider.jsx';
import { Calendar } from '../../shared/Calendar/Calendar.jsx';

export const Events = () => {
    return (
        <section id="Events" className="Events">
            <Divider title="Ñîáûòèÿ" />
            <Quote text="Âàëåğà ëîõ." />
            <Calendar/>
        </section>
    );
};