import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import taskRoutes from './routes/taskRoutes.js'
// import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/tasks', taskRoutes);
// app.use('/api/auth', userRoutes);



const PORT = process.env.PORT || 3000
app.listen(PORT  , () => {
    console.log(`Server is running on port ${PORT}`);
})



