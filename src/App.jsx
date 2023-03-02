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

 
  const [filter, setFilter] = useState([]);

  // Create database and follow each change inside of it
  const { data, items } = db;
  // Dexie hook - watch for changes in the database
  const allAccounts = useLiveQuery(() => data.toArray(), []);
  const allTransactions = useLiveQuery(() => items.toArray(), []);
  
  

  // If every from from the transaction is equal to every name from the accounts object
  // Subtract from the ammounts property of each account that contains the same name as the transaction, money property
  // Return the result and pass it as a prop to the accounts in Dashboard and Account components
  

  // What i want to do:
  // Vreau sa verific daca doua stive au date care corespund
  // Daca corespund mai precis name = from
  // Returneaza true daca nu false
  // Aceste valori o sa le folosesc in Total Balance unde o sa map prin accounts si daca if este true 
  // Returneaza acele conturi care au prorpeitatii egale cu tranzactiile doar ca fac diferenta la rezultat
  // Acolo unde este false afiseaza datele fara a face calculele --> JS nu afiseaza datele in functie de true sau false chiar daca este true
  
  
  // If those two are true
  // Case edge:
  // Subtract accounts money with transaction money
  // Return the values into a new array --> Result js dont know to which container to add the values

  // Implementation
  // Take our new array with sums and map through it to put them in the right component 
  

 
  
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
        <Route exact path='/' element={<Dashboard accounts={allAccounts} addTransaction={addTransactions} transactions={allTransactions} />}/>
        <Route exact path='/transaction' element={<Transaction transactions={allTransactions}/>}/>
        <Route exact path='/account' element={<Account accounts={allAccounts} onSubmit={addAccounts}/>}/>
      </Routes>
    </>
  )
}

export default App;







// Bugs section
// Dropdown actions also the new account popup