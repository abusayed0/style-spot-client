import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("log out successfull");
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
            })
    }
    const navigate = useNavigate();

    return (
        <div className="navbar p-0 min-h-[auto] bg-[#E2C799] py-3">
            <div className="navbar-start gap-1 lg:gap-0">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-1 dropdown-content mt-6 z-[1] p-2 shadow bg-[#E2C799] rounded-box w-52">
                        <li>
                            <NavLink className="inline-block text-[18px]" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-block text-[18px]" to="/add-product">Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-block text-[18px]" to="/my-cart">My Cart</NavLink>
                        </li>

                    </ul>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold ">Style Spot</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6">
                    <li>
                        <NavLink className="inline-block text-[18px] " to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="inline-block text-[18px]" to="/add-product">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink className="inline-block text-[18px] " to="/my-cart">My Cart</NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0}>
                                    <img className="w-8 md:w-10 h-8 md:h-10 rounded-full cursor-pointer" src={user.photoURL} />
                                </label>
                                <ul tabIndex={0} className="mt-6 z-[1] p-2 shadow  dropdown-content bg-[#E2C799] rounded-box w-52 break-all">
                                    <li>Name : {user.displayName}</li>
                                    <li className="mt-1">Email : {user.email}</li>
                                </ul>
                            </div>
                            <button onClick={handleLogOut} className="text-xl font-semibold text-white py-1 px-2 md:px-3 md:py-2 bg-[#9A3B3B]">Log Out</button>
                        </div>
                        :
                        <button onClick={() => navigate("/login")} className="text-xl font-semibold text-white py-1 px-2 md:px-3 md:py-2 bg-[#9A3B3B]">Log In</button>
                }
            </div>
        </div>
    );
};

export default Navbar;