import React, { useState } from 'react'
import classes from './Login.module.css'
import { AiOutlineUser,AiOutlineLock,AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Button} from '../../components/common/index';


const Login = () => {

    const [showPassword,setShowPassword]=useState(false);

    function toggleShowPassword (){
        setShowPassword(!showPassword);
    }

  return (
    <>
        <div className={classes.mainSection}>
            <div className={classes.innerSection}>
                <div className={classes.buttonSwitch}>
                    <button className={`${classes.signupButton}`}><a href="/signup">Sign Up</a></button>     
                    <button className={`${classes.loginButton} ${classes.active}`}>Log In</button>
                </div>
                <form className={classes.loginForm}>
                    {/* <label className={classes.inputLabel}>Email <span className={classes.mandatory}>*</span></label> */}
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/>
                        <input type="email" className={classes.inputAns} placeholder='Your Email'/>
                    </div>

                    {/* <label className={classes.inputLabel}>Password <span className={classes.mandatory}>*</span></label> */}
                    <div className={classes.inputField}><AiOutlineLock className={classes.container} size={42} color="#767676"/>
                        <input type={showPassword ? 'text' : 'password'} className={classes.inputAns} id='password' name='password' placeholder='Enter Password'/>
                        <button type='button' onClick={toggleShowPassword} className={classes.togglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible size={24} color="#767676"/> : <AiOutlineEye size={24} color="#767676"/>}
                        </button>
                    </div>
                    <div className={classes.forgotPassword}><a href="">Forgot Password ?</a></div>
                    <div className={classes.buttonContainer}>
                        <Button label="Log In" padding="8px 24px" fontSize="20px" bgColor="#9f62ff" className={classes.submitButton}/>
                    </div>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Login