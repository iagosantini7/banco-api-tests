const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao.js')
require('dotenv').config();

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            //Capturar o token
            const token = await obterToken('julio.lima','123456');
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
            expect(resposta.status).to.equal(201);
            console.log(resposta.body);
        })
        it('Deve retornar falha com 422 quando o valor de transferência for abaixo de R$ 10,00', async () => {
            //Capturar o token
            const token = await obterToken('julio.lima','123456');

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 8,
                    token: ""
                })
            expect(resposta.status).to.equal(422);
            console.log(resposta.body);
        })
    })
})