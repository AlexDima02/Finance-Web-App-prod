import React from 'react';
import { useState } from 'react';

const TotalBalance = (props) => {
    
    let sum = 0;
    const account = props.accounts?.map(el => el.account);
    const transaction = props.transactions?.map(el => el.record);

    
    // Scade pentru fiecare suma cont fiecare suma din tranzactie egala cu acel cont
    // Impinge rezultatul intr-un array care pastreaza doar ultima varianta ca sa nu se copie itemi duplicati  
    
    

    // Calculate total sum of money from all the accounts in USD
    const totalBalanceUSD = (sum) => {
        
        props.accounts?.filter(el => el.currency == 'USD').map((el) => {

                let money = parseInt(el.budget);
                sum += money;
        })
        
        return sum;
        
    }

    // Calculate total sum of money from all the accounts in EUR
    const totalBalanceEUR = (sum) => {
        
        props.accounts?.filter(el => el.currency == 'EUR').map((el) => {

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
               
                {props.accounts?.filter(el => el.type == 'Bank Account').map((el) => {
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
                {props.accounts?.filter(el => el.type == 'Card').map((el) => {

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