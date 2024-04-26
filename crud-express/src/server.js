const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const postController = require('./post/controller/postController');

// Middleware pour parser le JSON
app.use(express.json());

app.use('/api/data', postController);

// Routes CRUD
// app.get('/api/data/posts', (req, res) => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//     .then(data => res.json(data))
//     .catch(error => {
//       console.error('Erreur lors de l\'envoi de la requête :', error);
//       res.status(500).json({ message: 'Erreur lors de l\'envoi de la requête' });
//     });
// });

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
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});