/**
 *
 * List orders
 *
 */
const list = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_ROOT}/api/orders`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }).then(response => response.json())
}

/**
 *
 * Submit order
 *
 */
const save = async order => {
   const orderRequest = {
      id: 1,
      metadata: 'metadata',
      items: order
   }
   return await fetch(`${process.env.NEXT_PUBLIC_ROOT}/api/orders`, {
      method: 'POST',
      body: JSON.stringify(orderRequest),
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }).then(response => response.json())
}

export { list, save }
