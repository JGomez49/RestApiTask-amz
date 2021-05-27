//Este modulo es eso la configuracion del servidor express (app)

import express from 'express'
import tasksRoutes from './routes/tasks.routes'

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res)=>{
    res.json({
        message: "Welcome to the jungle baby!"
    });
});

app.use('/api',tasksRoutes)

export default app;