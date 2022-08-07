export default function handler(req, res) {
   if (req.method === 'GET') {
      res.status(200).json([
         {
            id: 1,
            name: 'Hamburger simples',
            image: 'https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-piso-escuro_140725-89524.jpg?w=2000',
            price: 16.0,
            description:
               'Burger Angus (160g), queijo prato, molho Fanis, maiosese e pão brioche'
         },
         {
            id: 2,
            name: 'Pizza',
            image: 'https://diaadianoticia.com.br/wp-content/uploads/2022/07/pizza-site-or.jpg',
            price: 20.0,
            description: 'Peperonni, pimentão, queijo e molho de tomate'
         },
         {
            id: 3,
            name: 'Pastel',
            image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/11/Pastel_feiraaoo.jpg',
            price: 5.0,
            description: 'Carne, queijo, frango c/ catupiry'
         }
      ])
   } else {
      res.status(400).json({ message: 'Method not allowed' })
   }
}
