import './QuoteBlock.css'; 
import { Button } from '../Button/Button.jsx';
import { Quote } from '../Quote/Quote.jsx';

export const QuoteBlock = ({title, quote, autor, san, backgr_img, buttonText, buttonLink }) => {
    return (
        <div className="QuoteBlock" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgr_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h1 className="QuoteBlock__title">{title}</h1>
            <Quote text={quote} autor={autor} san={san} />
            {buttonText && (
                    <Button title={buttonText} link={buttonLink} /> 
            )}
        </div>
    );
};