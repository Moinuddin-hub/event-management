import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";


const Navbar = () => {
const {user,logOut}=useContext(AuthContext)

    const NavLinks=<>
    <li ><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }>Home</NavLink> </li>
  
<li><NavLink to="/gallery" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }>Gallery</NavLink> </li>

<li><NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }>service</NavLink> </li>

 
      
    </>
    return (
      <>
        <div className="navbar bg-slate-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavLinks}
      </ul>
    </div>
      <img src="https://i.ibb.co/dGQtRfN/logo.jpg" alt="" className="w-16 h-14" />
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      {NavLinks}
    </ul>
  </div>
  

 {/* avatar part  */}
 <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
           


</div>

</>
    );

};

export default Navbar;