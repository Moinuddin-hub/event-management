import React, { useContext } from 'react';
import CommonLogin from '../CommonLogin/CommonLogin';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from "react-hot-toast";
const Register = () => {
    const{singUp,UpdateProfile}=useContext(AuthContext);
  const navigate=useNavigate();
const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const image=e.target.image.value;
    const password=e.target.password.value;
    console.log(name,email,image,password);

    // Validation
    // if(password.length <6){
    //   toast.error('password must be  at least 6 characters')
    //   return;
    // }
    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)){
        toast.error('password must be  at least 6 characters and strong password')
        return
    }
        // creating a new user
        singUp(email, password)
            .then(() => {
                UpdateProfile(name, image)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/login')

                    })
            })
            .catch(error => {
                toast.error(error.message)
            })

    
}

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
              
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='image' placeholder="image url" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered"  />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-primary" type='submit'>Register</button>
                            </div>

                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                          <CommonLogin></CommonLogin>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;