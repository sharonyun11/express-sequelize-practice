'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student')
// const Test = require('./models/test')

const Test = db.define('test', {
  subject: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Test.belongsTo(Student);


module.exports = Test;
