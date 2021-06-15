const express = require('express');
const db = require('../../db');


var goals = express();

goals.get('/', async function (req, res) {
    const allGoals = await db.Goals.find({ }).exec();
    console.log('allGoals', allGoals)
    res.send(allGoals);
})

goals.post('/', async function (req, res) {
    console.log(req.body);
    // const newGoal = new db.Goals({
    //     naziv: req.body.naziv,
    //     opis: req.body.opis,
    //     vaznost: req.body.vaznost,
    // })
    // await newGoal.save();
    res.send('user saved');
})

goals.get('/:id', async function (req, res) {
    const goal = await db.Goals.findById(req.params.id).exec();
    console.log('goal', goal)
    res.send(goal);
})

module.exports = goals;
