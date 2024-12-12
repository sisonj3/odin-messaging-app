function Messages({ token, senderId, receiverId, sent, received }) {

    console.log("Messages...");
    console.log(sent);
    console.log(received);

    const sendMessage = (event) => {

        let text = event.target[0].value;

        // Send Message
        fetch('http://localhost:3000/message', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: text, recieverId: receiverId, senderId: senderId}),
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error(error));

        event.preventDefault();
    };

    return (
        <>
            <main>
                <div>
                    <h3>Recieved</h3>
                    <ul>
                        {received.map((message) => (
                            <li key={message.id}>{ message.text }</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Sent</h3>
                    <ul>
                        {sent.map((message) => (
                            <li key={message.id}>{ message.text }</li>
                        ))}
                    </ul>
                </div>
            </main>

            <form onSubmit={sendMessage}>
                <div>
                    <label htmlFor="message">
                        Message: <input type="text" name="message" id="message"/>
                    </label>
                    
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    );
}

export default Messages;