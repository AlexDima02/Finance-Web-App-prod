import React from 'react'

function CreditAccountsHeadline({account}) {

  const countCreditAccounts = account.filter((item) => item.type === 'Card').length;
  if(countCreditAccounts > 0){
    return (
      <div className='bg-red-brown w-full py-3 px-4'>
          <h1>Credit</h1>
      </div>
    )
  }
}

export default CreditAccountsHeadline;