import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Transaction from '../pages/Transactions/Transaction';
import MessageError from './Status/MessageError';
import Approved from './Status/Approved';

const AddExpense = (props) => {
  
  
  // For each object we need to create a 
  //    new transaction container after we click on AddExpense btn
  // Get the inputs from the expense container
  const [data, setData] = useState({
    
    id: "",
    from: '',
    money: "",
    date: "",
    currency: "",
    name: ""

  });
  console.log(data)
  const [error, setError] = useState(false);
  const [ approved, setApproved ] = useState(false);



  // What is happening when we click on AddExpense btn
  // Add data from the inputs inside the array
  function handleStoreInputChange(e) {
    
    let array = [...e.target.value];
    let currency = array.filter((item, index, array) => index > array.indexOf(',')).join('');
    console.log(currency)
    let name = array.filter((item, index, array) => index < array.indexOf(',')).join('');
    console.log(name)
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, from: name, currency: currency });
    
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


  function handleOwnerInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, name: e.target.value });
  
    }

    function handleSubmit(e) {

      e.preventDefault();
      if(data.from && data.money && data.date && data.currency && data.name){
          
        props.onSubmit({ ...data, id: Math.floor(Math.random() * 1000) });
        setApproved(true);
        setError(false);
        setTimeout(() => {
          setApproved(false);
        }, 2000)
        setData({ name: '', date: '', currency: '', money: '', from: ''});
        const ownerSelector = document.querySelector('#owner-selector');
        ownerSelector.value = '';
        props.scrollToBottom();

      }else{

        setApproved(false);
        setError(true);
        setTimeout(() => {
          setError(false)
        }, 2000)

      }

    }



  return (
    <div className='h-max bg-white rounded-xl p-7 font-bold text-grey-letter text-lg flex-1 md:grid '>
        <form className='' onSubmit={handleSubmit} action="">
            <h1 className='text-xl font-bold text-grey-letter mb-10'>EXPENSES:</h1>
            <div className='flex flex-col mb-3 text-lg md:flex-col md:place-content-between'>
                <div className='flex flex-col mb-4 pb-5'>
                    <label htmlFor="from">From:</label>
                    <select onChange={(e) => handleStoreInputChange(e)} className='border-2 border-slate-200 w-1/2 outline-none' name="" id="owner-selector">
                       
                        <option value=''>Choose account owner!</option>
                        {props.accounts?.map((account, index) => (
                            
                            <option className='selector' key={index} value={[account.name, account.currency]}>{account.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{account.currency}</option>

                        ))}
                       
                    </select>
                </div>
                <div className='flex flex-col pb-5 md:align-middle md:place-content-center'>
                    <label className='pb-1' htmlFor="name">Transaction:</label>
                    <input value={data.name} className='border-2 border-slate-200 px-4 outline-none' placeholder='Transaction name' type="text" onChange={handleOwnerInputChange}/>
                </div>
                <div className='flex flex-col relative align-bottom place-content-center pt-5'>
                    <label htmlFor="currency">Enter amount spent:</label>
                    <span className='absolute z-10 right-0 bottom-[16px] bg-slate-200 px-3 py-[1px]'>{data.currency}</span>
                    <input min={0} onChange={handleMoneyInputChange} value={data.money} className='border-2 border-slate-300  outline-none px-4 my-4' type="number" name='currency'/>
                </div>

            </div>
            <div className='mb-4'>

                <label htmlFor="date">Date:</label>
                <input onChange={handleDateInputChange} value={data.date} className='w-full' type="date" />

            </div>
            <button type='submit' className='hover:bg-red-400 hover:transition-colors duration-150 bg-red-brown text-white text-lg rounded-lg w-full py-3'>Add Expense</button>
            {error ? <MessageError /> : null}
            {approved ? <Approved /> : null}
        </form>
        
    </div>
  )
}

export {AddExpense};


// Afiseaza EUR sau USD in functie de ce from ai
// Daca Laura are cont in USD sau EUR, cand selectam Laura in USD ne va afisa currency la tranzactie automat in USD

// Scadem banii din tranzactii din conturi

// Modificam bugetul in functie de cati bani exista