import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import Approved from '../../../../components/Status/Approved';
import MessageError from '../../../../components/Status/MessageError';

const AddYourAccounts = (props) => {

       
  return (
    <div className={`${props.isOpen  ? 'block' : 'hidden'} m-auto h-auto bg-gray-300 rounded-xl p-1 font-bold text-grey-letter text-lg w-[80%] md:grid md:col-span-2 md:w-1/2`}>
        <form action="" onSubmit={props.submit}>
            <div className='flex place-content-around w-full border-b border-grey-letter mb-10 py-5'>
                    <div className='flex align-middle w-3/4'>
                        <div className='w-8 h-8 md:h-10 md:w-10'><img className='w-full h-full' src="img/icons8-money-bag-30.png" alt="" /></div>
                        <div className='flex flex-col place-content-center'><h1 className='ml-10 text-lg'>Add your accounts</h1></div>
                    </div>
                    <div onClick={() => props.close()} className='cursor-pointer flex flex-col place-content-center rounded-lg border-2 border-red-brown px-2'><span>X</span></div>
            </div>
            <div className='flex flex-col px-4'>
                <div className='md:flex md:place-content-between'>
                    <div className='flex flex-col md:align-middle md:place-content-center'>
                        <label className='pb-3' htmlFor="name">Name:</label>
                        <input required className='border-2 border-slate-200 px-4 outline-none' placeholder='Account name' type="text" onChange={props.name} value={props.accounts.name}/>
                    </div>
                    <div className='flex flex-col my-12 md:align-middle md:place-content-center'>
                        <label className='pb-3' htmlFor="group">Group:</label>
                        <select value={props.accounts.type} onChange={props.type} required className='outline-none border-2 border-slate-200 py-[3px]' name="group" id="card-selection">
                            
                            <option value="">Where do you keep your money?</option>
                            <option value="Card">Card</option>
                            <option value="Bank Account">Bank Account</option>

                        </select>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='pb-3' htmlFor="currency">Currency:</label>
                    <select value={props.accounts.currency} required onChange={props.currency} className='outline-none' name="currency" id="currency-selection">
                        <option value="">Choose your currency!</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className='flex flex-col mt-2 relative'>
                
                    <span className='absolute z-10 right-0 bg-slate-200 px-3 py-[1px]'>{props.switchCurrency}</span>
                    <input value={props.accounts.ammounts} min={0} onChange={props.ammounts} className='outline-none border-2 border-slate-200 px-4' type="number" name='currency'/>
            
                </div>

                <button className='hover:bg-red-400 hover:transition-colors duration-150 bg-red-brown text-white text-lg rounded-lg w-full py-3 mt-8 mb-3' type='submit' onClick={props.submit}>Save account</button>
            </div>
            {props.error ? <MessageError /> : null}
            {props.approved ? <Approved /> : null}
        </form>
    </div>
  )
}

export { AddYourAccounts };
