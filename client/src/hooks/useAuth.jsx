import { useEffect, createContext, useState, useContext} from "react";
import axios from "axios";

const userMeURL = import.meta.env.VITE_AUTHME_URL;



export const useProvideAuth = () => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(userMeURL, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setAuthenticated(true);
                setIsLoading(false);
                setUser(res.data);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            setIsLoading(false);
            setAuthenticated(false);
        }
    }, [isLoading]);

    return { isAuthenticated, user, setIsLoading };
}

const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    setIsLoading: () => { }
});

export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {

    const userMetaData = useProvideAuth();

    return (
        <AuthContext.Provider value={userMetaData}>
            {children}
        </AuthContext.Provider>
    );
}


export const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
}

