import './FatherGrid.css';

export const FatherGrid = ({name, san, image}) => {
    return (
        <div className="FatherGrid">
            <div className="father-grid__item">
                <div className="father-grid__image"><img src={image} alt=""/></div>
                {name && ( <p className="father-grid__name">{name}</p>)}
                <p className="father-grid__san">{san}</p>
            </div>
        </div>
    );
};