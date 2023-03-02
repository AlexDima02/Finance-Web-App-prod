import React from 'react'
import { useState, useEffect } from 'react';

function Header(props) {


  return (
    
        <header>
            <nav className='flex place-content-between align-middle bg-beige px-5 md:px-8 py-3'>
              
                <div className='text-2xl md:text-4xl flex'>
                  
                    <div className='cursor-pointer w-8 h-4 md:hidden mr-8' onClick={props.open}>

                      <div className='bg-grey-letter w-8 h-1'></div>
                      <div className='bg-grey-letter w-8 h-1 my-2'></div>
                      <div className='bg-grey-letter w-8 h-1'></div>

                    </div>
                    
                    <h1 className='logo'>MoneyKeeper</h1>
                  
                </div>

                <a href="" className='bg-gray-600 rounded-full w-10 h-10 border-4 border-white'></a>
            
            </nav>
        </header>
   
  )
}

export { Header };