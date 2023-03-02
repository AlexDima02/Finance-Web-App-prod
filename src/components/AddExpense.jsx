import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Transaction from '../pages/Transactions/Transaction';

const AddExpense = (props) => {
  
  const account = props.accounts?.map((item) => item.account);
  console.log(account)
  // For each object we need to create a 
  //    new transaction container after we click on AddExpense btn
  // Get the inputs from the expense container
  const [data, setData] = useState({
    
    id: "",
    from: "",
    money: "",
    date: "",
    currency: "",
    name: ""

  });

  // const [myValue, setMyValue] = useState("Loading...");
  const myRef = useRef(null);
  
  // useEffect(() => {
  //   setMyValue(myRef?.current.dataset.value);
  // }, [myRef]);
  

  const setName = (account) => {

    myRef.current = account;
    return myRef.current;
    


  }


  // What is happening when we click on AddExpense btn
  // Add data from the inputs inside the array
  function handleStoreInputChange(e) {
    
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, from: e.target.value });
    
  }

  function handleMoneyInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, money: e.target.value });
  
    }
  function handleDateInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, date: e.target.value });
  
    }

  function handleCurrencyInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, currency: e.target.value });
  
    }

  function handleOwnerInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, name: e.target.value });
  
    }

    function handleSubmit(e) {
        
         // prevents browser refresh
        // trim() gets rid of string whitespace
        props.onSubmit({ ...data, id: Math.floor(Math.random() * 1000) });
        // setData({ ...data });
        // props.change();

    }



  return (
    <div className='h-max bg-white rounded-xl p-7 font-bold text-grey-letter text-lg flex-1 md:grid '>
        <form className='' onSubmit={handleSubmit} action="">
            <h1 className='text-xl font-bold text-grey-letter mb-10'>Expenses</h1>
            <div className='flex flex-col mb-3 text-lg md:flex-col md:place-content-between'>
                <div className='flex flex-col mb-4 pb-5'>
                    <label htmlFor="from">From</label>
                    <select onChange={(e) => handleStoreInputChange(e)} className='border-2 border-slate-200 w-1/2' name="" id="">
                        {/* <option value='Card'>Card</option>
                        <option value='Bank Account'>Bank account</option> */}
                        {props.accounts?.map((account, index) => (
                            
                            <option className='selector' key={index} ref={myRef} value={account.account.name} >{account.account.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{account.account.currency}</option>

                        ))}
                       
                    </select>
                </div>
                <div className='flex flex-col pb-5 md:align-middle md:place-content-center'>
                    <label className='pb-1' htmlFor="name">Transaction:</label>
                    <input className='border-2 border-slate-200 px-4' placeholder='Transaction name' type="text" onChange={handleOwnerInputChange}/>
                </div>
                <div className='flex flex-col relative align-bottom place-content-center pt-5'>
                    <select className='border-2 border-slate-200 px-4' onChange={(e) => handleCurrencyInputChange(e)} name="currency" id="currency-selection">
                        <option value="">Choose your currency!</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                    <span className='absolute z-10 right-0 bottom-[16px] bg-slate-200 px-3 py-[1px]'>{data.currency}</span>
                    {/* <label className='absolute z-10 right-[1px] bg-slate-200 px-4 py-[2px]' htmlFor="currency">USD</label> */}
                    <input onChange={handleMoneyInputChange} className='border-2 border-slate-200 px-4 my-4' type="number" name='currency'/>
                </div>

            </div>
            <div className='mb-4'>

                <input onChange={handleDateInputChange} className='w-full' type="date" />

            </div>
            <button type='submit' className='hover:bg-red-400 hover:transition-colors duration-150 bg-red-brown text-white text-lg rounded-lg w-full py-3'>Add Expense</button>
        </form>
        
    </div>
  )
}

export {AddExpense};


// Afiseaza EUR sau USD in functie de ce from ai
// Daca Laura are cont in USD sau EUR, cand selectam Laura in USD ne va afisa currency la tranzactie automat in USD

// Scadem banii din tranzactii din conturi

// Modificam bugetul in functie de cati bani exista