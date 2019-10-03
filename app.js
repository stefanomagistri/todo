import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js'; 
// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


//Server Runnin 
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});