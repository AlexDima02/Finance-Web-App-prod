import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { AddTransactionBtn } from '../../components/AddTransactionBtn/AddTransactionBtn';
import { AddYourAccounts } from './components/AddYourAccount/AddYourAccounts';
import BankAccountsHeadline from './components/PageSmallDetails/BankAccountsHeadline';
import CreditAccountsHeadline from './components/PageSmallDetails/CreditAccountsHeadline';
import db from '../../components/Database/db';
import MessageError from '../../components/Status/MessageError';
import Approved from '../../components/Status/Approved';
import AccountDeletedAlert from './components/AddYourAccount/AccountDeletedAlert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Account(props) {
 
  const account = props.accounts?.map(el => el);
  console.log(account)
  console.log(props.transactions)
  // Open the add account menu
  const [open, setOpenAccountMenu] = useState(false);
  const [error, setError] = useState(false);
  const [approved, setApproved] = useState(false);
  const [ deletionAccountStatus, setDeletionAccountStatus ] = useState(false);
  const onClose = () => setOpenAccountMenu(!open);
  console.log(error)

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

    const handleDeleteAccounts = (e, id) => {

  
      let filtredArray = [...props.transactions, ...props.accounts]
      const filtredBanks = filtredArray.filter((el,index) => el.record?.from === e.name && el.record?.currency === e.currency);
      
      filtredBanks.map((el) => {

        return db.items.delete(el.id).then(() => {
            console.log( "Deleted objects");
        });

      })

      console.log(filtredBanks)

      db.data.delete(id).then(() => {
        console.log('Account deleted!')
      })
      setDeletionAccountStatus(true);
      setTimeout(() => {
        setDeletionAccountStatus(false);
      }, 2000);

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
      if(accounts.ammounts && accounts.currency && accounts.name && accounts.type){
        
        // // Take accounts written accounts 
        props.onSubmit({ ...accounts, id: Math.floor(Math.random() * 1000) });
        setAccounts({ ...accounts });
        setError(false)
        setApproved(true);
        setTimeout(() => {
          setApproved(false);
        }, 1000);
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
        setTimeout(() => {
          setError(false)
        }, 1500);
        

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

            {account?.filter(el => el.type == 'Bank Account').map((el, index) => {
              
            
              return(
              
                  <div className='w-full flex place-content-between px-4 py-3'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.budget + el.currency}</p>
                      <span onClick={(e) => handleDeleteAccounts(el, el.id)} className='cursor-pointer'><DeleteForeverIcon sx={{ fontSize: 25 }}/></span>

                  </div> 

              )

            })}
            {account ? <CreditAccountsHeadline account={account}/> : null}

            {account?.filter(el => el.type == 'Card').map((el, index) => {

                 return(
                  
                  <div className='w-full flex place-content-between px-4 py-3'>
                      
                      <h1>{el.name}</h1>
                      <h2>{el.type}</h2>
                      <p className='text-green-light'>{el.budget + el.currency}</p>
                      <span onClick={(e) => handleDeleteAccounts(el, el.id)} className='cursor-pointer'><DeleteForeverIcon sx={{ fontSize: 30 }}/></span>

                  </div> 
                 
                )

            })}
            
        </div>
        <AccountDeletedAlert deletionAccountStatus={deletionAccountStatus} />
    </div>
  )
}

export default Account;

