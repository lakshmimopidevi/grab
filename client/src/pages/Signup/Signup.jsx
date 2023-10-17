import React from 'react'
import { useState } from 'react';
import classes from './Signup.module.css'
import { AiOutlineUser,AiOutlineMail,AiOutlineLock,AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { Button} from '../../components/common/index';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
      setShowPassword(!showPassword);
    }

  return (
    <>
        <div className={classes.mainSection}>
            <div className={classes.innerSection}>
                <div className={classes.buttonSwitch}>
                    <button className={`${classes.signupButton} ${classes.active}`}>Sign Up</button>     
                    <button className={`${classes.loginButton}`}><a href="/login">Log In</a></button>
                </div>
                <form className={classes.signupForm}>
                    {/* <label className={classes.inputLabel}>Name <span className={classes.mandatory}>*</span></label> */}
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/>
                        <input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/>
                    </div>

                    {/* <label className={classes.inputLabel}>Email <span className={classes.mandatory}>*</span></label> */}
                    <div className={classes.inputField}><AiOutlineMail className={classes.container} size={42} color="#767676"/>
                        <input type="text" className={classes.inputAns} placeholder='Your Email'/>
                    </div>

                    {/* <label className={classes.inputLabel}>Password <span className={classes.mandatory}>*</span></label> */}
                    <div className={classes.inputField}><AiOutlineLock className={classes.container} size={42} color="#767676"/>
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" className={classes.inputAns} placeholder='Enter Password' />
                            <button type="button" onClick={toggleShowPassword} className={classes.togglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible size={24} color="#767676"/> : <AiOutlineEye size={24} color="#767676"/>}                            </button>
                    </div>
                    
                    <label className={classes.checkBox}>
                        <input type="checkbox" name="newsletter" value="yes" className={classes.checkBoxInput}/>
                        I agree to Grabbits&apos;s Terms of Service and Privacy Policy.
                    </label>
                    <div className={classes.buttonContainer}>
                        <Button label="Sign In" padding="8px 24px" fontSize="20px" bgColor="#9f62ff" className={classes.submitButton}/>
                    </div>  
                </form>

                
            </div>
        </div>
    </>
  )
}

export default Signup