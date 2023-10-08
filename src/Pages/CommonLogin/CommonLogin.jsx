import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const CommonLogin = () => {
    // const navigate=useNavigate
    const {googleLogin,user}=useContext(AuthContext);
       
       const handleCommonLogin=()=>{
   
          googleLogin()
          .then(res=>console.log(res))
          .catch(error=>console.log(error))
        //   console.log(user);
       }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>handleCommonLogin()} className="btn btn-primary "> <FcGoogle></FcGoogle>Google</button>
            </div>
        </>
    );
};

export default CommonLogin;