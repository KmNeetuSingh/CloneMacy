import { createContext, useState } from 'react';

// Create a new context
const AuthContext = createContext();

// Define a functional component for providing authentication context
export function AuthContextProvider({ children }) {
    // Initialize state for authentication details
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        token: null,
    });

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={{ authDetails, setAuthDetails }}>
            {children}
        </AuthContext.Provider>
    );
}
