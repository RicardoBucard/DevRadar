const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        //sempre usado quando é trabalho com geolocalização, eixo x e y
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);