import './Divider.css';

export const Divider = ({title }) => {
    return (
        <div className="divider">
            <div className="divider__line"></div>
            <div className="divider__box">
                <span>{title}</span>
            </div>
            <div className="divider__line"></div>
        </div>
    );
};
    