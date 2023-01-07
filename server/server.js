const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(cors());

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "What is react",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
    res.json({
        data: response.data
    })
  });
  
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
})