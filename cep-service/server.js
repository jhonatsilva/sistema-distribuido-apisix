const express = require('express');
const axios = require('axios');

const app = express();

app.get('/cep/:cep', async (req, res) => {

    try {

        const resposta = await axios.get(
            `https://viacep.com.br/ws/${req.params.cep}/json/`
        );

        res.json(resposta.data);

    } catch (erro) {

        res.status(500).json({
            erro: 'Erro ao consultar CEP'
        });

    }

});

app.listen(3002, () => {
    console.log('CEP Service rodando na porta 3002');
});