export default function handler(req, res) {
   switch (req.method) {
      case 'GET':
         res.status(200).json([
            {
               id: 1,
               clientId: 1,
               userId: 1,
               items: []
            }
         ])
         break
      case 'POST':
         const order = req.body
         if (order) {
            res.status(200).json({ message: 'Order submitted', order: order })
         } else {
            res.status(400).json({ message: 'Order must be sent' })
         }
         break
      default:
         res.status(400).json({ message: 'Method not allowed' })
   }
}
