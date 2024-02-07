var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const apiKey = process.env.API_KEY;




const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR`;

router.get('/movies', (req, res) => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => res.json({ movies: data.results }));
   
});

module.exports = router;
