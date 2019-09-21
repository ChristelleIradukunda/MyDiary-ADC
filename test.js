import {expect} from 'chai';

var chai = require('chai');
var expect = chai.expect;
describe('Equality Checks', function(){
   it('checking equality ', function(){
       expect('Heroku').to.equals('Heroku');
   });
   it('checking inequality', function(){
       expect('Hello').to.not.equal('ello')
   });
});