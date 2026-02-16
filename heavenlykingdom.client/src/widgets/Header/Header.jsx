import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <div className="logo"><img src="icons/logo.png" alt=""/></div>
                    <div className="title">ЦАРСТВИЕ НЕБЕСНОЕ</div>
                </div>

                <nav className="header__nav">
                    <ul>
                        <li><a href="#home">ГЛАВНАЯ</a></li>
                        <li><a href="#about">О НАС</a></li>
                        <li><a href="#father">ОТЦЫ</a></li>
                        <li><a href="#events">СОБЫТИЯ</a></li>
                        <li><a href="#ceremony">ЦЕРЕМОНИИ</a></li>
                        <li><a href="#contacts">КОНТАКТЫ</a></li>
                        <li><a href="">КАТАЛОГ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
