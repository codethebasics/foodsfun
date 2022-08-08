export default function handler(req, res) {
   if (req.method === 'GET') {
      res.status(200).json([
         {
            id: 1,
            clientId: 1,
            userId: 1,
            items: []
         }
      ])
   } else {
      res.status(400).json({ message: 'Method not allowed' })
   }
}
