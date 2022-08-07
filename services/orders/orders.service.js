const list = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_ROOT}/api/orders`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }).then(response => response.json())
}

const save = async order => {
   console.log('saving order', order)
}

export { list }
