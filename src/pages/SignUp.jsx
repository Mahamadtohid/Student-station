import Template from '../components/Template.jsx';
import SignUpImg from '../assets/signup.png';


function SignUp(setIsLoggedIn){

    return (
        

        <Template
        title = "Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof youre career."
        image={SignUpImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}/>
        
    )
}

export default SignUp;