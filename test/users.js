const chai = require('chai')
const bcrypt = require('bcrypt')
const chaiHttp = require('chai-http')

const expect = require('chai').expect
const should = chai.should()

const app = require('../index')
const User = require('../db/users')
chai.use(chaiHttp)

const host = 'http://localhost:4100'

describe('Login', () => {
  beforeEach(async () => {
    await User.destroy({ where: {} })
  })

  describe('POST /users', () => {
    it('should return ok', (done) => {
      chai.request(host)
        .post('/api/users')
        .send({
          email: 'hiram@gmail.com',
          password: '12345',
          name: 'foo'
        })
        .end((err, res) => {
          expect(err).to.equal(null)
          res.should.have.status(201)
          res.body.should.have.property('success')
          res.body.should.have.property('email')
          done()
        })
    })
  })
})