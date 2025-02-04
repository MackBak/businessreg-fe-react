// Login.tsx

import {useLogin} from "../../hooks/useLogin.ts";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    const {handleLogin, isLoading, error} = useLogin();

    const handleSuccessfulLogin = (data: any) => {
        console.log('Login succesful with data: ', data) // TEST
        // TODO: ADD REDIRECT!!
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
