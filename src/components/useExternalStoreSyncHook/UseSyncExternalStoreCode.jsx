export default function UseSyncExternalStoreCode(){
    const code = `
useSyncExternalStore Hook:
--------------------------
useSyncExternalStore is used to connect React to external data 
sources and keep the UI synchronized safely.

Example:

Browser window size
Internet online/offline status
Data coming from a WebSocket
Global state libraries

code:
-----
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

`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
