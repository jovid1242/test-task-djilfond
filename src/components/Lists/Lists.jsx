import React, { useEffect, useState } from 'react';
import './ListsStyles.scss';

// eslint-disable-next-line react/prop-types
const Lists = ({ lists = [], onActive }) => {
    const [activeList, setActiveList] = useState('');

    useEffect(() => {
        onActive(activeList);
    }, [activeList]);

    useEffect(() => {
        if (!lists.length) {
            setActiveList('');
        }
    }, [lists]);

    const handleClickActive = (id) => {
        setActiveList(id);
    };

    return (
        <div className="Lists">
            <div className="Lists-title">Результаты</div>
            {!lists.length ? (
                <div className="no-data">начните поиск </div>
            ) : (
                lists?.map((list) => {
                    return (
                        <div
                            className={activeList === list.id ? 'List active' : 'List'}
                            onClick={() => handleClickActive(list.id)}
                            key={list.id}
                        >
                            <div className="List-picture">
                                <img src="https://random.imagecdn.app/500/150" alt="list-alt" />
                            </div>
                            <div className="List-info">
                                <div className="List-info__username">{list.username}</div>
                                <div className="List-info__mail">{list.email}</div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Lists;
