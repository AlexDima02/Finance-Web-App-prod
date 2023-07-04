import React from 'react'
import { Budget } from './components/Budget/Budget';
import { TotalBalance } from './components/TotalBalance/TotalBalance';
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { AddExpense } from '../../components/AddExpense';
import { useState, useEffect, useRef } from 'react';

function Dashboard(props) {

  // States
  // AddExpense object data - transactions
  const [datas, setData] = useState([]);
  const transactionRef = useRef(null);
  


  // Add data in to the array - Transactions
  function addData(data){

    let sortedData = datas.sort((a, b) => new Date(a.record?.date).getTime() - new Date(b.record?.date).getTime());
    // Adds new data at the beginning of the array
    setData([data, ...sortedData]);
    // Bring all the transactions from AddExpense component to the state of the App in to the DB 
    props.addTransaction(data, ...sortedData);
  
  }

  const scrollToBottom = () => {
    transactionRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  

  return (
    <div className='max-w-6xl relative px-8 m-auto min-h-screen'>
      <div className='grid gap-4 grid-cols-1 grid-rows-1 md:grid-rows-1 md:grid-cols-2'>

          <Budget accounts={props.accounts} transactions={props.transactions}/>
          <TotalBalance accounts={props.accounts} transactions={props.transactions} addAccounts={props.addAccounts}/>
          <AddExpense scrollToBottom={scrollToBottom} onSubmit={addData} accounts={props.accounts} /> 
          <TransactionList transactionRef={transactionRef} accounts={props.accounts} data={props.transactions}/>
          

      </div>
    </div>
  )

}

export default Dashboard;

// Add Expense is dependent to his parent Dashboard
// Dashboard need some states that AddExpense can update 
//  and the data from the state needs to be put into the TransactionList
// For each data from the array map through and create a new container with new transactions