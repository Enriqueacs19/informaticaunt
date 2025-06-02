import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    logueado: boolean;
    login: () => void;
    logout: () => void; // ✅ Añadido aquí
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [logueado, setLogueado] = useState(false);

    const login = () => setLogueado(true);
    const logout = () => setLogueado(false); // ✅ Nueva función

    return (
        <AuthContext.Provider value={{ logueado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
}
