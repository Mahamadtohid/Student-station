import { useState } from "react";
import toast from "react-hot-toast";
import { BsEyeFill , BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";




function SignUpForm(props){

    const navigate = useNavigate();
    let setIsLoggenIn = props.setIsLoggenIn;

    

    const[formData , setFormData] = useState({
        firstname :"",
        surname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword , setShowPassword] = useState(false)


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
        setIsLoggenIn(true)
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
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* only first name and last name */}
                <div>
                                    <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type="text" 
                    name="firstname" 
                    onChange={changeHandler} 
                    value={formData.firstname} 
                    placeholder="Enter First Name"></input>
                </label>


                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type="text" 
                    name="lastname" 
                    onChange={changeHandler} 
                    value={formData.lastname} 
                    placeholder="Enter Last Name"></input>
                </label>
                </div>


                {/* taking the input for email */}
                <label>
                    <p>Email<sup>*</sup></p>
                    <input required type="email" 
                    name="email" 
                    onChange={changeHandler} 
                    value={formData.email} 
                    placeholder="Enter Email Address"></input>
                </label>



                {/* Create Password nad Confirm Password */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input required type={showPassword ? ("text"):("password")} 
                        name="password" 
                        onChange={changeHandler} 
                        value={formData.password} 
                        placeholder="Enter Password"></input>


                    <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <BsEyeFill/>
                    ) : (
                        <BsEyeSlashFill/>
                    )}
                </span>
                    </label>


                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input required type={showPassword ? ("text"):("password")} 
                        name="confirmPassword" 
                        onChange={changeHandler} 
                        value={formData.confirmPassword} 
                        placeholder="Confirm Password"></input>



                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (
                            <BsEyeFill/>
                        ) : (
                            <BsEyeSlashFill/>
                        )}
                    </span>
                    </label>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;