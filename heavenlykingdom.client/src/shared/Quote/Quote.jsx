import './quote.css';

export const Quote = ({ text, mb = 'def', autor, san}) => {
    return (
        <div className={`quote ${mb === 'no' ? 'quote--no_margin_button' : ''}
        `}>
            {text}
            <div className="autor">
                <span className="autor__name">{autor}</span>
                <span className="autor__san">{san}</span>
            </div>
        </div>
    );
}
