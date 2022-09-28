import React,{useState} from 'react';
import icon from '../../assets/stackoverflowicon.png';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './auth.css';


const LoginOTP = () => {
    const [phoneno, setPhoneno ] = useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
            e.preventDefault();
    }

  return (
    <section className='auth-section'>
        <div className='auth-container-2'>
        <img src={icon} style={{height:'50px',width:'50px'}} alt='Stack-overflow' className='login-logo' />
        <form onSubmit={handleSubmit}>
        <label htmlFor="phoneno">
                        <h4>Mobile No</h4>
                    <input type="text" name='phoneno' id='phoneno' onChange={(e) => {setPhoneno(e.target.value)}} />
                    </label>
                    <button type='button'  className='auth-btn-2' >Send OTP</button>
                    <label htmlFor="otp">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h4>OTP</h4>
                       </div>
                    <input type="number" placeholder="One time password" name="otp" autoComplete="false" onChange={(e) => {setOtp(e.target.value)}}/>
                    </label>
                    <button type='button' className='auth-btn' >Verify OTP</button>
                    </form>
                <h4 ><Link className='handle-switch-btn' to='/Auth'>Login with password</Link></h4>
        </div>
        </section>
  )
}

export default LoginOTP