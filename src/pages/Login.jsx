import Template from '../components/Template.jsx';
import LoginImg from '../assets/login.png'


function Login(setIsLoggedIn){

    return (

        <Template
        title = "Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof youre career."
        image={LoginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}/>
        
    )
}

export default Login;