const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)
// routes.get('/users', (request, response)=> {
//     console.log(request.query )
//     return response.json({ message: 'Hello OmniStack abc' });
// });
// routes.post('/users', (request, response)=> {
//     console.log(request.body)
//     return response.json({ message: 'Hello OmniStack abc' });
// });
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:id', DevController.update);
routes.get('/search', SearchController.index);
routes.delete('/delete/:id', DevController.destroy);

module.exports = routes;