import React, { useEffect, useRef, useState } from 'react'
import { Transaction } from '../Transactions/Transaction'


const TransactionList = (props) => {
   
    console.log(props.data)
    let currentDate = new Date();
    console.log(currentDate)
    const [records, setRecords] = useState([]);
    console.log(records)
    const refferenceTrans = props.transactionRef;
    // Filter component states
   
    const [dateAll, setDateAll] = useState('');
    const [fromDate, setFromDate] = useState(currentDate);
    const [toDate, setToDate] = useState(currentDate);
   
    
    // Filter the data 
    // Filter component functionality
    const filterByDate = () => {
        
        if(new Date(toDate).toUTCString() !== new Date(fromDate).toUTCString()){

         
            let filteredData = props.data?.filter((item) =>

                new Date(item.record.date) >= new Date(toDate) &&
                new Date(item.record.date) <= new Date(fromDate)
        
            );

            filteredData = filteredData?.sort((a, b) => new Date(a.record?.date).getTime() - new Date(b.record?.date).getTime());
            setRecords(filteredData);
          
        }
        
        if(new Date(toDate).toUTCString() == new Date(fromDate).toUTCString()){
          
            console.log('Activ')
            let filteredData = props.data?.filter((item) =>
            
                new Date(item.record?.date) >= new Date() || new Date(item.record?.date) < new Date()
        
            );
            filteredData = filteredData?.sort((a, b) => new Date(a.record?.date).getTime() - new Date(b.record?.date).getTime())
            console.log(filteredData)
            setRecords(filteredData);

        }
        
         
    };

// Function of the filter component    
    useEffect(() => {
        
        filterByDate();
      
    }, [fromDate, toDate, props.data]);



    // Subtract days from the current day depanding on the option selected
    // Function of the filter component
    const getPastDate = (date) => {
    
        let newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - date);
        return newDate;
        
    };
    
// Function of the filter component
    const handleDateChange = (e) => {
        
    
        if(e.target.value){

            
            setFromDate(currentDate);
            setToDate(e.target.value);
           

        }
    
    };

   
  return (
    <div className='h-auto bg-white rounded-xl p-7 font-bold text-grey-letter text-lg md:grid md:col-span-2'>
        <div className='flex place-content-between mb-6'>
            <h1>Recent transactions</h1>
            <div>
                <select name='isAvailable' onChange={(e) => handleDateChange(e)} className='border-2 border-slate-200'>
                    <option value={getPastDate(0)}>All</option>
                    <option value={getPastDate(1)}>Today</option>
                    <option value={getPastDate(2)}>Yesterday</option>
                    <option value={getPastDate(7)}>Last 7 days</option>
                    <option value={getPastDate(30)}>This month</option>    
                </select>
            </div>

            

        </div>

        <div id='transactions' className='flex place-content-between flex-col'>

           
           
            {records ? records.map((item, index) => (
                    
                    <Transaction refference={refferenceTrans}
                    key={item.id}
                    money={item.record.money} 
                    date={item.record.date}
                    name={item.record.name}
                    currency={item.record.currency}
                    verify={item.id}
                    from={item.record.from}
                    allData={props.accounts}
                    allTransaction={records}/>


            )) :  props.data?.map((list) => {
                return <Transaction refference={refferenceTrans} 
                verify={list.id}
                money={list.record.money} 
                date={list.record.date}
                name={list.record.name}
                currency={list.record.currency} 
                from={list.record.from}
                allData={props.accounts}
                allTransaction={props.data}/>
            })  
            
            }
            
            
            
               


        </div>
        
       
    </div>
  )
}

export  {TransactionList}
