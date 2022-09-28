import React,{useState} from 'react';
import icon from '../../assets/stackoverflowicon.png'
import AboutAuth from './AboutAuth';
import { signup, login } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import './auth.css';

const Auth = () => {
    const [isSignup, setIssignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno ] = useState('');
    const [password, setPassword] = useState('');

    const handleSwitch = () =>{
        setIssignup(!isSignup)
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
            e.preventDefault();
            if(!email && !password){
                alert("enter email and password")
            }
                if(isSignup){
                    if(!name){
                    alert("enter a name to continue")
                }
                dispatch(signup({ name , email , password ,phoneno }, navigate));
                }else{
                    dispatch(login({ email , password }, navigate));
                }
            console.log( name, email, password ,phoneno); 
    }

  return (
    <section className='auth-section'>
        { isSignup && <AboutAuth />}
        <div className='auth-container-2'>
                {!isSignup && <img src={icon} style={{height:'50px',width:'50px'}} alt='Stack-overflow' className='login-logo' />}
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor="name">
                        <h4>Display Name</h4>
                    <input type="text" name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
                    </label>
                        )
                    }
                    {
                        isSignup && (
                            <label htmlFor="phoneno">
                        <h4>Mobile No</h4>
                    <input type="text" name='phoneno' id='phoneno' onChange={(e) => {setPhoneno(e.target.value)}} />
                    </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h4>Password</h4>
                       { !isSignup && <h4 style={{color:"#007ac6" , fontSize:"13px"}}>forgot password?</h4>} 
                       </div>
                    <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    { isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Paswords must contain atleast eight<br /> characters, including atleast 1 letters and 1<br /> number.</p>}
                    </label>{
                        isSignup && (
                            <label htmlFor="check">
                                <input type='checkbox' id='check' />
                                <p style={{fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Signup':'Log in '}</button>
                {
                    isSignup && (
                        <p style={{color:"#666767",fontSize:"13px"}}>
                            By clicking "Sign up" , you agree to our
                            <span style={{color:"#007ac6"}}>terms of<br/> service</span>, 
                            <span style={{color:"#007ac6"}}>privacy policy</span> and 
                            <span style={{color:"#007ac6"}}>cookie policy</span>.
                        </p>
                    )
                }
                </form>
                <p>
                    {isSignup ?  'already have an account?' : 'Don\'t have an account?'}
                    <button type='button'  className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Log in' : 'Sign up'}</button>
                </p>
                { !isSignup && <h4 ><Link className='handle-switch-btn' to='/Auth/otplogin'>Login with OTP</Link></h4>} 

        </div>
    </section>
  )
}

export default Auth;