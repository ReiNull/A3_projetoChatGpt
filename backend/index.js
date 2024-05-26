// Configurando o Dotenv e pegando o valor da variável de ambiente
require("dotenv").config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// imprime a variável de ambiente
console.log(OPENAI_API_KEY)

// Configurando Express
const express = require("express");
const app = express();
// o formato de dados compartilhado entre as requisições HTTP será JSON
app.use(express.json()); 
app.listen(4000); // o backend será executado na porta 4000

// Configurando CORS
const cors = require("cors");
// aplicamos a segurança do cors para o objeto app, que representa a classe express
app.use(cors())
// dizemos para que o cors seja utilizado para requisições de todos os endereços
app.options('*',cors())

// Configurando OpenAI
const { OpenAI } = require("openai");
// cria o objeto da api validando o acesso com a nossa chave
const openai = new OpenAI(OPENAI_API_KEY);

// POST
app.post("/pergunte-ao-chatgpt", async (req, res) => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.body.prompt }],
      model: "gpt-3.5-turbo",
      max_tokens: 200,
    });
    console.log(completion);
    res.send(completion.choices[0].message.content);
  });
  