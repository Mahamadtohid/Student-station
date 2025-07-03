import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import React from 'react';



function Template({title , desc1 , desc2 , image , formtype , setIsLoggedIn}){

    return(
    <div>

        <div>
            <h1>{title}</h1>

            <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}


            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>Sign Up With Google</button>


        </div>


        <div>
            <img src={frame} alt="Frame" width={558} height={504} loading='lazy'/>

            <img src={image} 
            alt="Frame" 
            width={558} 
            height={490} 
            loading='lazy'/>
        </div>

    </div>
    )
}

export default Template;