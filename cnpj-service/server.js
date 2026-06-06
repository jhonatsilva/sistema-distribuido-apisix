const express = require('express');
const axios = require('axios');

const app = express();

app.get('/cnpj/:cnpj', async (req, res) => {

    try {

        const resposta = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${req.params.cnpj}`
        );

        res.json(resposta.data);

    } catch (e) {

        res.status(404).json({
            erro: 'CNPJ não encontrado'
        });

    }

});

app.listen(3001, () => {
    console.log('CNPJ Service rodando na porta 3001');
});