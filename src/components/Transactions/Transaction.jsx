import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import db from '../Database/db';
import { ModifierMenu } from '../ModifierMenu/ModifierMenu';

const Transaction = (props) => {

 
    //Get all accounts for each transaction


    // Animation state for deleting transactions 
    const [ close, setClose ] = useState(false);
    const deleteTransc = () => {setClose(!close)};

    // Open transaction modifier menu
    const [ openMenu, setOpenMenu ] = useState(false);
    const popMenu = () => setOpenMenu(!openMenu);


    // Currency checker
    const currencies = {

      'USD': '$', 
      'EUR': '€',
    }
    
    // Delete every transaction that we click on and has a unique id 
    // We get the id from the TransactionList where we iterate through each record and get the id of each from changing the state from true or false
    // With this in mind we get the id of each transaction that has the state from false to true
    const handleDelete = async (e, item) => {

  
      deleteTransc();
      db.items.delete(item)
      .then(() => {
          console.log( "Deleted objects");
      });
      
    }

  
  return (
    <div onTransitionEnd={(e) => {
      
      handleDelete(e, props.verify);

    }} key={props.verify} className={`${close ? 'rotate-12 transition-all opacity-0' : 'rotate-0 transition-all opacity-100'} flex flex-col`} ref={props.refference}>
      <div className='flex place-content-between border-1 border-slate-200 rounded-xl align-middle shadow-md mb-10 p-5 relative z-20'>
       <div className='flex flex-col w-1/3 font-bold text-lg'>
                    
                    <div className='w-7 h-7 object-contain md:w-10 md:h-10'>
                        <img className='w-full h-full' src="img/icons8-hospital-insurance-96.png" alt="" />
                    </div>

                    <div className='text-sm md:text-lg'>
                        <h1>{props.from}</h1>
                        <p className='text-gray-400'>{props.date}</p>
                    </div>
          
        </div>

        <div className='text-center align-middle flex justify-center flex-col text-sm md:text-lg'>
            <h1>{props.name}</h1>
        </div>
        <div id='mobile' className='flex flex-col md:flex-row'>
          <div id='price' className='text-sm flex flex-col align-middle place-content-center md:text-lg md:mr-5'>
                      
                      <h1 className='text-red-300 text-center'>-{props.money}{props.currency == "USD" ? currencies['USD'] : currencies['EUR']}</h1>

          </div>
          <div className='flex'>
              <div className='flex flex-col align-middle justify-center mr-5' onClick={() => {setClose(!close)}}>

                  <DeleteForeverIcon sx={{ fontSize: 30 }}/>

              </div>
              <div className='flex flex-col align-middle justify-center' onClick={() => popMenu()}>

                  <ChangeCircleIcon  sx={{ fontSize: 30 }}/>

              </div>
          </div>
        </div>
        </div>
        <div>        
        <div className={`${openMenu ? 'min-h-full -translate-y-14 position relative z-10' : 'hidden'}`}>
                  <ModifierMenu verify={props.verify}
                      money={props.money} 
                      date={props.date}
                      name={props.name}
                      currency={props.currency} 
                      from={props.from} data={props.allData}
                      transaction={props.allTransaction}
                      status={popMenu}  />     
        </div>
        </div>
    </div>
  )
}

export { Transaction }
