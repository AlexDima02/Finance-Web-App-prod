import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { AddTransactionBtn } from '../../components/AddTransactionBtn/AddTransactionBtn';
import { AddYourAccounts } from './components/AddYourAccount/AddYourAccounts';
import BankAccountsHeadline from './components/PageSmallDetails/BankAccountsHeadline';
import CreditAccountsHeadline from './components/PageSmallDetails/CreditAccountsHeadline';


function Account(props) {
 
  const account = props.accounts?.map(el => el);
  console.log(account)
  // Open the add account menu
  const [open, setOpenAccountMenu] = useState(false);
  const [error, setError] = useState(false);
  const [approved, setApproved] = useState(false);
  const onClose = () => setOpenAccountMenu(!open);
  console.log(error)

  const [accounts, setAccounts] = useState({
      
      id: "",
      name: "",
      type: "",
      ammounts: "",
      currency: ""

  });



  console.log(accounts)

  const openMenu = () => {

      setOpenAccountMenu(!open);

  } 

  // Click outside
    // useEffect(() => {

    //   document.addEventListener('mousedown', handleClickOutside);

    //   return () => {

    //     document.removeEventListener('click', handleClickOutside);

    //   };

    // });

    // const click = useRef();


    // const handleClickOutside = (e) => {
        
    //     if(!click.current.contains(e.target)){

    //         // console.log('Outside');
    //         onClose();
            
    //     }else{

    //         // console.log('inside');
            
    //     }
    // }
    
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
      if(accounts.ammounts && accounts.currency && accounts.name && accounts.type){
        
        // // Take accounts written accounts 
        props.onSubmit({ ...accounts, id: Math.floor(Math.random() * 1000) });
        setAccounts({ ...accounts });
        setError(false)
        setApproved(true);
        setAccounts({
      
          id: "",
          name: "",
          type: "",
          ammounts: "",
          currency: ""
    
        });
  
      }else{

        setApproved(false);
        setError(true)

      }

      
      

      
    }

  
  
  return (
    <div className='w-full px-8 m-auto min-h-screen md:w-1/2'>
        <div className={`${open ? 'absolute bottom-1/2 top-1/2 right-[50%] left-[0%] w-full z-10' : 'hidden'}  flex flex-col justify-center align-middle  bg-gray-500 bg-opacity-50 m-auto min-h-screen`}>
          <AddYourAccounts approved={approved} error={error} switchCurrency={accounts.currency} name={handleNameInputChange} type={handleTypeInputChange} ammounts={handleAmmountsInputChange} accounts={accounts} currency={handleCurrencyInputChange} submit={handleSubmit} close={onClose} isOpen={open}/>
        </div>
        <div className='py-5 h-auto bg-white rounded-xl font-bold text-grey-letter text-lg md:grid md:col-span-2'>
            
            <AddTransactionBtn openMenu={openMenu}/>
            
            {account ? <BankAccountsHeadline account={account}/> : null}

            {account?.filter(el => el.type == 'Bank Account').map((el) => {
              
            
              return(
              
                  <div className='w-full flex place-content-between px-4 py-3'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.budget + el.currency}</p>

                  </div> 

              )

            })}
            {account ? <CreditAccountsHeadline account={account}/> : null}
            {account?.filter(el => el.type == 'Card').map((el) => {

                 return(
                  
                  <div className='w-full flex place-content-between px-4 py-3'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.budget + el.currency}</p>

                  </div> 
                 
                )

            })}
            
        </div>
        
    </div>
  )
}

export default Account;

