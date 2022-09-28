import React from 'react';
import { useLocation } from 'react-router-dom';
import Leftsidebar from '../../components/leftsidebar/Leftsidebar';
import UsersList from './UsersList';

import './users.css';

const Users = () => {

  const location = useLocation();

  // console.log(location);
  return (
    <div className='home-container-1'>
        <Leftsidebar />
        <div className='home-container-2' style={{marginTop:"20px"}}>
          <h1 style={{fontWeight:"400"}}>Users</h1>
        {
          location.pathname === '/Users' ?
          <UsersList /> :
          <></>
        }
        </div>
    </div>
  )
}

export default Users