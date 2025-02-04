// useLogin.ts

import { useState } from "react";
import { AuthService } from '../services/auth.service.ts';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (username: string, password: string) => {
        setIsLoading(true);
        setError('')

        try {
            const data = await AuthService.login(username, password);
            localStorage.setItem('token', data.token);
            return data;
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Login Failed!');
            throw error;
        } finally {
            setIsLoading(false);
        }
    };
    return { handleLogin, isLoading, error };
}

//TODO: Want a toastr to display successful login on:  200 OK!