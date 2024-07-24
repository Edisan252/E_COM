import React from 'react';

const Welcome = ({ username }) => {
    return (
        <div>
            <h2>Welcome Page</h2>
            <p>Welcome, {username}!</p>
        </div>
    );
};

export default Welcome
