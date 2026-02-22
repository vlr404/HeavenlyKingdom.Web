import './QuoteBlock.css'; 
import { Button } from '../Button/Button.jsx';
import { Quote } from '../Quote/Quote.jsx';
import { SocialMediaIcon } from '../SocialMediaIcon/SocialMediaIcon.jsx';

export const QuoteBlock = ({title, text, autor, san, backgr_img, buttonText, buttonLink, socialmedia }) => {
    return (
        <div className="QuoteBlock" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgr_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h1 className="QuoteBlock__title">{title}</h1>
            <Quote text={text} autor={autor} san={san} />
            {buttonText && (
                    <Button title={buttonText} link={buttonLink} /> 
            )}
            {socialmedia && (<SocialMediaIcon links={socialmedia} />)}
        </div>
    );
};