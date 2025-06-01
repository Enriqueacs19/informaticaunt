import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = 'admin' | 'docente' | 'estudiante';

interface UserContextProps {
    userType: UserType;
    setUserType: (type: UserType) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userType, setUserType] = useState<UserType>('admin'); 

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe estar dentro de un UserProvider');
    }
    return context;
};
