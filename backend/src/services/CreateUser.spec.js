import * as supertest from 'supertest';

var server = supertest.agent("http://localhost:3333");

describe('CreateUser',()=>{
    it('should be able to create a new user',async (done) =>{
        const user={
                name:"Johoe",
                email:"johndoe1@gmail.com",
                password:"johndoe123"
        }
        const response = await server.post('/users').send(user)
        expect(response.statusCode).toBe(200)
        done()
 
    })
})
