import express from 'express';
import router from './routes/match.route.js';
import cors from 'cors';


const app = express();
app.use(express.json(), cors());

app.use("/api", router)

const port = 8000;


app.listen(port, () => {console.log(`Listening on port: ${port}`)})