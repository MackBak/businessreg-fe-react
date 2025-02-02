
function Register () {
    return (
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />

                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" required />
                <br />

                <label htmlFor="confirmPassword"> Confirm Password:</label>
                <input type="text" id="confirmPassword" name="confirmPassword" required/>
                <br/>

                <button onClick={() => console.log("Register Button clicked on register page ##")}>Register Account</button>
            </form>
        </>
    )
}

export default Register