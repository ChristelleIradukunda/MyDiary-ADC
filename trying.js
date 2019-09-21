import {expect} from 'chai';
import chaiHTTP from 'chai-http';
import app from '../api';
import chaiHttp from 'chai-http';
import { doesNotReject } from 'assert';

chai.use(chaiHttp);
const newuser ={
   id:8,
   title:cleaner,
   competed:true
};
describe('API server',() => {
   if('/users should add all users',done =>{
       chai 
             .request(app)
             .get('/status')
             . end((err,res) => {
                 expect(res.status).to.equals(200);
                 expect(res.body).to.be.an('object');
                 expect(res.body).not.to.be.empty;
                 expect(res.body.data[0].id).to.equals(1);
                 done(); 
             });
   });
});

