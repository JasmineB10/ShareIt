import React from 'react';
import { Link } from 'react-router-dom';

function SpecialButton(props) {
  return (
    <button className='py-3 px-6 font-semibold text-xl rounded-full bg-rose-400 text-white'>
      <Link to={props.path}>{props.title}</Link>
    </button>
  );
}

export default SpecialButton;
