// to be able to use import express instead of require express, we need to add (  "type": "module",) on pacjage.json
import express from 'express';

// This allows us to take in incoming post request bodies...
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

// initialize express application
const app = express();
// specificy port for our application
const PORT = 5555;

// initialize bodyparser middleware
app.use(bodyParser.json());

// use routes from routes folder
app.use('/users', usersRoutes)


// create routes
app.get('/', (req, res) => {
  res.send('hello from homepage')
})

// make app listen for incoming requests, we specify the port we want to listen on.. and create function we want to execute once we run this server
app.listen(PORT, () => console.log(`Server runnin on port: http//localhost:${PORT}`));

