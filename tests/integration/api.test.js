const request = require('supertest');
const app = require('../../src/server/app.js');

/**
 * Testing user endpoints
 */

describe('POST /sign_up', function () {
  xit('respond with status code 200 upon successfully creating a user', function (done) {
      request(app)
          .post('/signUp')
          // sending data, username and password
          // set header
          .set('Accept', 'application/json')
          .expect(200, done);
  });
});

describe('POST /login', function () {
  xit('respond with status code 200 and send back a JWT upon successfully logging in a user', function (done) {
      request(app)
          .post('/login')
          .set('Accept', 'application/json')
          // check to see JWT or possibly some user data
          .expect(200, done);
  });
});

describe('GET /get_prompt', function () {
  xit('should respond with a random prompt from database', function (done) {
      request(app)
          .get('/get_prompt')
          .set('Accept', 'application/json')
          // check to see if response sends back a random prompt
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

describe('GET /get_history', function () {
  xit('should return history data of given user', function (done) {
      request(app)
          .get('/get_history')
          .set('Accept', 'application/json')
          // should respond with game history of given 
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

describe('GET /get_user_info', function () {
  xit('respond with status code 200 upon successfully creating a user', function (done) {
      request(app)
          .post('/create_user')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

describe('POST /save_results', function () {
  xit('respond with status code 200 upon successfully saving game results to database', function (done) {
      request(app)
          .post('/create_user')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

