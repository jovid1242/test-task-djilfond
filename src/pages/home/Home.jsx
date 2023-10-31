import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from '@utils/axios';

import './HomeStyles.scss';
import Lists from '@components/Lists';
import Input from '@components/Input';
import Card from '@components/Card';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkUser = users?.filter((user) => user.id === activeUser.id);
        if (!checkUser.length) {
            setActiveUser({});
        }
    }, [users]);

    const handleNotification = (text = '', type = 'success') => {
        toast?.[type](text, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleSearchUsers = (val) => {
        if (val !== null) {
            setLoading(true);
            const names = val.split(',');
            let link = '';
            names?.forEach((name) => {
                link += `username=${name.trim()}&`;
            });

            axios
                .get(`/users?${link}`)
                .then(({ data }) => {
                    setLoading(false);
                    if (data.length) {
                        setUsers(data);
                        handleNotification('Пользователь успешно найден', 'success');
                    } else {
                        setUsers([]);
                    }
                })
                .catch(() => {
                    handleNotification('Ошибка', 'error');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleActiveUser = (id) => {
        if (users.length) {
            setActiveUser(users?.filter((user) => user.id === id)?.[0]);
        }
    };

    return (
        <div className="Home">
            <div className="container">
                <div className="Home-wrapper">
                    <div className="sidebar">
                        <h2 className="sidebar-title">Поиск сотрудников</h2>
                        <Input
                            type="text"
                            placeholder="Введите username"
                            onSearch={(str) => handleSearchUsers(str)}
                        />
                        <Lists lists={users} onActive={(id) => handleActiveUser(id)} />
                    </div>
                    {loading && <div className="loading">Загрузка...</div>}
                    <Card activeUser={activeUser} />
                </div>
            </div>
        </div>
    );
};

export default Home;
