import { useState  } from "react";
import { BsEyeFill , BsEyeSlashFill } from "react-icons/bs";
import {Link ,useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";


function LoginForm({ setIsLoggedIn }) {


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

    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
}


return(

        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6">

            <label className="w-full ">
                <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">
                    
                    Email Adress<sup className="text-pink-300">*</sup>
                </p>
                <input type="email" 
                placeholder="Enter Email Address" 
                name="email"value={formData.email} 
                onChange={changeHandler}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
            </label>
            


            <label className="w-full relative">
                <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Password<sup>*</sup></p>
                <input type={showPassword ? ("text"):("password")} 
                placeholder="Enter Youre password" 
                name="password"value={formData.password} onChange={changeHandler}
                
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                <span
                    className="absolute right-3 top-[38px] cursor-pointer text-richblack-5"
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <BsEyeFill fontSize={24} fill="#AFB2BF"/>
                    ) : (
                        <BsEyeSlashFill fontSize={24} fill="#AFB2BF"/>
                    )}
                </span>

                <Link to="#">
                <p className="text-xs mt-1 text-blue-100 ml-auto max-w-max">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-yellow-200 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-6">Sign In</button>

        </form>
    );
}


export default LoginForm;