import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { AddTransactionBtn } from '../../components/AddTransactionBtn/AddTransactionBtn';
import { AddYourAccounts } from './components/AddYourAccount/AddYourAccounts';


function Account(props) {
 
  const account = props.accounts?.map(el => el.account);
 
 // Open the add account menu
 const [open, setOpenAccountMenu] = useState(false);
 const onClose = () => setOpenAccountMenu(!open);

 const [accounts, setAccounts] = useState({
    
    id: "",
    name: "",
    type: "",
    ammounts: "",
    currency: ""

});
 
const openMenu = () => {

    setOpenAccountMenu(!open);

} 

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    return () => {

      document.removeEventListener('click', handleClickOutside);

    };

  });

  const click = useRef();


  const handleClickOutside = (e) => {
      
      if(!click.current.contains(e.target)){

          // console.log('Outside');
          onClose();
          
      }else{

          // console.log('inside');
          
      }
  }
  
  function handleNameInputChange(e) {
   
    setAccounts({ ...accounts, name: e.target.value });
  
    }
  function handleTypeInputChange(e) {
   
    setAccounts({ ...accounts, type: e.target.value });
  
    }
  function handleAmmountsInputChange(e) {
   
    setAccounts({ ...accounts, ammounts: e.target.value });
  
  }
  function handleCurrencyInputChange(e) {
   
    setAccounts({ ...accounts, currency: e.target.value });
  
  }

  function handleSubmit(e) {
        
    e.preventDefault(); 
    // Take accounts written accounts 
    props.onSubmit({ ...accounts, id: Math.floor(Math.random() * 1000) });
    setAccounts({ ...accounts });

    
  }

  
  
  return (
    <div className='w-full border-2 border-blue-800 px-8 m-auto min-h-screen md:w-1/2'>
        <div className={`${open ? 'absolute bottom-1/2 top-1/2 right-[50%] left-[0%]  w-full h-max z-10' : 'hidden'}  flex flex-col justify-center align-middle  bg-gray-500 bg-opacity-50 m-auto min-h-screen`}>
          <AddYourAccounts switchCurrency={accounts.currency} name={handleNameInputChange} type={handleTypeInputChange} ammounts={handleAmmountsInputChange} currency={handleCurrencyInputChange} submit={handleSubmit} click={click} isOpen={open}/>
        </div>
        <div className='h-auto bg-white rounded-xl p-1 font-bold text-grey-letter text-lg md:grid md:col-span-2'>
            <AddTransactionBtn openMenu={openMenu}/>
            <div className='bg-red-brown w-full py-3 px-4'>
                <h1>Bank Accounts</h1>
            </div>
            {account?.filter(el => el.type == 'Bank Account').map((el) => {
              
            
              return(
              
                  <div className='border-b-grey-letter w-full flex place-content-between px-4 py-3 border-b border-grey-letter'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.ammounts + el.currency}</p>

                  </div> 

              )

            })}
            <div className='bg-red-brown w-full py-3 px-4 mt-10'>
                <h1>Credit</h1>
            </div>
            {account?.filter(el => el.type == 'Card').map((el) => {

                 return(
                  
                  <div className='border-b-grey-letter w-full flex place-content-between px-4 py-3 border-b border-grey-letter'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.ammounts + el.currency}</p>

                  </div> 
                 
                )

            })}
            
        </div>
        
    </div>
  )
}

export default Account;

