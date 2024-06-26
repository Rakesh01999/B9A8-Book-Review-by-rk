import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
        <li><NavLink to="/recommendations">Recommendations</NavLink></li>
        <li><NavLink to="/blog">Book Blog </NavLink></li>
    </>

    // <div>
    //     <nav>
    //         <NavLink to="/">Home</NavLink>
    //         <NavLink to="/listedBooks">Listed Books</NavLink>
    //         <NavLink to="/pagesToRead">Pages to Read</NavLink>
    //         <NavLink to="/recommendations">Recommendations</NavLink>
    //         <NavLink to="/blog">Book Blog </NavLink>
    //     </nav>
    // </div>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[28px] font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-3">
                    <a className="btn bg-[#23BE0A] text-white w-[116px] h-[57px] text-[18px]">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white w-[116px] h-[57px] text-[18px]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};
 
export default Header ;
