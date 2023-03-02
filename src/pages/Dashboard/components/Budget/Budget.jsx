import { useEffect, useState } from "react";
import React from 'react';


const Budget = (props) => {
   
    
    

        

   

   

   const result = () => props.accounts?.map((acc) => {
        
    // Get the accounts equal to their transaction names
        let cont = null;
        const countTransactions = [];
        cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency};
        props.transactions?.map((transc) => {
           
            if(acc.account.name == transc.record.from && acc.account.currency == transc.record.currency){
                

                const number = parseInt(transc.record.money);
                countTransactions.push(number);
                
                cont = {total: countTransactions.reduce((total,current) => total + current, 0), name: acc.account.name, budget: acc.account.ammounts - countTransactions.reduce((total,current) => total + current, 0), currency: acc.account.currency};
            

            }
            

        })
        
        return cont;

    })

    const account = result();
    console.log(account)

    // Make the total of each array and keep the name of the account
    // We want to make the total budget / 30 days for each account and somehow arrive at an object 
    const daily = () => account?.filter((element) => element !== null).map((el) => {
        
        let cont = null;
        cont = {name: el.name, total: el.total, budget: el.budget, day: Math.ceil(el.budget / 30), currency: el.currency}
        return cont;

    })
      

    const dayBudget = daily();
    console.log(dayBudget);

    // Cat mi-a ramas dupa ce am facut buget pe o zi - total = rezultat returnat ziua urmatoare
    function calculateBudget(){

        dayBudget?.forEach((budget) => {
            if(budget.total > budget.day){

                


            }else if(budget.total < budget.budget){

               


            }
        });


    }
        // Daca totalul tranzactiilor depaseste cat cheltuim intr-o zi total > budget
            // Bugetul zilnic va fi calculat pentru urmatoarea zi, insemanand ca se va schimba dupa ce va trece ziua curenta
            // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
        // Daca totalul mai mic decat cheltuiala pe zi total < budget
            // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
            // Creat un nou array pt ziua urmatoare
        
    // calculateBudget();

    return (

        <div className="h-auto bg-white rounded-xl p-7 font-bold text-grey-letter">
            <div>
                <h1 className='font-bold text-xl pb-4'>Set limit of budget:</h1>
                <div>
                    {dayBudget?.map((budget, index) => {
                            {console.log(budget)}
                            return (
                                <div key={index} className="border border-t-2 pr-4 pl-4 py-5">
                                    <div className="flex flex-col w-1/2 justify-between pt-5">
                                        <div className="font-bold text-lg">{budget.name}</div>
                                        <span className="text-green-light text-lg">{budget.budget}{budget.currency}<span>/Monthly</span></span>
                                    </div>
                                    <div className='pt-5'>
                                    <h1 className='font-bold text-lg'>Next time you can spend:</h1>
                                    <div className='text-green-light text-lg'>
                                        <span>{budget.day}{budget.currency}</span>
                                    </div>
                                    </div>
                                </div>
                            
                            )
                    })}
                </div>
            </div>



        </div>


    );


}

export {Budget}


// Ce am nevoie pentru buget

// Suma intreaga din fiecare cont (budget)
// Numele detinatorului de cont (name)
// Total tranzactii pt fiecare cont (total)
// Suma intreaga din fiecare cont / 30 zile (budget / 30 zile = buget pe o zi)
// Cat mi-a ramas dupa ce am facut buget pe o zi - total = rezultat returnat ziua urmatoare 

// Functionalitate
// Daca toate tranzactiile === cu nume cont
    // Returneaza suma tuturor tranzactiilor cu acel nume --> array
// Suma fiecarui cont reprezentata lunar --> este imparatita la 30 de zile --> Cat cheltuim in fiecare zi
    // Rezultatul este suma intreaga din fiecare cont / 30 zile care este fixa (dailyBudget)

// Cat mi-a ramas dupa ce am facut buget pe o zi - total = rezultat returnat ziua urmatoare
// Daca totalul tranzactiilor depaseste cat cheltuim intr-o zi total > budget
    // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
// Daca totalul mai mic decat cheltuiala pe zi total < budget
    // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
    // Creat un nou array pt ziua urmatoare


// Probleme 
// Rezolva schimbarea simbolului monedei in functie de tranzactie vezi Transaction
// Rezolva la parametrul "from" valoarea default vezi ModifierMenu
    // Nu apare la option atunci cand iteram prin tranzactiile deja facute
// Vezi Accounts, oriunde apas apare modular popup
