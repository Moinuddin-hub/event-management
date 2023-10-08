import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
        const{user,waiting}=useContext(AuthContext);
      
        console.log(user);
        if(waiting){
            return <span className="loading loading-spinner loading-lg"></span>

        }
        if(!user?.email){
         return <Navigate to='/login'></Navigate>
        }
        return children;
};
export default PrivateRoute;