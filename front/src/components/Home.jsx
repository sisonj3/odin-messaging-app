import { useState, useEffect } from "react";
import Messages from './Messages'

function Home({ token, user, users, sent, received }) {

    return (
        <>
            <header>
                <h1>Hello, { user }!</h1>
            </header>
            <div>
                <nav>
                    <h2>Users</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.username}</li>   
                        ))}
                    </ul>
                </nav>

                <Messages
                    sent={sent}
                    received={received}
                />
            </div>
            
        </>
    );
}

export default Home;