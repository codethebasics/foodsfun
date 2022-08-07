const AppContext = require('../../src/context/state')

const appContext = AppContext.useAppContext()

const setOrderTotal = total => {
   appContext.setTotal(total)
}

export { setOrderTotal }
