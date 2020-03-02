const express = require('express');

const MoviesService = require('../services/movies')

//const {moviesMock} = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async (req,res,next)=>{
        try {
            const {tags} = req.query
            const movies = await moviesService.getMovies({tags});
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (error) {
            next(error);
        }
    }),
    router.get('/:movieId', async (req,res,next)=>{
        try {
            const movieId= req.params.movieId
        //throw new Error("Error al obtener la pelicula")
            console.log("##movieId##: ", movieId)
            const movie = await moviesService.getMovie(movieId);
            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })
        } catch (error) {
            next(error);
        }
    }),
    router.post('/', async (req,res,next)=>{
        const {body: movie} = req;
        try {
            //console.log("POST Movie with Data: ",JSON.stringify({movie}));
            const createMovieId = await moviesService.createMovie({movie});
            res.status(201).json({ 
                data: createMovieId,
                message: 'movie created'
            })
        } catch (error) {
            console.error("Error del parseo: ",movie)
            next(error);
        }
    }),
    router.put('/:movieId', async (req,res,next)=>{
        try {
            const {body: movie} = req;
            const {movieId} = req.params;
            //console.log("Movie: "+JSON.stringify({movie})+"movieId: "+movieId)
            const updatedMovieId = await moviesService.updateMovie({movieId}, {movie});
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        } catch (error) {
            next(error);
        }
    }),
    router.delete('/:movieId', async (req,res,next)=>{
        try {
            const {movieId} = req.params;
            const deletedMovieId = await moviesService.deleteMovie({movieId});
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;