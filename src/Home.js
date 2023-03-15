import { useState } from 'react';

export const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <p>Hello {loggedIn ? 'User' : 'anonymous'}</p>
            <button onClick={() => setLoggedIn(true)}>Boop</button>
        </>
    );
};
