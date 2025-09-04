import React, { useState } from 'react'
import LoginContext from './LoginContext'

function LoginContextProvider({children}) {
    const [login,setLogin]=useState(false)
  return (
    <div>
        <LoginContext.Provider value={[login,setLogin]}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}

export default LoginContextProvider