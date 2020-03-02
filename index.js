const express = require('express');
const app = express();
const { config } = require('./config/index')

const moviesApi = require('./routes/movies');
const { logErrors,errorHandler} = require('./utils/middleware/errorHandlers')
//body parser
app.use(express.json());
//logsError()
moviesApi(app);

//Use custom middleware for errors handling
app.use(logErrors);
app.use(errorHandler);


app.listen(config.port, () => {
    console.log('Listening on port: ', config.port);
})