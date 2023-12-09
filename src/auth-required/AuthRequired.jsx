import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const AuthRequired = ({children}) => {
    const location = useLocation();
    const {user, isLoading} = useContext(AuthContext);
    if(isLoading){
        return <p>Loading</p>
    }
    if(!user){
        return <Navigate state={{from: location.pathname}} replace={true} to="/login"/>
    }
    return children;
};

export default AuthRequired;