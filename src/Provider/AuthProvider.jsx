import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    const authInfo = {
        auth,
        setAuth
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export  {AuthProvider, AuthContext};