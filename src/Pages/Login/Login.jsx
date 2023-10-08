import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonLogin from '../CommonLogin/CommonLogin';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const {singIn}=useContext(AuthContext);
  const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        // console.log(email,password);

        singIn(email,password)
        .then(()=>{
            toast.success('User created successfully');
            navigate('/')
        })
        .catch(error=>
            {
                toast.error(error.message)
            })

    }
    return (
        <>
            <div className="hero w-96  ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                             <CommonLogin></CommonLogin>
                        </form>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;