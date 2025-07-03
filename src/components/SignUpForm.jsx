import { useState } from "react";
import toast from "react-hot-toast";
import { BsEyeFill , BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";




function SignUpForm(props){

    const navigate = useNavigate();
    let setIsLoggedIn = props.setIsLoggedIn;

    const [showPassword , setShowPassword] = useState(false)

    const[accountType , setAccountType] = useState("student");

    

    const[formData , setFormData] = useState({
        firstname :"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    


    function changeHandler(event){

        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]: event.target.value,
        }))
    }


    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("passwords do not match!");
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account created successfully!");
        console.log("Form submitted with data:");

        const accountData={
            ...formData,
        }
        console.log(accountData);
        navigate("/dashboard");
    }




    return(
        
        <div>
            {/* Student Instructor tab */}
            <div className="flex rounded-full max-w-max bg-richblack-800 gap-x-1 my-6">
                <button 
                className={`${accountType === "student" ? "text-richblack-5 bg-richblack-900  " : "bg-transparent bg-richblack-200 py-2 px-5 rounded-fulltransition-all duration-200"}`}
                
                onClick={(() => setAccountType("student"))}>
                    Student
                </button>
                <button 
                className={`${accountType === "instructor" ? "text-richblack-5 bg-richblack-900  " : "bg-transparent bg-richblack-200 py-2 px-5 rounded-fulltransition-all duration-200"}`}
                onClick={(() => setAccountType("instructor"))}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* only first name and last name */}
                <div className="flex justify-between">
                <label className="w-full mt-[10px]">
                    <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] "> 
                        First Name
                        <sup className="text-pink-300">*</sup>
                    </p>
                    <input required type="text" 
                    name="firstname" 
                    onChange={changeHandler} 
                    value={formData.firstname} 
                    placeholder="Enter First Name"></input>
                </label>


                <label className="w-full">
                    <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">
                        Last Name<sup className="text-pink-300">*</sup></p>
                    <input required type="text" 
                    name="lastname" 
                    onChange={changeHandler} 
                    value={formData.lastname} 
                    placeholder="Enter Last Name"></input>
                </label>
                </div>


                {/* taking the input for email */}
                <label className="w-full mt-[10px]">
                    <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Email<sup className="text-pink-300">*</sup></p>
                    <input required type="email" 
                    name="email" 
                    onChange={changeHandler} 
                    value={formData.email} 
                    placeholder="Enter Email Address"></input>
                </label>



                {/* Create Password nad Confirm Password */}
                <div className="flex justify-between mt-[10px]">
                    <label className="w-full relative">
                        <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Create Password<sup className="text-pink-300">*</sup></p>
                        <input required type={showPassword ? ("text"):("password")} 
                        name="password" 
                        onChange={changeHandler} 
                        value={formData.password} 
                        placeholder="Enter Password"></input>


                    <span 
                        className="absolute right-3 top-[38px] cursor-pointer text-richblack-5"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <BsEyeFill fontSize={24} fill="#AFB2BF"/>
                    ) : (
                        <BsEyeSlashFill fontSize={24} fill="#AFB2BF"/>
                    )}
                </span>
                    </label>


                    <label className="w-full relative">
                        <p className="text-richblach-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Confirm Password<sup className="text-pink-300">*</sup></p>
                        <input required type={showPassword ? ("text"):("password")} 
                        name="confirmPassword" 
                        onChange={changeHandler} 
                        value={formData.confirmPassword} 
                        placeholder="Confirm Password"></input>



                    <span
                        className="absolute right-3 top-[38px] cursor-pointer text-richblack-5"
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (
                            <BsEyeFill fontSize={24} fill="#AFB2BF"/>
                        ) : (
                            <BsEyeSlashFill fontSize={24} fill="#AFB2BF"/>
                        )}
                    </span>
                    </label>
                </div>

                <button className="bg-yellow-200 rounded-[8px] w-full font-medium text-richblack-900 py-[8px] px-[12px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;