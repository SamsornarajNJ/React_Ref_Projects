import { createContext, useContext, useState } from "react";

interface AuthContextInterface {
    isAuthenticated : boolean;
    login: (Authtoken:string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(Boolean);
    
    const login = (Authtoken: string) => {
        localStorage.setItem('Authtoken', Authtoken);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('Authtoken');
        setIsAuthenticated(false);
    }
    return(
       <AuthContext.Provider value={{isAuthenticated, login, logout}}>
        {children}
       </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
       throw new Error ("AuthProvider is not connected properly");
    }
    return context;
}