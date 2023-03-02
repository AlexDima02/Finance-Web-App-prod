import React from 'react';
import { useState } from 'react';

const TotalBalance = (props) => {
    const [ filter, setFilter ] = useState([])
    let sum = 0;
    const account = props.accounts?.map(el => el.account);
    const transaction = props.transactions?.map(el => el.record);

    // Compar doua stive     
    const result = () => props.accounts?.map((acc) => {
        
        // Get the accounts equal to their transaction names
            let cont = null;
            const countTransactions = [];
            cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency, type: acc.account.type}
            props.transactions?.map((transc) => {
               
                if(acc.account.name == transc.record.from && acc.account.currency == transc.record.currency){
                    
    
                    const number = parseInt(transc.record.money);
                    countTransactions.push(number);
                    
                    cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency, type: acc.account.type};
                
    
                }
                
                
            })
            
            return cont;
    
        })
    
        const test = result();
        console.log(test)


    // Make the total of each array and keep the name of the account
    // We want to make the total budget / 30 days for each account and somehow arrive at an object 
    const daily = () => test?.filter((element) => element !== null).map((el) => {
        
        let cont = null;
        cont = {name: el.name, total: el.total, budget: el.budget, day: Math.ceil(el.budget / 30), currency: el.currency, type: el.type}
        return cont;

    })
      

    const dayBudget = daily();
    console.log(dayBudget)
        
    // Scade pentru fiecare suma cont fiecare suma din tranzactie egala cu acel cont
    // Impinge rezultatul intr-un array care pastreaza doar ultima varianta ca sa nu se copie itemi duplicati  
    
    

    // Calculate total sum of money from all the accounts in USD
    const totalBalanceUSD = (sum) => {
        
        dayBudget?.filter(el => el.currency == 'USD').map((el) => {

                let money = parseInt(el.budget);
                sum += money;
        })
        
        return sum;
        
    }

    // Calculate total sum of money from all the accounts in EUR
    const totalBalanceEUR = (sum) => {
        
        dayBudget?.filter(el => el.currency == 'EUR').map((el) => {

                let money = parseInt(el.budget);
                sum += money;
        })
        
        return sum;
        
    }

  

    return (
        <div className='h-auto bg-white rounded-xl p-7 font-bold text-grey-letter'>
           <div className='font-bold text-lg w-full'>
                
                <h1 className='font-bold text-xl pb-4'>Total Balance</h1>
                <div className='flex justify-between w-1/2'>
                    <span id="USD" className='text-lg text-green-light pr-10'>{totalBalanceUSD(sum)}USD</span>
                    <span id="EUR" className='text-lg text-green-light'>{totalBalanceEUR(sum)}EUR</span>
                </div>
            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl font-bold'>Bank account</h1>
               
                {dayBudget?.filter(el => el.type == 'Bank Account').map((el) => {
                    // If el.name == el.from
                    // Return same thing but subtracting values 
                    // Else return usual data
                    
                    return(

                        <div className='flex place-content-between mt-4'>
                        
                            <p className='text-lg'>{el.name}</p>
                            <span className='text-lg text-green-light'>{el.budget + el.currency}</span>
                            
                        </div> 

                    )

                })}
                    
                    


                
                

            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl font-bold'>Cards</h1>
                {dayBudget?.filter(el => el.type == 'Card').map((el) => {

                    return(
                    
                        <div className='flex place-content-between mt-4'>
                        
                            <p className='text-lg'>{el.name}</p>
                            <span className='text-lg text-green-light'>{el.budget + el.currency}</span>
                            
                        </div> 

                    )

                })}

            </div> 



        </div>
    )
}

export {TotalBalance};