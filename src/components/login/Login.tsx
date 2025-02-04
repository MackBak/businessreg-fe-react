
function Login () {
    return (
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                <br/>

                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" required/>
                <br/>

                <button onClick={() => console.log('Login Button clicked on login page ##')}>Login</button>

            </form>
        </>

    )
}

export default Login;