import React from 'react';
import './HeaderStyles.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header-wrapper">
                    <div className="Header-wrapper__logo">Жилфонд</div>
                    <div className="Header-wrapper__action">Пользователь</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
