function Messages({ senderId, receiverId, sent, received }) {

    console.log("Messages...");
    console.log(sent);
    console.log(received);

    const sendMessage = (event) => {

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

            <form>
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