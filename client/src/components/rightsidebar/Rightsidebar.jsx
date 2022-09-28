import React from 'react';
import './rightsidebar.css';
import Widget from './Widget';
import WidgetTags from './WidgetTags';

const Rightsidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget />
      <WidgetTags />
    </aside>
  )
}

export default Rightsidebar;