function Login({ parentGetJWT }) {

    const returnJWT = (event) => {

        const username = event.target[0].value;
        const password = event.target[1].value;

        // Fetch login to get JWT
        fetch('http://localhost:3000/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password}),
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            parentGetJWT(response.token, response.username, response.recieved, response.sent);
        })
        .catch(error => console.error(error));

        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={returnJWT}>
                <div>
                    <label htmlFor="username">
                        Username <input type="text" name="username" id="username" />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="password">
                        Password <input type="password" name="password" id="password" />
                    </label>
                </div>
                
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default Login;