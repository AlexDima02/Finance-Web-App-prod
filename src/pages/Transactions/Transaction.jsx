import React from 'react'
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { AddTransactionBtn } from '../../components/AddTransactionBtn/AddTransactionBtn';

function Transaction(props) {
  
  return (
    <div className='max-w-6xl relative px-8 m-auto min-h-screen'>
      <div className='h-auto bg-white rounded-xl p-1 font-bold text-grey-letter text-lg md:grid md:col-span-2'>
            
            {/* <AddTransactionBtn/> */}
            <TransactionList accounts={props.accounts} data={props.transactions}/>
            




      </div>
    </div>
  )
}

export default Transaction;