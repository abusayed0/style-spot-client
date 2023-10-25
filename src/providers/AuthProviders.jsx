import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const contextValue = {user};
    return (
        <AuthContext.Provider value={contextValue}>
                {children }
        </AuthContext.Provider>
    );
};
AuthProviders.propTypes = {
    children: PropTypes.element.isRequired
};
export default AuthProviders;