import React, { useState, useEffect } from 'react';

import useDebounce from '@hooks/useDebounce';
import './InputStyles.scss';

// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, onSearch }) => {
    const [search, setSearch] = useState(null);
    const debouncedValue = useDebounce(search, 500);

    useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue]);

    const handleChangeSearch = (txt) => {
        setSearch(txt);
    };

    return (
        <div className="Input">
            <input
                type={type}
                value={search || ""}
                placeholder={placeholder || ''}
                onChange={(ev) => handleChangeSearch(ev.target.value)}
            />
        </div>
    );
};

export default Input;
