import React from 'react';
import { useSelector } from 'react-redux';
import User from './User'
import './users.css';
// import User from './User'

const UsersList = () => {
    const users = useSelector((state) => state.usersReducer)
    // console.log(users);
  return (
    <div className='userslist-container'>
      {
        users.map((user) =>   (
          <User user ={user} key={user?._id} />
        ))
      }
    </div>
  )
}

export default UsersList
