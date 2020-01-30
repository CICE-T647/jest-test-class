const request = require("supertest")
const app = require("../../app")


describe("Server", ()=> {

    describe("Endpoints", ()=> {
        describe("Users", ()=> {
            describe("Get", ()=>{

                it("Should get a list of users", async()=> {
                    
                  const response = await request(app).get("/")

                  expect(response.statusCode).toEqual(200)
                  expect(response.body.length).not.toEqual(0)
                })
            
            })
        
        
        })
    })  
})