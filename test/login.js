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
    const email = 'hiram@gmail.com'
    const password = '12345'
    await User.create({
      password: bcrypt.hashSync(password, 10),
      name: 'foo',
      email
    })
  })

  describe('POST /login', () => {
    it('should return an error 401', (done) => {
      chai.request(host)
        .post('/api/login')
        .send({
          email: 'foo'
        })
        .end((err, res) => {
          expect(err).to.equal(null)
          res.should.have.status(401)
          done()
        })
    })

    it('should return ok and get a token', (done) => {
      chai.request(host)
        .post('/api/login')
        .send({
          email: 'hiram@gmail.com',
          password: '12345'
        })
        .end((err, res) => {
          expect(err).to.equal(null)
          res.should.have.status(200)
          res.body.should.have.property('token')
          done()
        })
    })
  })
})