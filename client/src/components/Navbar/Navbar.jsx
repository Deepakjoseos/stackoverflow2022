import React ,{useEffect} from 'react';
import logo from '../../assets/stackoverflow.png';
import { useSelector , useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import search  from '../../assets/magnifying-glass-solid.svg';
import Avatar from '../Avatar/Avatar';
import decode from 'jwt-decode';
import './navbar.css'
import { setCurrrentUser } from '../../actions/currentUser';

const Navbar = () => {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        var User = useSelector((state) => (state.currentUserReducer) );

        useEffect(() => {
          const token = User?.token
          if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()){
              handleLogout();
            }
          }
          dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('Profile'))))
        },[dispatch])

        const handleLogout = () => {
          dispatch({type: 'LOGOUT'});
          navigate('/');
          dispatch(setCurrrentUser(null))
        }

  return (
      <nav className='main-nav'>
    <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'><img  src={logo} alt='logo'/></Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      <form>
          <input type='text' placeholder='search ....' />
          <img className="search-icon" src={search} alt='search' style={{height:'20px', width:'20px'}} />
      </form>
      { User === null ? <Link to='/Auth' className='nav-item nav-links'> Log In</Link>:
      <>
      <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" ><Link to={`/Users/${User?.result?._id}`} style={{textDecoration:"none", color:'white'}}  className='tem'>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
      <button className='nav-item nav-links' onClick={handleLogout}>log out</button>
      </>}
    </div>
    </nav>
  )
}

export default Navbar;
;