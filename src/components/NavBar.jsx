import { Link } from 'react-router-dom';
import SLogo from '../assets/SLogo.svg';
import {toast} from 'react-hot-toast';

function NavBar(props){

    let isLoggedIn = props.isLoggedIn;
    let setLoggenIn = props.setLoggenIn;

    return (
        <div className="flex justify-evenly">

            <div>
                <Link to="/">
                    <img src={SLogo} alt="LOGO" width={160} height={32} loading="laxy"/>
                </Link>
            </div>

            <nav>
                <ul className="flex gap-3 text-white ">
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

            <div className="flex ml-5 gap-3">
                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    
                    </Link>
                }

                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button>SignUp</button>
                    
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/" onClick={() => setLoggenIn(false),
                        toast.success('Logged out successfully!')
                        
                    }>
                        <button>Log Out</button>
                    
                    </Link>
                }

                {   
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    
                    </Link>
                }
            </div>

        </div>
    )
}

export default NavBar;