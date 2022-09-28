import React from 'react';
import Leftsidebar from '../../components/leftsidebar/Leftsidebar';
import Rightsidebar from '../../components/rightsidebar/Rightsidebar'
import QuestionDetail from './QuestionDetail';

const DisplayQuestion = () => {

    
  return (
    <div className='home-container-1'>
        <Leftsidebar/>
        <div className='home-container-2'>
            <QuestionDetail />
            <Rightsidebar />
        </div>
    </div>
  )
}

export default DisplayQuestion