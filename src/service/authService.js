// src/authService.js

import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// const API_URL = 'https://backend.coffeelabs.id/api'; // prod
const API_URL = 'http://127.0.0.1:8000/api'; // local

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        console.log(response);
        if (response.data.status === 'error') {
            throw new Error(response.data.message);
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('permissions', JSON.stringify(response.data.permission)); // Store permissions
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};
export const getPermissions = () => {
    return JSON.parse(localStorage.getItem('permissions')) || [];
};

export const hasPermission = (permission) => {
    const permissions = getPermissions();
    // console.log(permissions.includes(permission));
    return permissions.includes(permission);
};
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp < Date.now() / 1000;
    } catch (error) {
        return true;
    }
};

export const isAuthenticated = () => {
    const token = getToken();
    // return token;
    return token && !isTokenExpired(token);
};
