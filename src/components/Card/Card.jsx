import React from 'react';
import './CardStyles.scss'

// eslint-disable-next-line react/prop-types
const Card = ({ activeUser = {} }) => {
    return (
        <div className="page-content">
            {Object.keys(activeUser).length !== 0 ? (
                <>
                    <div className="page-content__user-picture">
                        <img src="https://random.imagecdn.app/500/500" alt="" />
                    </div>
                    <div className="page-content__user-info">
                        <h4 className="page-content-title">{activeUser.name}</h4>
                        <span>
                            email: <p>{activeUser.email}</p>
                        </span>
                        <span>
                            phone: <p>{activeUser.phone}</p>
                        </span>
                        <h5 className="page-content-title">О себе:</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                    </div>
                </>
            ) : (
                <div className="no-date">Выберите сотрудника, чтобы посмотреть его профиль</div>
            )}
        </div>
    );
};

export default Card;
