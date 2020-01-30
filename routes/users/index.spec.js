
describe("Endpoints", () => {

    describe("Users", () => {

        const users = require("./")


        const axios = {
            get: jest.fn().mockResolvedValue({ data: 1  }),         
            post: jest.fn().mockResolvedValue({ data: 1  })
        
        }

        //simulación de una peticion mongoose
        // const User = {
        //     findOne: jest.fn().mockResolvedValue({ user: })
        // }

        // expect(User.findeOne.mock.calls).toBe("Something")

        describe("get", () => {
            
            // spy
            // stub
            // mock
            it("should return a json user", async () => {

            // const req = {}

            const res = {
                send: jest.fn()
            }

            await users({ axios }).get({}, res)
        
            expect(res.send.mock.calls).toEqual([ [ 1 ] ])

            
            expect(axios.get.mock.calls).toEqual([[ "https://jsonplaceholder.typicode.com/users" ]])
            })


        })

        describe("post", () => {


            it("Should post and return a user", async () => {

            const req = {
                body: { name: "Paco" }
            }

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }
            await users({ axios }).post(req, res)

            expect(res.status.mock.calls).toEqual([ [ 200 ] ])
            expect(res.json.mock.calls).toEqual([ [ 1 ] ])
            expect(axios.post.mock.calls).toEqual([ [ "https://jsonplaceholder.typicode.com/users", { name: "Paco" } ] ])

            })
        })

    })

})