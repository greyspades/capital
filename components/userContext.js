import React, {useState,createContext} from 'react';

export const UserContext=createContext()

const UseContext=(props)=>{
    const [main,setmain]=useState()
    return (
        <div>
        <UserContext.Provider value={[main,setmain]}>
            {props.children}
        </UserContext.Provider>
        </div>
    )
}
export default UseContext