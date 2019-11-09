const callBirdApiRoutes = require("express").Router();
const {callBirdAPI} = require("../Controller/callEbirdApi");

callBirdApiRoutes.get('/call',callBirdAPI);

module.exports = {callBirdApiRoutes};