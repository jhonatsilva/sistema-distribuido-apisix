# Sistema Distribuído para Consulta de CNPJ e CEP

## 📋 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aplicar conceitos de **Sistemas Distribuídos**, utilizando uma arquitetura baseada em **microsserviços**, containers Docker e um **API Gateway** para gerenciamento das requisições.

A aplicação disponibiliza serviços para consulta de:

* CNPJ (através da BrasilAPI)
* CEP (através da ViaCEP)

Os serviços podem ser executados localmente utilizando Docker Compose e Apache APISIX, ou acessados diretamente pela versão publicada em nuvem através da plataforma Railway.

---

## 🏗️ Arquitetura

```text
Cliente
   │
   ▼
API Gateway (Apache APISIX)
   │
   ├──► cnpj-service ───► BrasilAPI
   │
   └──► cep-service ─────► ViaCEP
```

### Componentes

* API Gateway: Apache APISIX
* Banco de Configuração: ETCD
* Microsserviço de Consulta de CNPJ
* Microsserviço de Consulta de CEP
* Containers Docker
* Deploy em Nuvem (Railway)

---

## 🚀 Tecnologias Utilizadas

### Backend

* Node.js
* Express.js
* Axios

### Containers

* Docker
* Docker Compose

### API Gateway

* Apache APISIX
* ETCD

### Controle de Versão

* Git
* GitHub

### Cloud

* Railway

### APIs Externas

* BrasilAPI
* ViaCEP

---

## 📂 Estrutura do Projeto

```text
sistema-distribuido-apisix/

├── cnpj-service/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── cep-service/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── apisix/
│
├── docker-compose.yml
│
└── README.md
```

---

# 🔧 Execução Local

## Pré-requisitos

* Docker Desktop
* Docker Compose
* Git

---

## 1. Clonar o repositório

```bash
git clone https://github.com/jhonatsilva/sistema-distribuido-apisix.git

cd sistema-distribuido-apisix
```

---

## 2. Subir os containers

```bash
docker compose up -d
```

Verificar containers:

```bash
docker ps
```

---

## 3. Verificar logs

### Serviço CNPJ

```bash
docker compose logs cnpj-service
```

### Serviço CEP

```bash
docker compose logs cep-service
```

### APISIX

```bash
docker compose logs apisix
```

---

## 4. Testar os microsserviços

### Consulta de CNPJ

```bash
curl http://localhost/cnpj/19131243000197
```

ou

```powershell
curl.exe http://localhost/cnpj/19131243000197
```

---

### Consulta de CEP

```bash
curl http://localhost/cep/81320250
```

ou

```powershell
curl.exe http://localhost/cep/81320250
```

---

# ☁️ Execução em Nuvem (Railway)

A aplicação está publicada no Railway e pode ser acessada pela internet sem necessidade de executar containers localmente.

## URL Base

```text
https://sistema-distribuido-apisix-production.up.railway.app
```

---

## Teste de Consulta de CNPJ

```powershell
curl.exe https://sistema-distribuido-apisix-production.up.railway.app/cnpj/19131243000197
```

Exemplo de retorno:

```json
{
  "cnpj": "19131243000197",
  "razao_social": "...",
  "nome_fantasia": "...",
  "situacao_cadastral": "ATIVA"
}
```

---

## Teste de Consulta de CEP

```powershell
curl.exe https://sistema-distribuido-apisix-production.up.railway.app/cep/81320250
```

Exemplo de retorno:

```json
{
  "cep": "81320-250",
  "logradouro": "...",
  "bairro": "...",
  "localidade": "...",
  "uf": "PR"
}
```

---

# 📡 Endpoints Disponíveis

| Método | Endpoint     | Descrição                       |
| ------ | ------------ | ------------------------------- |
| GET    | /cnpj/{cnpj} | Consulta informações de um CNPJ |
| GET    | /cep/{cep}   | Consulta informações de um CEP  |

### Exemplos

```text
/cnpj/19131243000197
```

```text
/cep/81320250
```

---

# 🔄 Fluxo de Deploy

1. Desenvolvimento local
2. Commit no GitHub
3. Push para o repositório remoto
4. Integração GitHub + Railway
5. Deploy automático

---

# ✅ Benefícios da Solução

* Arquitetura distribuída
* Microsserviços independentes
* Baixo acoplamento
* Facilidade de manutenção
* Escalabilidade horizontal
* API Gateway centralizado
* Integração com APIs externas
* Deploy automatizado em nuvem

---

# 📄 Resumo

Projeto desenvolvido para a disciplina de Sistemas Distribuídos, demonstrando a aplicação prática de:

* Microsserviços
* Docker
* API Gateway
* Integração com APIs externas
* Deploy em nuvem pública

---

# 👨‍💻 Alunos

* Brayan Cordeiro Rolim
* Gabriela Pedroso dos Santos Pontes
* Jhonathan Inacio da Silva
* Michelle Andrea Bornes Noriega
