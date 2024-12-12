import { useState, useEffect } from "react";
import Messages from './Messages'

function Home({ token, id, user, users, sent, received }) {

    const [receiverId, setReceiverId] = useState(undefined);

    const selectReceiver = (event) => {
        setReceiverId(event.target.dataset.key);
    }

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
                            <li key={user.id} data-key={user.id} onClick={selectReceiver}>{user.username}</li>   
                        ))}
                    </ul>
                </nav>

                <Messages
                    senderId={id}
                    receiverId={receiverId}
                    sent={sent}
                    received={received}
                />
            </div>
            
        </>
    );
}

export default Home;