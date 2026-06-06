const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.json({
        sistema: 'Sistema Distribuido',
        status: 'ONLINE',
        servicos: [
            '/cnpj/{cnpj}',
            '/cep/{cep}'
        ]
    });
});

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Sistema rodando na porta ${PORT}`);
});