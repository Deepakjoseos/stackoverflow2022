import React from 'react'
import Homemainbar from '../../components/homemainbar/Homemainbar';
import Leftsidebar from '../../components/leftsidebar/Leftsidebar';
import Rightsidebar from '../../components/rightsidebar/Rightsidebar';
import '../../App.css';

const Questions = () => {
  return (
    <div className='home-container-1'>
        <Leftsidebar/>
        <div className='home-container-2'>
          <Homemainbar />
          <Rightsidebar />
</div>
    </div>
  )
} 

export default Questions;