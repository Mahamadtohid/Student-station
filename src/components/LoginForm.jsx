import { useState  } from "react";
import { BsEyeFill , BsEyeSlashFill } from "react-icons/bs";
import {Link ,useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";


function LoginForm({setIsLoggenIn}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const[showPassword , setShowPassword] = useState(false)


function changeHandler(event){
    setFormData((prevData) =>({
        ...prevData,

        [event.target.name]: event.target.value,

    }))
}

function submitHandler(event){
    event.preventDefault();

    setIsLoggenIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
}


return(

        <form onSubmit={submitHandler}>

            <label>
                <p>Email Adress<sup>*</sup></p>
                <input type="email" placeholder="Enter Email Address" name="email"value={formData.email} onChange={changeHandler}></input>
            </label>
            


            <label>
                <p>Password<sup>*</sup></p>
                <input type={showPassword ? ("text"):("password")} placeholder="Enter Youre password" name="password"value={formData.password} onChange={changeHandler}></input>
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <BsEyeFill/>
                    ) : (
                        <BsEyeSlashFill/>
                    )}
                </span>

                <Link to="#">Forgot Password</Link>
            </label>

            <button>Sign In</button>

        </form>
    );
}


export default LoginForm;