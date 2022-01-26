import React from 'react';

export default function App ({ children }) {

  return (
    <div className='App'>
      <div className='page-container'>
        {children}
      </div>
    </div>
  );
}
