const app = require('../src/server');
const session = require('supertest');
const agent = session(app);


describe('Test de RUTAS', () => {

    describe('GET rickandmorty/onsearch/{id}', () => {
        it('Responde con status: 200', () => {
            return agent.get('/rickandmorty/onsearch/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
            return agent.get('/rickandmorty/onsearch/1')
                .then((response) => {
                    expect(response.body).toEqual(expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        species: expect.any(String),
                        gender: expect.any(String),
                        image: expect.any(String)
                    }));
                });
        });

        it('Si hay un error responde con status: 500', () => {
            return agent.get('/rickandmorty/onsearch/IDqueNoExiste').expect(500);
          });

    });


    // Agrega más pruebas para las otras rutas de tu aplicación aquí...
});
