import React, { useState, useEffect } from 'react'
import RequestPageIcon from '@mui/icons-material/RequestPage';
import db from '../Database/db';

function ModifierMenu(props) {
    
    console.log(props.currency)
    console.log(props.data)


   // State 
   const [ changedProperties, setChangedProperties ] = useState({

        currency: props.currency,
        date: props.date,
        from: props.from,
        money: props.money,
        name: props.name

   })

   console.log(changedProperties.from)
   const handleChangeDate = (e) => {

        setChangedProperties({...changedProperties, date: e.target.value})

   } 

   const handleChangeFrom = (e) => {

        let array = [...e.target.value];
        let currency = array.filter((item, index, array) => index > array.indexOf(',')).join('');
        console.log(currency)
        let name = array.filter((item, index, array) => index < array.indexOf(',')).join('');
        console.log(name)

        setChangedProperties({ ...changedProperties, from: name, currency: currency });

   } 
   
   const handleChangeMoney = (e) => {

        setChangedProperties({...changedProperties, money: e.target.value})

   } 

   const handleChangeName = (e) => {

        setChangedProperties({...changedProperties, name: e.target.value})

   } 

    
   // Change the transaction parameters
    const handleChange = (e, param) => {
    
        e.preventDefault();
        if(param){

            db.items.update(param, {

                "record.name": changedProperties.name,
                "record.date": changedProperties.date,
                "record.from": changedProperties.from,
                "record.money": changedProperties.money,
                "record.currency": changedProperties.currency
    
    
            }).then((data) => {
                
                console.log(data, `${data} Updated`);
    
            })

        }
        
    }

    return (
        <div className='text-grey-letter'>
            <div className='rounded-xl'>
                <div className='border p-5 bg-slate-100 shadow-sm z-10'>
                   
                    <div id='name' className='flex place-content-between'>
                        <div className='flex align-baseline justify-start'>
                            <RequestPageIcon className='mr-5 cursor-pointer' sx={{ fontSize: 35 }}/>
                            <h1 className='text-lg'>Edit Transaction</h1>
                        </div>
                        <button onClick={() => props.status()} className='border rounded-lg px-2'>X</button>
                    </div>
                    <div id='from' className='flex flex-col mt-10'>
                        <label htmlFor="name">From</label>
                        <select className='border-2 border-slate-200 px-4' value='' onChange={(e) => handleChangeFrom(e)}  name='name'>
                                
                            <option value=''>Please choose the owner!</option>
                            {props.data?.map((el, index) => (
                                
                               
                                <option key={index} value={[el.name, el.currency]}>{el.name}&nbsp;&nbsp;&nbsp;{el.currency}</option>

                            ))}
                                
                        </select>


                    </div>
                    <div id='currency' className='flex flex-col mt-10'>

                        <span className='absolute right-5 bottom-[53.3%] z-10 bg-slate-300 px-3 text-grey-letter' id='currency'>{changedProperties.currency}</span>
                        <input min={0} onChange={(e) => handleChangeMoney(e)} className='relative px-3 mt-2 border-3 border-slate-200' type="number" defaultValue={props.money}/>

                    </div>
                    <div id='name' className='flex flex-col mt-10'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Tag</label>
                            <input onChange={(e) => handleChangeName(e)} className='border-2 border-slate-200 px-4' type="text" defaultValue={props.name}/>
                        </div>
                        <div className='flex flex-col align-start mt-5'>

                            <input onChange={(e) => handleChangeDate(e)} type="date" className='border-2 border-slate-200 px-4' defaultValue={props.date}/>

                        </div>
                        
                    </div>
                    <button type='submit' id='change-data' className='text-white cursor-pointer hover:bg-red-400 bg-red-brown mt-10 rounded-lg w-full py-2' onClick={(e) => handleChange(e, props.verify)}>Save</button>
                </div>  
            </div>
        </div>
    )
}



export { ModifierMenu };