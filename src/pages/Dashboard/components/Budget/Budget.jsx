import { useEffect, useState } from "react";
import React from 'react';


const Budget = (props) => {
   
    
    // Cat mi-a ramas dupa ce am facut buget pe o zi - total = rezultat returnat ziua urmatoare
    // function calculateBudget(){

    //     dayBudget?.forEach((budget) => {
    //         if(budget.total > budget.day){

                


    //         }else if(budget.total < budget.budget){

               


    //         }
    //     });


    // }
        
    // Daca totalul tranzactiilor depaseste cat cheltuim intr-o zi total > budget    
        // Bugetul zilnic va fi calculat pentru urmatoarea zi, insemanand ca se va schimba dupa ce va trece ziua curenta
        // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
        // Daca totalul mai mic decat cheltuiala pe zi total < budget
            // Total tranzactii din ziua curenta va fi scazut din cat ar trebui sa cheltuim pe zi(static) si si adunat cu cat cheltuim in mod normal ziua urmatoare (rezultat afisat urmatoarea zi)
            // Creat un nou array pt ziua urmatoare
        
    

    return (

        <div className="h-auto bg-white rounded-xl p-7 font-bold text-grey-letter">
            <div>
                <h1 className='font-bold text-xl pb-4'>NET WORTH:</h1>
                <div>
                    {props.accounts?.map((budget, index) => {
                            
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
// Selecteaza o valoare implicita la select dropdrown atunci cand vrem sa adaugam o tranzactie vezi AddExpenses

