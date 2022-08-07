const listItems = async () => {
   return await fetch('http://localhost:3000/api/items', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }).then(response => response.json())
}

export { listItems }
