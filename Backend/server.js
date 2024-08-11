import express from 'express';
import axios from 'axios';
    

const API = 'https://66b613d4b5ae2d11eb65d19c.mockapi.io/UserPass';
const app = express();

app.use((req ,res , next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type, Accept')
    next();

})

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error fetching data');
    }
});

app.listen(5000, () => {
    console.log("Server started successfully on port 5000!");
});
