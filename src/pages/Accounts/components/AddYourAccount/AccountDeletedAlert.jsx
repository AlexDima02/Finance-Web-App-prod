import React from 'react'


function AccountDeletedAlert({deletionAccountStatus}) {
  return (
    <div className={`${deletionAccountStatus ? 'block' : 'hidden'} text-green-700 font-bold m-3 bg-green-200 px-5 py-2 rounded-lg`}>
        <p className='text-center'>Account deleted with all its transactions!</p>
    </div>
  )
}

export default AccountDeletedAlert;