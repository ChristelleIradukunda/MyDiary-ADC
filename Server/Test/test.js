import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../index';



chai.use(chaiHTTP);

//= ================================ Test Get Endpoint ================================================

describe('Test Get all', () => {


  it('Checking the status of the api', gettEntry => {
    chai
    .request(app)
    .get('/api/v1/entries')
    .end((err, res) => {
      expect(res.status).to.equals(200);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.equals('Data retrieved successfully');
      gettEntry()
      });
  });
});

//================================= Test Post Endpoint ================================================


describe('Test Post', () => {
  it('Checking Post endpoint', gettEntry => {
    chai
      .request(app)
      .post('/api/v1/entries')
      .send({
        title: "Secretly",
        description: "This is a secret"
      })
      .end((err, res) => {
        expect(res.body.title).to.not.equal('');
        expect(res.body.entry).to.not.be.equal('');
        expect(res.body.status).not.to.be.null;
        gettEntry();
      });
  });

  it('Checking datatype', gettEntry => {
    chai
      .request(app)
      .post('/api/v1/entries')
      .send({
        title: "You have to make it",
        description: "This is a hard secret"
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.be.equal(200);
        expect(res.body.status).to.be.a('number');
        gettEntry();
      });
  });
});

//= ============================================ Test Delete ==========================================================


describe('Test Delete', () => {
  it('Checking delete', gettEntry => {
    chai
      .request(app)
      .delete('/api/v1/entries/:id')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.status).to.not.be.equal(201);
        expect(res.body.message).to.be.a('string');
        expect(res.body.status).to.be.equal('Deleted successfully');
        gettEntry();
      });
  });
  it('Checking specif entry', gettEntry => {
    chai
      .request(app)
      .post('/api/v1/entries')
      .send({
        title: "Secretly",
        description: "This is a secret"
      })
      .end((err, res) => {
        expect(res.body.title).to.not.equal('');
        expect(res.body.description).to.not.be.equal('');
        expect(res.body.status).not.to.be.null;
        gettEntry();
      });
  });
});



