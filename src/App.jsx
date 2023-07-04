import { useState, useEffect } from 'react'
import React, { Component } from "react";
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Transaction from './pages/Transactions/Transaction';
import Account from './pages/Accounts/Account';
import './App.css';
// Import database library
import db from './components/Database/db';
import { useLiveQuery } from "dexie-react-hooks";
import AccountDeletedAlert from './pages/Accounts/components/AddYourAccount/AccountDeletedAlert';




function App() {
  
  // States 
  // Sidebar mobile open - close
  const [open, setOpen] = useState(false);
  const SideBarOpen = () => setOpen(!open);
  // Accounts
  const [accounts, setData] = useState([]);
  console.log(accounts);
  // Transactions
  const [transactions, setTransaction] = useState([]);
  console.log(transactions);

 
  const [filteredAccounts, setFilter] = useState([]);
  console.log(filteredAccounts);

  // Create database and follow each change inside of it
  const { data, items } = db;
  // Dexie hook - watch for changes in the database
  const allAccounts = useLiveQuery(() => data.toArray(), []);
  const allTransactions = useLiveQuery(() => items.toArray(), []);
  
  

 
  
  
  
  

  // Implementation
    // If every from from the transaction is equal to every name from the accounts object
    // Subtract from the ammounts property of each account that contains the same name as the transaction, money property
    // Return the result and pass it as a prop to the accounts in Dashboard and Account components
  
       
  const result = () => allAccounts?.map((acc) => {
        
   
    // Get the accounts equal to their transaction names
        let cont = null;
        const countTransactions = [];
        cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency, type: acc.account.type, id: acc.id}
        allTransactions?.map((transc) => {
           
            if(acc.account.name == transc.record.from && acc.account.currency == transc.record.currency){
                

                const number = parseInt(transc.record.money);
                countTransactions.push(number);
                
                cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency, type: acc.account.type, id: acc.id};
            

            }
            
            
        })
        
        return cont;

    })

    const syncedAccounts = result();
    

  // Make the total of each array and keep the name of the account
  // We want to make the total budget / 30 days for each account and somehow arrive at an object 
  const daily = () => syncedAccounts?.filter((element) => element !== null).map((el) => {
      
      let cont = null;
      cont = {name: el.name, total: el.total, budget: el.budget, day: Math.ceil(el.budget / 30), currency: el.currency, type: el.type, id: el.id}
      return cont;

  })
  

  const dayBudget = daily();
  console.log(dayBudget)
 
  
  // Get the new data from the account page and keep the old accounts in the array
  // Add account into the database
  async function addAccounts(account){

    // Save or create a record into the offline database
    await data.add({

      account

    })
    // Take new account from Account component and keep also the old accounts into the array
    setData([account, ...accounts]);
  
  }

  async function addTransactions(record){

    // Bring data from the function
    // Insert new data in the array and keep old data to it
    console.log(record)
    setTransaction(record);

    await items.add({

      record

    })

  }
 

  
  return (
    <>
      <Header open={SideBarOpen}/>
      <SideBar status={open}/>
      <Routes>
        <Route exact path='/' element={<Dashboard accounts={dayBudget} addTransaction={addTransactions} transactions={allTransactions} />}/>
        <Route exact path='/transaction' element={<Transaction accounts={dayBudget} transactions={allTransactions}/>}/>
        <Route exact path='/account' element={<Account transactions={allTransactions} accounts={dayBudget} onSubmit={addAccounts}/>}/>
      </Routes>
    </>
  )
}

export default App;







// Bugs section
// Dropdown actions also the new account popup