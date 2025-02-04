// LoginForm.tsx

import {FormEvent, useState} from 'react';

type LoginFormProps = {
    onSubmit: (username: string, password: string) => void;
    isLoading: boolean;
    error?: string;
};

export const LoginForm = ({onSubmit, error, isLoading}: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username}
                   onChange={(e) => setUsername(e.target.value)} required/>
            <br/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password}
                   onChange={(e) => setPassword(e.target.value)} required/>
            <br/>

            {error && <p>{error}</p>}

            <button type="submit" disabled={isLoading}>{isLoading ? 'Logging in..' : 'Login'}</button> //
        </form> // Think this above sets button depending on isLoading if alse or true.
    )
}