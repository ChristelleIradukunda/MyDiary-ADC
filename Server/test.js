import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from './index';


chai.use(chaiHTTP);

//= ================================ Test Get Endpoint ================================================

describe('Test first API', () => {
  it('Checking the status of the api', (gettEntry) => {
    chai
      .request(app)
      .get('/api/v1/entries')
      .end((err, res) => {
        expect(res.status).to.equals(200);
        expect(res.body).to.be.an('object');
        expect(res.id).not.be.equal('id === id');


        gettEntry();
      });
  });
});

//================================= Test Post Endpoint ================================================

const postNew = {

  title: 'Secret',
  entry: "it's very cold",
  Date: '12/4/2019',
};

describe('Test Post', () => {
  it('Checking Post endpoint', (gettEntry) => {
    chai
      .request(app)
      .post('/api/v1/entries')
      .send(postNew)
      .end((err, res) => {
        expect(res.status).to.equals(400);
        expect(res.body.title).to.not.equal('');
        gettEntry();
      });
  });
});

//= ============================================ Test Delete ==========================================================


describe('Test Delete', () => {
  it('Checking delete', (gettEntry) => {
    chai
      .request(app)
      .delete('/api/v1/entries')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        gettEntry();
      });
  });
});

//= ============================================ Put test ===============================================


describe('Test PUT', () => {
  it('Testing PUt endpoint', (gettEntry) => {
    chai
      .request(app)
      .put('/api/v1/entries/:id')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        gettEntry();
      });
  });
});
