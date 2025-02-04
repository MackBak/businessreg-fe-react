// Login.tsx

import {useLogin} from "../../hooks/useLogin.ts";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "./LoginForm.tsx"; //TODO: Check why I get an  error here? Makes no sense.


export const Login = () => {
    const {handleLogin, isLoading, error} = useLogin();
    const navigate = useNavigate();

    /* eslint-disable */
    const handleSuccessfulLogin = (data: any) => {
        console.log('Login succesful with data: ', data) // TEST
        navigate('/');
    };

    return (
        // Can't do div below with just a fragment, I guess with <> can't add classNames etc. ?
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm
                onSubmit={async (username, password) => {
                    try {
                        const data = await handleLogin(username, password);
                        handleSuccessfulLogin(data);
                    } catch {
                        // ESLint tells me to add a Catch here. Why? It's already handled in useLogin ?
                    }
                }}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
};

export default Login;
