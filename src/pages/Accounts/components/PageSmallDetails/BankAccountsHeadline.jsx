import React from 'react'

function BankAccountsHeadline({account}) {

    const countBankAccounts = account.filter((item) => item.type === 'Bank Account').length;
    if(countBankAccounts > 0){
      return (
        <div className='bg-red-brown w-full py-3 px-4'>
            <h1>Bank Accounts</h1>
        </div>
      )
    }
}

export default BankAccountsHeadline;