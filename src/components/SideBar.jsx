import React from 'react'

function SideBar(props) {


  return (
    
      <div className={` bg-beige flex-1 duration-400 relative md:block md:left-0 md:fixed md:overflow-y-auto md:min-w-[15%] md:min-h-screen ${props.status ? 'h-full' : 'hidden h-0'}`} >

          <div className='max-w-6xl pb-10 m-auto flex flex-col text-red-brown md:pb-0'>

            
            <a href="/">
              <div id='dashboard' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-14 flex self-center place-content-around min-w-full md:cursor-pointer'>
                  
                  <div className=''>
                  <i className="fa-solid fa-house text-4xl"></i>
                  </div>
                  <p className='font-bold'>Dashboard</p>

              </div>
            </a>
            <a href="/transaction">
              <div id='transaction' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-14 flex self-center place-content-around min-w-full md:cursor-pointer'>
                  
                  <div className=''>
                    <i className="fa-solid fa-file text-4xl"></i>
                  </div>
                  <p className='font-bold'>Transactions</p>

              </div>
            </a>
            <a href="/account">
            <div id='accounts' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-14 flex self-center place-content-around min-w-full md:cursor-pointer'>
                
                <div className=''>
                <i className="fa-solid fa-credit-card text-4xl"></i>
                </div>
                <p className='font-bold'>Accounts</p>

            </div>
            </a>

            <div id='reports' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-14 flex self-center place-content-around min-w-full md:cursor-pointer'>
                
                <div className=''>
                  <i className="fa-solid fa-chart-line text-4xl"></i>
                </div>
                <p className='font-bold'>Reports</p>

            </div>

            <div id='settings' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-14 flex self-center place-content-around min-w-full md:cursor-pointer'>
                
                <div className=''>
                <i className="fa-solid fa-gear text-4xl"></i>
                </div>
                <p className='font-bold'>Settings</p>

            </div>

            <div id='exit' className='hover:bg-red-sepia hover:rounded-r-3xl hover:py-2 hover:transition-bg-red-sepia duration-100 mt-24 flex self-center place-content-around min-w-full md:cursor-pointer'>
                
                <div className=''>
                  <i className="fa-solid fa-right-from-bracket text-4xl"></i>
                </div>

                <p className='font-bold'>Logout</p>

            </div>
            
            
            

          </div>

        

      </div>
    
  )
}

export { SideBar };