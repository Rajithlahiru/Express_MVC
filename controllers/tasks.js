const getAllTasks = (req, res) =>{
    res.send('All tasks 2')
}

const createTask = (req, res) =>{
    res.send('create Task')
}

const getTask = (req, res) =>{
    res.send('get one Task')
}

const updateTask = (req, res) =>{
    res.send('update Task')
}

const deleteTask = (req, res) =>{
    res.send('delete Task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
