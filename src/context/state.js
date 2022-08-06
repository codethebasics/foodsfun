import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
   const [order, setOrder] = useState(null)
   const [total, setTotal] = useState(0)

   return (
      <AppContext.Provider value={{ order, setOrder, total, setTotal }}>
         {children}
      </AppContext.Provider>
   )
}

export function useAppContext() {
   return useContext(AppContext)
}
