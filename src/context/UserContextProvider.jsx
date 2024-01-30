import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    
  
  
    const [field,setfield]=React.useState(null)
    const [place,setPlace]=React.useState(null)
    const [Comp,setComp]=React.useState(null)
    
    return(
        <UserContext.Provider value={{field,setfield,place,setPlace,Comp,setComp}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;