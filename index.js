const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const parser = require('parser')

const app = express()

const Question = require('./schema')
const Lesson = require('./schema')
const Subject = require('./schema')

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
  Subject.find()
    .then(subjects => {
      res.json(subjects)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/subjects', (req, res) => {
  res.redirect('/')
})

app.get('/subjects/:id', (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      res.json(subject)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/subjects/:subject_id/lesson/:id', (req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => {
      res.json(lesson)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(3001, () => {
  console.log('App listening on port 3001.')
})