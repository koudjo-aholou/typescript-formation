import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// app.get('/api/data/posts/:id', (req, res) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
//   .then(response => response.json())
//     .then(data => res.json(data))
//     .catch(error => {
//       console.error('Erreur lors de l\'envoi de la requête :', error);
//       res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//     });
// });

// app.post('/api/data/posts', (req, res) => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(req.body),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then(data => res.json(data))
//     .catch(error => {
//       console.error('Erreur lors de l\'envoi de la requête :', error);
//       res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//     });
// });

// app.patch('/api/data/posts/:id', (req, res) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`,{
//     method: 'PATCH',
//     body: JSON.stringify(req.body),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((response) => response.json())
//     .then(data => res.json(data))
//     .catch(error => {
//       console.error('Erreur lors de l\'envoi de la requête :', error);
//       res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//     });
// });

// app.delete('/api/data/posts/:id', (req, res) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
//     method: 'DELETE',
//   })
//   .then(() =>  res.sendStatus(204))
//   .catch(error => {
//     console.error('Erreur lors de l\'envoi de la requête :', error);
//     res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//   });
  
// });

// //Prochain dev :

// app.get('/api/data/user', (req, res) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//       .then(data => res.json(data))
//       .catch(error => {
//         console.error('Erreur lors de l\'envoi de la requête :', error);
//         res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//       });
//   });
