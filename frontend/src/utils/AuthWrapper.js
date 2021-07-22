import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const AuthWrapper = ({children}) => {
    const {error, isLoading} = useAuth0();

    if(isLoading){
        return <div>
            loading...
        </div>
    }

    if(error){
        return <div>
            {error.message}
        </div>
    }

    return <>{children}</>
}

export default AuthWrapper;