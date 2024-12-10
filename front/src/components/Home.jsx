import { useState, useEffect } from "react";

function Home({ token, user, users }) {

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

                <main>

                </main>
            </div>
            
        </>
    );
}

export default Home;