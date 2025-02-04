// auth.service.ts

import { loginResponse } from '../types/auth.types';

const API_BASE_URL = 'http://localhost:8080/api';

export const AuthService = {
    async login(username: string, password: string): Promise<loginResponse> {
        const response = await fetch(API_BASE_URL + `/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Login Failed!');
        }
        return response.json();
    }
}