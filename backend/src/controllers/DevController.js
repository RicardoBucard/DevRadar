const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/ParseStringAsArray');

module.exports = {
    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async destroy (request, response){
        const { id } = request.params;

        await Dev.findByIdAndDelete(id);

        return response.json({message: `user ${id} removed`});
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            //o map percorre um array e, para cada elemento do array, ele faz algo. neste caso ele está eliminando espaço
            const techsArray = parseStringAsArray(techs);

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            //se name não existir, pega o valor de login

            const { name = login, avatar_url, bio, username } = apiResponse.data;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            console.log(location);
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }


        return response.json(dev);
    },

    async update(request, response) {
        const { id } = request.params;
        
        const data = request.body;

        if (data.techs) {
            data.techs = parseStringAsArray(data.techs);
        }
        
        //o último parâmetro retorna o usuário após a atualização
        const dev = await Dev.findByIdAndUpdate(id, data, { new: true });

        return response.json(dev);
    }
}