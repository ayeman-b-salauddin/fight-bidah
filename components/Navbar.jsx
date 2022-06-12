import React, { useEffect, useState } from "react";

import AiDrawer from '@aiui/ai-drawer';


function Navbar() {
  const [opened, setOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState()
  const topics = ["Topic 1" , "Topic 1" , "Topic 1", "Topic 1","Topic 1"]
  useEffect(() => {
    if(window.innerWidth < 600){
      setIsMobile(true)
    }
    setReady(true)
  }, [])
  
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <nav className="bg-white px-6 relative shadow-md">
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="font-semibold text-3xl text-gray-500">fight-bidah</h3>
            <div className="group flex flex-col items-center">
              <button className="p-2 rounded-lg md:hidden" onClick={() => setOpened(true)}>
                    <span onClick={() => setOpened(true)} className="material-symbols-outlined text-3xl">
                        menu
                    </span>
              </button>
              <div className={`hidden md:block  ${ opened ?  "group-hover:block" : ""}   bg-white inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600`}>
                <div className="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
              
                  <button
                    className="px-6 py-1 flex flex-col md:flex-row md:items-center space-x-3"
                    onClick={() => setOpened(true)}
                  >
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                    <p classNameName="ml-3">Click to see topics</p> 
                  </button>
                </div>


                { ready && <AiDrawer anchor={"right"}  width={isMobile ? 280 : 400} opened={opened}>
                  <button onClick={() => setOpened(false)}>
                  <span className="material-symbols-outlined absolute left-4 top-2 text-4xl">
                      close
                  </span>
                  <div className=" mt-24 flex flex-col items-center justify-center w-full space-y-5">
                      {topics.map(topic =>(
                        <>
                          <div className=" text-center text-white font-light text-3xl bg-slate-800 px-24 md:ml-5 ml-3 rounded-full py-1 ">topic</div>
                        </>
                      ))}
                  </div>

                  </button>
                </AiDrawer>}

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
