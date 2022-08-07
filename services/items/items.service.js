const listItems = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_ROOT}/api/items`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }).then(response => response.json())
}

export { listItems }
