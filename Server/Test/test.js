import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../index';


chai.use(chaiHTTP);

//= ================================ Test Get Endpoint ================================================

describe('Test Get all', () => {
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
        expect(res.body.title).to.not.equal('');
        expect(res.body.title).to.not.be.equal('');
        expect(res.body.entry).to.not.be.equal('');
      
        gettEntry();
      });
  });

  it('Checking datatype', (gettEntry) => {
    chai
      .request(app)
      .post('/api/v1/entries')
      .send(postNew)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.be.equal(400);
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
        expect(res.status).to.not.be.equal(201);
        gettEntry();
      });
  });
});

//============================================= Put test ===============================================


describe('Test PUT', () => {
  it('Testing PUt endpoint', (gettEntry) => {
    chai
      .request(app)
      .put('/api/v1/entries/:id')
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.entry).to.not.be.equal('');
        
        gettEntry();
      });
  });
});