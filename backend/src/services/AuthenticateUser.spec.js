import * as supertest from 'supertest';

var server = supertest.agent("http://localhost:3333");

describe('AuthenticateUser',()=>{
    it('should be able to create a new user',async (done) =>{
        const user={
            name:"Johoe",
            email:"johndoe@gmail.com",
            password:"johndoe123"
        }
        const res = await server.post('/users').send(user)
        const credentials={
                email:user.email,
                password:user.password
        }
        const response = await server.post('/login').send(credentials)
        expect(response.statusCode).toBe(200)
        done()
 
    })
})
