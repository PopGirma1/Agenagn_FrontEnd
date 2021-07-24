import   '../Styles/filter.css';
import React, { useState } from 'react';


// This holds a list of some fiction people
// Some  have the same name but different price and id
const USERS = [
    { id: 1, name: 'Ayat', price: 3200 },
    { id: 2, name: 'Bole', price: 3000 },
    { id: 3, name: '4 kilo', price: 4000 },
    { id: 4, name: 'Megenagna', price: 5000 },
    { id: 5, name: 'piassa', price: 3000 },
    { id: 6, name: 'gelan', price: 6800 },
    { id: 7, name: 'kaliti', price: 3400 },
    { id: 8, name: 'hawasa', price: 2800 },
    { id: 9, name: 'Mekelle', price: 2300 },
];

function Filter() {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <div className="container">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />

            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-id">{user.id}</span>
                            <span className="user-name">{user.name}</span>
                            <span className="user-price">{user.price} per month </span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}

export default Filter;