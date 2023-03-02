import React from 'react'

const AddTransactionBtn = (props) => {
  return (
    <div className='m-5 group' onClick={props.openMenu}>
        <span className='cursor-pointer relative top-0 left-1 py-[11px] px-4 rounded-sm bg-slate-200 md:rounded-lg md:py-4 md:px-8 md:text-xl'>+</span>
        <button className='hover:transition-colors duration-150 group-hover:bg-red-brown font-bold text-grey-letter py-2 px-4 rounded-sm bg-slate-400 md:px-8 md:py-[14px] md:rounded-sm relative md:text-xl'>New</button>
    </div>
  )
}

export { AddTransactionBtn };
