
module.exports = ({ axios }) => ({

 get: async (req, res ) => {

     const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

     res.send(data)
 },
 post: async (req, res ) => {

     const { body }  = req

     const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", body)
    
     res.status(200).json(data)
 },
 put: async (req, res ) => {

     const { id } = req.params

    const {body} = req
     const { data } = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)

     res.send(data)
 },
 delete: async (req, res ) => {

    const { id } = req.params

     const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

     res.send(data)
 },
})