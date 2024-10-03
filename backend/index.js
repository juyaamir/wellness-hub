import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT;
const app = express();
app.use(cors({ origin: "*"}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})