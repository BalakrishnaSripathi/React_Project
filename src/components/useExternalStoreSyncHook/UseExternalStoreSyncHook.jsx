import React, { useSyncExternalStore } from 'react'

const UseExternalStoreSyncHook = () => {
    function subscribe(callback){
        window.addEventListener('resize',callback);
        return ()=>window.removeEventListener('resize',callback)

    }
    function getSnapshot(){
        return window.innerWidth;
    }
    function getSnapshots(){
        return window.innerHeight;
    }
    const screenHeight=useSyncExternalStore(subscribe,getSnapshots)
    const screenWidth=useSyncExternalStore(subscribe,getSnapshot)
  return (
    <div>
      <h1>screen height:{screenHeight}</h1>
      <h1>Srcreen width:{screenWidth}</h1>
    </div>
  )
}

export default UseExternalStoreSyncHook
