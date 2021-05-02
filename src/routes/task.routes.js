const express  = require('express');
const { translateAliases } = require('../models/task');

const router = express.Router();

const Task = require('../models/task')

router.get('/', async(req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.get('/:id', async(req, res) => {
    const tasks = await Task.findfindById(req.params.id)
    res.json(tasks)
})

router.post('/', async(req, res) => { // Proceso de entrada de datos
    const { name, description } = req.body;
    const tas = new Task({name, description})
    await tas.save()
    res.json({status: 'Se salvo esta cosa'})
})

router.put('/:id', async(req, res) => { // Actualizacion de los datos
    const { name, description } = req.body;
    const newTask = {name, description}
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({status: 'Funciono jajaja'})
})

router.delete('/:id', async(req, res) => { // Borrar Datos
    await Task.findByIdAndRemove(req.params.id)
    res.json({status: 'Eliminamos'})
})
module.exports = router;