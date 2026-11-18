import { createContext, useState } from "react";
import React from 'react'

export const ToggleContext = createContext(null)

const ToggleProvider = ({children}) => {
    const [opened, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(!opened);
    }
  return (
    <ToggleContext.Provider value={{opened, toggleOpen}}>
        {children}
    </ToggleContext.Provider>
  )
}

export default ToggleProvider