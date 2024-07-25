import React, { useState } from 'react';
import SpecialButton from './SpecialButton';
import { blogData } from './blogData';

function Header() {

  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl py-5 font-bold text-indigo-400">Publish your passions, your way</h1>
      <p className="text-lg font-semibold text-indigo-400">Create a unique and beautiful blog easily.</p>
      <div className="py-3">
        <SpecialButton title="Create Your Blog" path="/create"/>
      </div>
    </div>
  );
}

export default Header;
