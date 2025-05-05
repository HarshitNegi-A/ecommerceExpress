const getUsers=(req,res)=>{
    res.send('<h1>Fetching all users</h1>')
}

const addUsers=(req,res)=>{
    res.send("<h1>Adding a new user.</h1>")
}

const addUsersById=(req,res)=>{
    res.send(`<h2>Fetching user with ID: ${req.params.id}</h2>`)
}

module.exports={getUsers,addUsers,addUsersById}