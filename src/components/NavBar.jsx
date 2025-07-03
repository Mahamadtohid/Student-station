import { Link } from 'react-router-dom';
import SLogo from '../assets/SLogo.svg';
import {toast} from 'react-hot-toast';

function NavBar(props){

    let isLoggedIn = props.isLoggedIn;

    let setIsLoggenIn = props.setIsLoggenIn;

    return (
        <div className="flex justify-between mx-auto items-content w-11/12 max-w-[1160] py-4 ">

            <div>
                <Link to="/">
                    <img src={SLogo} alt="LOGO" width={160} height={32} loading="laxy"/>
                </Link>
            </div>

            <nav>
                <ul className="flex gap-x-6 text-white ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]">Login</button>
                    
                    </Link>
                    }

                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]">SignUp</button>
                    
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/" onClick={() => {
                        setIsLoggenIn(false);
                        toast.success('Logged out successfully!')
                        
                    }}>
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]">Log Out</button>
                    
                    </Link>
                }

                {   
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border-richblack-700 rounded-[8px]">Dashboard</button>
                    
                    </Link>
                }
            </div>

        </div>
    )
}

export default NavBar;