const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Certifique-se de importar o pacote cors

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Adicione o middleware CORS

// Configurando o Nodemailer
const transporte = nodemailer.createTransport({
    service: 'localweb',
    auth: {
        user: 'informatica@crp-01.org.br',
        pass: 'CRP01@informatica'
    }
});

app.post('/enviar', (req, res) => {
    const formData = req.body;

    let email_options = {
        from: 'informatica@crp-01.org.br',
        to: 'estagiohercules@gmail.com',
        subject: 'Testes forms',
        text: JSON.stringify(formData, null, 2)
    }
    transporte.sendMail(email_options, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email enviado: ' + info.response);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
